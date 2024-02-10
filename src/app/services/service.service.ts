import { error } from 'console';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { throwError } from 'rxjs';
import {Observable} from 'rxjs';
import { AppError } from '../common/app-error';
import { catchError } from 'rxjs/operators';
import { animate } from '@angular/animations';
import { BadInput } from '../common/bad-input-error';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlAPI = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.urlAPI)
    .pipe(
      catchError(this.handleError)
    );
  }

  createPost(post: any) {
    return this.http.post(this.urlAPI, post)
    .pipe(
      catchError(this.handleError)
    );
  }

  updatePost(post: any) {
    return this.http.put(this.urlAPI + '/' + post.id, post)
    .pipe(
      catchError(this.handleError)
    );
  }

  deletePost(post: any) {
    return this.http.delete(this.urlAPI + '/' + post.id)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  
  // Method handling errors
    private handleError (error : HttpErrorResponse)
    {
      // Not Found
      if (error.status === 404) {
        return throwError(new NotFoundError(error.message));
      }

      // Bad Request
      if (error.status === 400) {
        return throwError(new BadInput(error.message));
      }
        return throwError(AppError);
      
    }

}
