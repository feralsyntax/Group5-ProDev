import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:number;

  constructor(private profileService:ProfileService, private route:ActivatedRoute) { }
  profile: any;

  ngOnInit(): void {
    // this.getAllUsers();
    this.route.params.subscribe(params => this.getUserById(params['id']))
  }
//  getAllUsers(){
//   this.profileService.getAllUsers().subscribe((data:User[]) => this.profiles = data);
//  }
 getUserById(id:number){
  this.profileService.getUserById(id).subscribe((data:User) => this.profile = data);
 }

 postProfile(profile_data:any)
  {
    console.warn(profile_data) 
    this.profileService.addProfile(profile_data).subscribe((result) => {
      console.warn(result)
    });
  }

}
