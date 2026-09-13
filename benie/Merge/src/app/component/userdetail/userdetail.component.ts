import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Root } from 'src/app/interface/root';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  users: any;
  user: Root = {
    title: '',
    author: '',
    description: '',
    publisher: '',
    image: undefined,
    category: '',
    price: 0,
  };
  profile: User = {
    id: 0,
    name: '',
    email: '',
  };
  constructor(
    private UsersData: UsersDataService,
    private activatedRoute: ActivatedRoute,
    private http:HttpClient,
  ) {
   
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getUser(params['id']));  
  }
  getUser(id: number) {
    this.UsersData.getUser(id).subscribe((data: Root) => (this.user = data));
  }
}
