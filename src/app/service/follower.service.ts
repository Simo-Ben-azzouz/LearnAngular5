import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private urlAPI = 'https://api.github.com/users/Simo-Ben-azzouz/following';
  // constructor(private http : HttpClient) { }
  http = inject(HttpClient);
  getAll() {
    return this.http.get(this.urlAPI)
      
  }
}
