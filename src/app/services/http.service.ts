import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import {Expense} from './expense';

@Injectable()
export class HttpService {
  private expensesObs = new BehaviorSubject<Array<Expense>>([]);
  expenses$ = this.expensesObs.asObservable();

  constructor(private http: HttpClient) {
    this.getExpenses();
  }

  /** Pobieramy wszystkie posty */
  getExpenses() {
    return this.http.get<Array<Expense>>('https://localhost:5001/api/Expenses').subscribe(
      expence => {
        this.expensesObs.next(expence);
      },
      err => {
        console.log(err);
      }
    );
  }
  /** Pobieramy jeden post podając id */
  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>('https://localhost:5001/api/Expenses' + id);
  }

  /** Pobieramy wszystkie posty usera podając w parametrze jego userID */
  // getPostByUser(userId: number): Observable<Array<Expense>> {
  //   const parm = new HttpParams().set('userId', userId + '');
  //   return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', { params: parm });
  // }

  /** Dodajemy nowy post */
  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>('https://localhost:5001/api/Expenses', expense);
  }

  // /** Aktualizujemy/Podmieniamy post */
  // updatePost(post: Post): Observable<Post> {
  //   return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  // }

  /** Usuwamy post */
  deleteExpense(id: number) {
    return this.http.delete<Expense>('https://localhost:5001/api/Expenses' + id);
  }
  //
  // /** Aktualizujemy pola w post */
  // changePost(post: Post) {
  //   return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  // }
}
