import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReligiousOccasionService } from '../order/religious-occasion/religious-occasion.service';

@Component({
  selector: 'app-occasionpage',
  templateUrl: './occasionpage.component.html',
  styleUrls: ['./occasionpage.component.css']
})
export class OccasionpageComponent {
  constructor(private param:ActivatedRoute,private service:ReligiousOccasionService, private router: Router) {}
  getReligiousId:any;
  religiousData:any;
  ngOnInit(): void {
    this.getReligiousId = this.param.snapshot.paramMap.get('id');
    console.log(this.getReligiousId,'getreligious');
    if(this.getReligiousId)
    {
      this.religiousData = this.service.religiousDetails.filter((value)=>{
          return value.id == this.getReligiousId;
      });
      console.log(this.religiousData,'religiousdata>>');
    }
  }

  Booking(){

      this.router.navigate(['bookings']);
      alert("Your booking has been placed successfully")


  }

}
