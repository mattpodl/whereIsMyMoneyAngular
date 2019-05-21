import {Component, OnInit} from '@angular/core';
import {ExpenseHttpService} from '../../services/expense-http.service';
import {FormBuilder, Validators} from '@angular/forms';
import {CategoryHttpService} from '../../services/category.http.service';
import {Observable} from 'rxjs';
import {Category} from '../../services/category';

@Component({
  selector: 'app-main-expenses-add',
  templateUrl: './main-expenses-add.component.html',
  styleUrls: ['./main-expenses-add.component.css']
})
export class MainExpensesAddComponent implements OnInit {
  private allCategories$: Observable<Array<Category>>;

  constructor(
    private httpService: ExpenseHttpService,
    private categoryService: CategoryHttpService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.allCategories$ = this.categoryService.category$;
  }

  public expenseData = this.fb.group({
    description: ['', [Validators.required, Validators.maxLength(50)]],
    amount: ['', [Validators.required]],
    date: ['', Validators.required],
    categoryId: ['', Validators.required],
  });

  onSubmit() {
    this.httpService.addExpense(this.expenseData.value).subscribe(x => this.httpService.getExpenses());
  }
}
