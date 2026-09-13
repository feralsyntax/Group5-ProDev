import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../interface/root';


@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  url = 'https://gfive.herokuapp.com/api/books/';
  
  constructor(private http:HttpClient) {}

  addBook(book_data: any) {
    return this.http.post(this.url, book_data);
  }
  // getBook(book_data:any){
  //   return this.http.post(this.url, book_data)
  // }
  getBookById(id:number): Observable<Root>{
    return this.http.get<Root>(this.url + id)
  }
}
