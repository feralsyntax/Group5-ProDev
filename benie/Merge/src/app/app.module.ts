import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SearchComponent } from './components/search/search.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UsersComponent } from './component/users/users.component';

import { APP_WINDOW } from '../app/app.options'

// import { CommentsModule } from './comments.module';
import { NavComponent } from './auth/nav/nav.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { Filter2Pipe } from './shared/filter2.pipe';
import { ProductsComponent } from './component/products/products.component';
import { RatingfeatureComponent } from './components/ratingfeature/ratingfeature.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { CommentsBoxComponent } from './components/comments-box/comments-box.component';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './pages/landing/landing.component';

import { CommentServiceInterface } from './service/comment-service.interface';
import { CommentService } from './service/comment.service';
import { OfflineCommentService } from './service/offline-comment.service';
import { OnlineCommentService } from './service/online-comment.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { PostBookComponent } from './pages/post-book/post-book.component';
// import { SearchFeatureComponent } from './pages/search-feature/search-feature.component';

export function commentServiceFactory(params?: any): CommentServiceInterface {
  return new OfflineCommentService(params);
}


@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    FooterComponent,
    HeaderComponent,
    UserdetailComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    CartComponent,
    ProductsComponent,
    Filter2Pipe,
    RatingfeatureComponent,
    CommentComponent,
    CommentFormComponent,
    CommentsComponent,
    UserprofileComponent,
    NewCommentComponent,
    CommentsBoxComponent,
    CommentsContainerComponent,
    CommentComponent,
    TimeAgoPipe,
    LandingComponent,
    ProfileComponent,
    HomeComponent,
    ProductComponent,
    PurchaseComponent,
    SearchResultsComponent,
    BookDetailsComponent,
    PostBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxStarRatingModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: CommentService,
    useFactory: commentServiceFactory,
    deps: [APP_WINDOW],},OfflineCommentService,
    OnlineCommentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
