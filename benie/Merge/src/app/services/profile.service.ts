import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interface/profile';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'https://gfive.herokuapp.com/api/user/profile/';
  // url_2 = 'https://gfive.herokuapp.com/api/user/profile/1';

  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
  getUserById(id:number): Observable<User>{
    return this.http.get<User>(this.url + id)
  }
  addProfile(profile_data: any) {
    return this.http.post(this.url, profile_data);
  }
  
}