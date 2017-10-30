import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { DatePipe } from '@angular/common';

import { MealService } from '../meal.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css']
})
export class MealEditComponent implements OnInit {
  today: number = Date.now();
	id: number;
	editMode = false;
  mealForm: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private mealService: MealService,
    private dataStorageService: DataStorageService,
    private router: Router) { }

    ngOnInit() {
    	this.route.params
    		.subscribe(
    			(params: Params) => {
    				this.id = +params['id'];
    				this.editMode = params['id']!= null;
            this.initForm();
    			}
    		);
    }

    onSubmit() {
      if (this.editMode) {
        this.mealService.updateMeal(this.id, this.mealForm.value)
      } else {
        this.mealService.addMeal(this.mealForm.value);
      }
      this.onSaveData();
      this.onCancel();
    }

    onSaveData() {
    this.dataStorageService.storeMeals()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

    onCancel() {
      this.router.navigate(['../'], {relativeTo: this.route})
    }

    private initForm() {
      let mealName: string = '';
      let fat: number;
      let carbs: number;
      let protein: number;
      let date: number


      if(this.editMode) {
        const meal = this.mealService.getMeal(this.id);
        mealName = meal.mealName;
        fat = meal.fat;
        carbs = meal.carbs;
        protein = meal.protein;
        date = meal.date;
      }

    this.mealForm = new FormGroup({
      'mealName': new FormControl(mealName, Validators.required),
      'fat': new FormControl(fat, Validators.required),
      'carbs': new FormControl(carbs, Validators.required),
      'protein': new FormControl(protein, Validators.required),
      'date': new FormControl(date, Validators.required)

    });

  }

}
