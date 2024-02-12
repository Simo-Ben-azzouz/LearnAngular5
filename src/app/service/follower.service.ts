import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FollowerService extends DataService{

  
  constructor(http : HttpClient) 
  {
    super(http,'https://api.github.com/users/Simo-Ben-azzouz/following')
   }
  // http = inject(HttpClient);
  // getAll() {
  //   return this.http.get(this.urlAPI)
      
  // }
}
