import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainExpensesComponent } from './main-expenses/main-expenses.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { MainChartComponent } from './main-chart/main-chart.component';
import { MainAuthorComponent } from './main-author/main-author.component';
import {MainComponent} from './main.component';
import { MainExpensesAddComponent } from './main-expenses-add/main-expenses-add.component';
import { MainCategoriesAddComponent } from './main-categories-add/main-categories-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartModule} from 'angular-highcharts';

@NgModule({
  declarations: [MainExpensesComponent, MainCategoriesComponent, MainChartComponent, MainAuthorComponent, MainComponent, MainExpensesAddComponent, MainCategoriesAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartModule,
  ]
})
export class MainModule { }
