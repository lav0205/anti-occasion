import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlistItemList : any = []
  public occasionList = new BehaviorSubject<any>([]);

  constructor() {}

  getOccasions(){
    return this.occasionList.asObservable();
  }

  setOccasions(occasion : any){
    this.wishlistItemList.push(...occasion);
    this.occasionList.next(occasion);
  }

  wishlist(occasion : any){
    this.wishlistItemList.push(occasion);
    this.occasionList.next(this.wishlistItemList);
    this.getTotalPrice();
    console.log(this.wishlistItemList);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.wishlistItemList.map((a:any)=>{
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removewishlistItem(occasion : any){
    this.wishlistItemList.map((a:any, index:any)=>{
      if(occasion.id=== a.id){
        this.wishlistItemList.splice(index,1);
      }
    });
  }


  removeAllwishlist(){
    this.wishlistItemList = []
    this.occasionList.next(this.wishlistItemList);
  }
}
