import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeddingService } from '../../order/wedding/wedding.service';

@Component({
  selector: 'app-weddingpage',
  templateUrl: './weddingpage.component.html',
  styleUrls: ['./weddingpage.component.css']
})
export class WeddingpageComponent {
  constructor(private param:ActivatedRoute,private service:WeddingService,private router: Router) {}
  getWeddingId:any;
  weddingData:any;
  ngOnInit(): void {
    this.getWeddingId = this.param.snapshot.paramMap.get('id');
    console.log(this.getWeddingId,'getwedding');
    if(this.getWeddingId)
    {
      this.weddingData = this.service.weddingDetails.filter((value)=>{
          return value.id == this.getWeddingId;
      });
      console.log(this.weddingData,'weddingdata>>');
    }
  }

  Booking(){
    this.router.navigate(['bookings']);
    alert("Your booking has been placed successfully")
  }
}
