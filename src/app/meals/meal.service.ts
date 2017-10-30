import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Meal } from './meal.model';
import { TrendingDataService } from '../trending-data/trending-data.service';

@Injectable()
export class MealService {
	mealsChanged = new Subject<Meal[]>();

	private meals: Meal[] = [];

	constructor(private tdService: TrendingDataService) {}

	setMeals(meals: Meal[]) {
		this.meals = meals;
		this.mealsChanged.next(this.meals.slice());
	}

	getMeals() {
		return this.meals.slice();
	}

	getMeal( index: number ) {
		return this.meals[index];
	}

	addMeal(meal: Meal) {
		this.meals.push(meal);
		this.mealsChanged.next(this.meals.slice());
	}

	updateMeal(index: number, newMeal: Meal) {
		this.meals[index] = newMeal;
		this.mealsChanged.next(this.meals.slice());
	}

	deleteMeal(index: number) {
		this.meals.splice(index, 1);
		this.mealsChanged.next(this.meals.slice());
	}
}