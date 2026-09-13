import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
import { Root } from './interface/root';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Books';
  users: any;
  private user: Root = {
    title: '',
    author: '',
    description: '',
    publisher: '',
    image: '',
    category: '',
    price: '',
  };

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private UsersData: UsersDataService,
  ) {
    this.UsersData.users().subscribe((data) => {
      this.users = data;
    });
  }
  // getUserFormData(data: any) {
  //   console.warn(data);
  //   this.UsersData.saveUser(data).subscribe((data) => {
  //     console.warn(data);
  //   });
  // }
  submitBookForm(book_data: any) {
    console.warn(book_data);
    this.http.post('https://gfive.herokuapp.com/api/books/', book_data).subscribe((result)=>{
      console.warn('result', result)
    });

    // this.bookService.addBook(book_data).subscribe((result) => {
    //   console.warn(result);
      // this.addBook=result
    // });
  }

  ngOnInit(): void {
    // this.onGetUser();
    // this.onGetUsers();
    // this.onCreateUser();
  }
  // onGetUsers(): void {
  //   this.userService.getUsers().subscribe(
  //     (response) => console.table(response),
  //     (error: any) => console.log(error),
  //     () => console.log('Done getting users')
  //   );
  // }
  // onGetUser(): void {
  //   this.userService.getUser().subscribe(
  //     (response) => console.log(response),
  //     (error: any) => console.log(error),
  //     () => console.log('Done getting user')
  //   );
  // }
  // onCreateUser(): void {
  //   this.userService.createUser(this.user).subscribe(
  //     (response) => console.log(response),
  //     (error: any) => console.log(error),
  //     () => console.log('Done creating user')
  //   );
  // }
}
