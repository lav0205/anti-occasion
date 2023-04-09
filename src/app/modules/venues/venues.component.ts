import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VenueService } from '../order/venue/venue.service';
VenueService

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent {
  constructor(private service:
    VenueService, private router:Router
     ) {}

  venueData:any;

  ngOnInit(): void{
    this.venueData = this.service.venueDetails;
  }

}
