import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../classes/books/book';
@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  book: Book;
  url = 'https://gfive.herokuapp.com/api/books/';
  // readonly url = 'http://127.0.0.1:8000/api/books/';

  constructor(private http: HttpClient) {}
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    //  'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
  });

  addBook(book_data: any) {
    return this.http.post(this.url, book_data);
  }
  saveUser(book_data: any) {
    // return this.http.post(this.url, data);
    return this.http.post(this.url, book_data);
  }
}
