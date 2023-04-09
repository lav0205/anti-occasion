import { Injectable } from '@angular/core';
import { ReligiousComponent } from 'src/app/occasions/religious/religious.component';
import { WeddingComponent } from 'src/app/occasions/wedding/wedding.component';
import { VenuesComponent } from 'src/app/modules/venues/venues.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  items: ReligiousComponent[] = [];

  addToCart(religious: ReligiousComponent) {
    this.items.push(religious);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }


}
