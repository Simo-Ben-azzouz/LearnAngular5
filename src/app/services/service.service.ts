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
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends DataService{

  constructor( http: HttpClient) 
  
  {
    super(http);
  }

}
