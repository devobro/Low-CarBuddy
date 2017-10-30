import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { TrendingDataComponent } from './trending-data/trending-data.component';
import { MealStartComponent } from './meals/meal-start/meal-start.component';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';
import { MealEditComponent } from './meals/meal-edit/meal-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{ path: 'meals', component: MealsComponent, children: [
		{ path: '', component: MealStartComponent },
		{ path: 'new', component: MealEditComponent, canActivate: [AuthGuard] },
		{ path: ':id', component: MealDetailComponent },
		{ path: ':id/edit', component: MealEditComponent, canActivate: [AuthGuard] },
	] },
	{ path: 'trending-data', component: TrendingDataComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: '**', redirectTo: '/'}

]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}