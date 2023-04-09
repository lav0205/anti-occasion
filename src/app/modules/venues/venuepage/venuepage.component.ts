import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueService } from '../../order/venue/venue.service';

@Component({
  selector: 'app-venuepage',
  templateUrl: './venuepage.component.html',
  styleUrls: ['./venuepage.component.css']
})
export class VenuepageComponent {
  constructor(private param:ActivatedRoute,private service:VenueService, private router: Router) {}
  getVenueId:any;
  venueData:any;
  ngOnInit(): void {
    this.getVenueId = this.param.snapshot.paramMap.get('id');
    console.log(this.getVenueId,'getvenue');
    if(this.getVenueId)
    {
      this.venueData = this.service.venueDetails.filter((value)=>{
          return value.id == this.getVenueId;
      });
      console.log(this.venueData,'venuedata>>');
    }
  }

  Booking(){
    this.router.navigate(['bookings']);
    alert("Your booking has been placed successfully")
  }
}
