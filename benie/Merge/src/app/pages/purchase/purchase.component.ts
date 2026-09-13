import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private CartService : CartService) { }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.CartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.CartService.removeCartItem(item);
  }
  emptycart(){
    this.CartService.removeAllCart();
  }

}
