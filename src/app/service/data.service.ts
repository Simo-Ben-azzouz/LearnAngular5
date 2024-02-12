import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // private urlAPI = 'https://api.github.com/users/Simo-Ben-azzouz/following';
  constructor(private http : HttpClient,@Inject(String) private urlAPI: string) { }
  
  getAll() {
    return this.http.get(this.urlAPI)
  }
  
}
