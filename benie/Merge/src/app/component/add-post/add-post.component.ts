import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  users: any;
  constructor(private UsersData: UsersDataService,  private http: HttpClient,) {
    this.UsersData.users().subscribe((data) => {
      this.users = data;
    });
  }
  submitBookForm(book_data: any) {
    console.warn(book_data);
    this.http
    .post('http://127.0.0.1:8000/api/books/', book_data)
    .subscribe((result) => {
      console.warn('result', result);
    });
  }
  ngOnInit(): void {
    
  }
  
}

