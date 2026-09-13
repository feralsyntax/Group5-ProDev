import {Component, OnInit} from '@angular/core';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;
  users:any;

  constructor(private http: HttpClient,private router:Router,private profileService:ProfileService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getUserById(params['id']))
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

  getUserById(id:number){
    this.profileService.getUserById(id).subscribe((data:User) => this.users = data);
   }

}
