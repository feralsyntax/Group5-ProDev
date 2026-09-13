import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { UsersComponent } from './component/users/users.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PostBookComponent } from './pages/post-book/post-book.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home',component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // { path: 'book', component: ProductComponent },
  { path: 'book/:id', component: ProductComponent },
  { path: 'book/:id/cart', component: PurchaseComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserdetailComponent },
  { path: 'addBook', component: PostBookComponent},
  { path: 'userprofile/:id', component: ProfileComponent},
  { path: '**', redirectTo:'users' },
  {path:'product', component: ProductsComponent},
  // {path:'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
