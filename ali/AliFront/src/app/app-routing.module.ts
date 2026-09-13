import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookslistComponent } from './bookslist/bookslist.component';
import { CartComponent } from './cart/cart.component';
// import { profile } from 'console';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ReaderprofileComponent } from './readerprofile/readerprofile.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'products', component:ProductsComponent},
  {path:'readerprofile', component:ReaderprofileComponent},
  {path:'cart', component:CartComponent},
  {path:'bookslist', component:BookslistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
