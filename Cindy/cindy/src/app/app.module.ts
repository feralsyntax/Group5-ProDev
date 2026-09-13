import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent, 
    UsersComponent, 
    UserdetailComponent, 
    FooterComponent, 
    HeaderComponent, 
    AddPostComponent, UserProfileComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
})
export class AppModule {}
