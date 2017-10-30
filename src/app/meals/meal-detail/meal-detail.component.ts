import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Meal } from '../meal.model';

import { MealService } from '../meal.service';
import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
	meal: Meal;
	id: number;

  constructor(private mealService: MealService,
  			  private route: ActivatedRoute,
          private dataStorageService: DataStorageService,
  			  private router: Router) {
  }

  ngOnInit() {
  	this.route.params
  		.subscribe(
  			(params: Params) => {
  				this.id = +params['id'];
  				this.meal = this.mealService.getMeal(this.id);
  			})
  }

  ngOnDestroy() {
    this.onSaveData();
  }

  onEditMeal() {
  	this.router.navigate(['edit'], {relativeTo: this.route});
  	// this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRMeal() {
    this.mealService.deleteMeal(this.id)
    this.router.navigate(['/meals']);
  }

  onSaveData() {
    this.dataStorageService.storeMeals()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

}
