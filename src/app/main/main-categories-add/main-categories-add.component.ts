import {Component, OnInit} from '@angular/core';
import {CategoryHttpService} from '../../services/category.http.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-categories-add',
  templateUrl: './main-categories-add.component.html',
  styleUrls: ['./main-categories-add.component.css']
})
export class MainCategoriesAddComponent implements OnInit {

  constructor(
    private categoryService: CategoryHttpService,
    private fb: FormBuilder,
  ) {
  }

  categoryData = this.fb.group({
    name: ['',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(4),
      ]],
  });

  ngOnInit() {
  }

  onSubmit() {
    this.categoryService.addCategory(this.categoryData.value).subscribe(x => this.categoryService.getCategories());
  }
}
