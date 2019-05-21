import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Expense} from '../services/expense';
import {ExpenseHttpService} from '../services/expense-http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private httpService: ExpenseHttpService) { }
  allExpenses$: Observable<Array<Expense>>;


  ngOnInit() {
    this.allExpenses$ = this.httpService.expenses$;
  }

}
