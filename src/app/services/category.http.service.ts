import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Category} from './category';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class CategoryHttpService {
  private categotyObs = new BehaviorSubject<Array<Category>>([]);
  category$ = this.categotyObs.asObservable();

  private url = 'https://localhost:5001/api/Categories/';

  constructor(private http: HttpClient) {
    this.getCategories();
  }


  getCategories() {
    return this.http.get<Array<Category>>(this.url).subscribe(
      category=> {
        this.categotyObs.next(category);
      },
      err => {
        console.log(err);
      }
    );
  }
  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.url + id);
  }

  addCategory(category: Category): Observable<Category> {
    console.log("metoda http service");
    return this.http.post<Category>(this.url, category);
  }

  /** Usuwamy post */
  deleteCategory(id: number) {
    return this.http.delete<Category>(this.url + id);
  }
  //
  // changePost(post: Post) {
  //   return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  // }
}
