import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Root } from 'src/app/interface/root';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;
  private user: Root = {
    title: '',
    author: '',
    description: '',
    publisher: '',
    image: undefined,
    category: '',
    price: 0,
  };

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {
  
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((results: any) => {
      console.log(results);
      this.users = results;
    });
  }
}
