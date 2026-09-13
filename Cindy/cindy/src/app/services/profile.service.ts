import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'https://gfive.herokuapp.com/api/user/profile/';

  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
  getUserById(id:number): Observable<User>{
    return this.http.get<User>(this.url + id)
  }
}
