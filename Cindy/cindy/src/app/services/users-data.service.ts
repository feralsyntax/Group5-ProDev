import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { Root } from '../interface/root';


@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'https://gfive.herokuapp.com/api/books/';
 

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.url);
  }
  
  getUser(id:number): Observable<Root> {
    return this.http.get<Root>(this.url + id);
  }
}
