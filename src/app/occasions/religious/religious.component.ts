import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReligiousOccasionService } from 'src/app/modules/order/religious-occasion/religious-occasion.service';
import { WishlistService } from 'src/app/modules/services/wishlist.service';


@Component({
  selector: 'app-religious',
  templateUrl: './religious.component.html',
  styleUrls: ['./religious.component.css']
})
export class ReligiousComponent {
  constructor(private service:
    ReligiousOccasionService, private router:Router, private wishlistService : WishlistService
     ) {}

  religiousData:any;

  ngOnInit(): void{
    this.religiousData = this.service.religiousDetails;

    this.religiousData.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    });
  }

  wishlist(wishlist: any){
    this.wishlistService.wishlist(wishlist);
  }

}
