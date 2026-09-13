import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { SearchService } from 'src/app/services/search.service';
import { FormsModule } from '@angular/forms';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  posts: any;
  books:any;
  postTitle: any;
  searchText: any;
  users:any;
  authenticated = false;

  constructor(private seachService:SearchService,private api : ApiService, private cartService : CartService,private router:Router,private http:HttpClient) {
    this.seachService.getUsers().subscribe((data) => {
      this.users = data
      console.warn("data",data)
    });

    this.seachService.getBooks().subscribe((book_data) => {
      this.books = book_data
      console.warn("data",book_data)
    });
   }

  ngOnInit() {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    this.searchEverything()

    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="Fiction" || a.category ==="Fiction"){
          a.category ="Fiction"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter2(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  
  searchEverything(){
    this.seachService.search().subscribe((res:any) => {
      console.log(res);
      this.posts = res 
    })
  }

  titleValue(title:any){
    this.postTitle = title 
  }

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  goToUrl(id){
    this.router.navigate(['/book',id])
  }
  goToCartUrl(id){
    this.router.navigate(['/book',id,'cart'])
  }
  goToProfileUrl(id){
    this.router.navigate(['/userprofile',id])
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}
