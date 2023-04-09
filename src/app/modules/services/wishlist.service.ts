import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlistItemList:any=[]

  public occasionList= new BehaviorSubject<any>([]);

  constructor() { }

  getOccasions(){
    this.occasionList.asObservable();
  }
  setOccasion(occasion:any){
    this.wishlistItemList.push(...occasion);
    this.occasionList.next(occasion);
  }
  wishlist(occasion:any){
    this.wishlistItemList.push(occasion);
    this.occasionList.next(this.wishlistItemList);
    this.getTotalPrice();
  }

  getTotalPrice(){
    let grandTotal=0;
    this.wishlistItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal
  }

  removeCartItem(occasion:any){
    this.wishlistItemList.map((a:any, index:any)=>{
      if(occasion.id ===a.id)
      this.wishlistItemList.splice(index,1)
    })
    this.wishlistItemList.next(this.wishlistItemList);
  }


}
