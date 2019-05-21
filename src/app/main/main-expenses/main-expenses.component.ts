import { Component, OnInit } from '@angular/core';
import {ExpenseHttpService} from '../../services/expense-http.service';
import {Observable} from 'rxjs';
import {Expense} from '../../services/expense';

@Component({
  selector: 'app-main-expenses',
  templateUrl: './main-expenses.component.html',
  styleUrls: ['./main-expenses.component.css']
})
export class MainExpensesComponent implements OnInit {

  constructor(private httpService: ExpenseHttpService) { }
  allExpenses$: Observable<Array<Expense>>;


  ngOnInit() {
    this.allExpenses$ = this.httpService.expenses$;
  }
  reload(){

    this.httpService.getExpenses();
  }

  remove(e: Expense){
    if (window.confirm('Are you sure, you want to delete?'))
    this.httpService.deleteExpense(e.id).subscribe(x => this.httpService.getExpenses());
  }
}
