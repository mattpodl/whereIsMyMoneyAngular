import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from '../main/main.component';
import {MainChartComponent} from '../main/main-chart/main-chart.component';
import {MainAuthorComponent} from '../main/main-author/main-author.component';
import {MainExpensesComponent} from '../main/main-expenses/main-expenses.component';
import {MainCategoriesComponent} from '../main/main-categories/main-categories.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'chart',
    component: MainChartComponent
  },
  {
    path: 'author',
    component: MainAuthorComponent
  },
  {
    path: 'expenses',
    component: MainExpensesComponent
  },
  {
    path: 'categories',
    component: MainCategoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
