import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseURL = 'https://gfive.herokuapp.com/api/books/'

  constructor(private http:HttpClient) { }

  search(){
    return this.http.get(this.baseURL)
  }
}
