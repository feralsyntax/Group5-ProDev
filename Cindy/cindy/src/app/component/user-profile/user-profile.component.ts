import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private profileService:ProfileService, private route:ActivatedRoute) { }
  profiles: any;
  profile: User={
    id: 0,
    name: '',
    email: '',
    user: undefined,
    profile_picture: '',
    bio: '',
    phone_number: ''
  };

  ngOnInit(): void {
    this.getAllUsers();
    this.route.params.subscribe(params => this.getUserById(params['id']))
  }
 getAllUsers(){
  this.profileService.getAllUsers().subscribe((data:User[]) => this.profiles = data);
 }
 getUserById(id:number){
  this.profileService.getUserById(id).subscribe((data:User) => this.profile = data);
 }
}
