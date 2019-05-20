import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../services/http.service';
import {Expense} from '../services/expense'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.allExpenses$ = this.httpService.expenses$;
  }

  allExpenses$: Observable<Array<Expense>>;


  getAll() {

  }

}


