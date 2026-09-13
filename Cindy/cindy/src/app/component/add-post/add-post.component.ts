import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { BookServiceService } from 'src/app/services/book-service.service'; 
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  users: any;
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
  });
  constructor(private http: HttpClient, public BookService: BookServiceService) {
    // this.books = UsersData.saveUser(data)
    // this.UsersData.users().subscribe((data) => {
    //   this.users = data;
    // });
  }

  submitBookForm(book_data: any) {
    // let data = { title: 'e', author: 'r', description: 'p', publisher: 'k' };

    console.warn(this.postForm.value);
    console.log(book_data);

    this.BookService.saveUser(book_data).subscribe(res=>{
      alert(res.toString());
    },(error)=>{console.log(error)});

    // this.UsersData.getUsers(book_data)
    // this.http.post<any>('http://127.0.0.1:8000/api/books/', data).subscribe(
    //   (result) => {
    //     this.users = result;
    //     console.log(this.users);
    //     console.log(result);
    //     console.warn('result', result);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  get title() {
    return this.postForm.get('title');
  }
  get author() {
    return this.postForm.get('author');
  }
  get description() {
    return this.postForm.get('description');
  }
  get publisher() {
    return this.postForm.get('publisher');
  }
  ngOnInit(): void {}
}
