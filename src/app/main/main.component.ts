import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Expense} from '../services/expense';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  allExpenses$: Observable<Array<Expense>>;


  ngOnInit() {
    this.allExpenses$ = this.httpService.expenses$;
  }

}
