import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MealsComponent } from './meals/meals.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';
import { TrendingDataComponent } from './trending-data/trending-data.component';
import { TrendingEditComponent } from './trending-data/trending-edit/trending-edit.component';
import { MealItemComponent } from './meals/meal-list/meal-item/meal-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TrendingDataService } from './trending-data/trending-data.service';
import { AppRoutingModule } from './app-routing.module';
import { MealStartComponent } from './meals/meal-start/meal-start.component';
import { MealEditComponent } from './meals/meal-edit/meal-edit.component';
import { MealService } from './meals/meal.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MealsComponent,
    MealListComponent,
    MealDetailComponent,
    TrendingDataComponent,
    TrendingEditComponent,
    MealItemComponent,
    DropdownDirective,
    MealStartComponent,
    MealEditComponent,
    SignupComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TrendingDataService, MealService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
