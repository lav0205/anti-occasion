import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  public occasion : any = [];
  public grandTotal !: number;

  constructor(private wishlistService : WishlistService){}
  ngOnInit(): void {
    this.wishlistService.getOccasions().subscribe(res=>{
      this.occasion = res;
      this.grandTotal = this.wishlistService.getTotalPrice();
    })
  }

  removewishlistItem(wishlist : any){
    this.wishlistService.removewishlistItem(wishlist);
  }

  emptycart(){
    this.wishlistService.removeAllwishlist;
  }


}
