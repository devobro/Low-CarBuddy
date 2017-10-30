import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MealService } from '../meals/meal.service';
import { Meal } from '../meals/meal.model';
import 'rxjs/Rx';
import * as firebase from 'firebase';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
	constructor(private http: Http, private mealService: MealService, private authService: AuthService) {}

	storeMeals() {
		const token = this.authService.getToken();
		return this.http.put('https://project-23c7c.firebaseio.com/meals.json?auth=' + token, this.mealService
			.getMeals());
	}

	getMeals() {

		const token = this.authService.getToken();
			
		this.http.get('https://project-23c7c.firebaseio.com/meals.json?auth=' + token)
			.map(
				(response: Response) => {
					const meals: Meal[] = response.json();
					return meals;
				}
			)
			.subscribe(
				(meals: Meal[]) => {
					this.mealService.setMeals(meals)
				}
			);
	}
}