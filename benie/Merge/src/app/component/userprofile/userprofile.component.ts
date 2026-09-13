import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private profileService:ProfileService, private route:ActivatedRoute) { }
  profiles: any;
  profile: User={
    id: 0,
    name: '',
    email: ''
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
