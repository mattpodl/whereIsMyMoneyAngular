import { Component, OnInit } from '@angular/core';
import {CategoryHttpService} from '../../services/category.http.service';
import {Observable} from 'rxjs';
import {Category} from '../../services/category';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit {

allCategories$: Observable<Array<Category>>;
constructor(
  private categoryService: CategoryHttpService,
            ) { }


  ngOnInit() {
this.allCategories$ = this.categoryService.category$;
}
removeCategory(id: number){
  if(window.confirm("Na pewno chcesz usunać kategorie?"))
  this.categoryService.deleteCategory(id).subscribe(data => this.categoryService.getCategories())
}
}
