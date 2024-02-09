import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { throwError } from 'rxjs';
import {Observable} from 'rxjs';
import { AppError } from '../common/app-error';
import { catchError } from 'rxjs/operators';
import { animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlAPI = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.urlAPI);
  }

  createPost(post: any) {
    return this.http.post(this.urlAPI, post);
  }

  updatePost(post: any) {
    return this.http.put(this.urlAPI + '/' + post.id, post)
  }

  deletePost(post: any) {
    return this.http.delete(this.urlAPI + '/' + post.id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            return throwError(new NotFoundError(error.message));
          } else {
            return throwError(AppError);
          }
        })
      );
  }
  
  
  

}
