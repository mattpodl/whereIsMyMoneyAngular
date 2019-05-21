import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {Expense} from './expense';
import {map} from 'rxjs/operators';

@Injectable()
export class ExpenseHttpService {
  private expensesObs = new BehaviorSubject<Array<Expense>>([]);
  expenses$ = this.expensesObs.asObservable();

  private url = 'https://localhost:5001/api/Expenses/';

  constructor(private http: HttpClient) {
    this.getExpenses();
  }


  getExpenses() {
    return this.http.get<Array<Expense>>(this.url).subscribe(
      expence => {
        this.expensesObs.next(expence);
      },
      err => {
        console.log(err);
      }
    );
  }

  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>(this.url + id);
  }

  getExpensesByCategory() {
    return this.http.get<Array<CategorySum>>(this.url+'search/');
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.url, expense);
  }

  deleteExpense(id: number) {
    return this.http.delete<Expense>(this.url + id);
  }

  changeExpense(e: Expense) {
    throw Error('NOT IMPLEMENTED');
  }

}

export class CategorySum {
  constructor(public item1?: string, public item2?: number) {}
}
