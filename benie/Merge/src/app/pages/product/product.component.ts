import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Root } from 'src/app/interface/root';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  books:any;
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
    private api : ApiService, 
    private cartService : CartService,
    private router:Router,
    private bookService:BookServiceService
  ) {
   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.getBookById(params['id']))
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
  addtocart(books: any){
    this.cartService.addtoCart(books);
  }
  filter2(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  goToCartUrl(id){
    this.router.navigate(['/book',id,'cart'])
  }

  getBookById(id:number){
    this.bookService.getBookById(id).subscribe((data:Root) => this.books = data);
   }

}
