import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Meal } from '../meal.model';
import { MealService } from '../meal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit, OnDestroy {
	meals: Meal[];
  subscription: Subscription;

  constructor(private mealService: MealService,
  			  private router: Router,
  			  private route: ActivatedRoute,
          private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.mealService.mealsChanged
        .subscribe(
          (meals: Meal[]) => {
            this.meals = meals;
          }
         );
  	this.meals = this.mealService.getMeals();
    this.dataStorageService.getMeals();
  }

  onNewMeal() {
  	this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
