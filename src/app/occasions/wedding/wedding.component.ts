import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeddingService } from 'src/app/modules/order/wedding/wedding.service';
WeddingService
@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent {
  constructor(private service:
    WeddingService, private router:Router
     ) {}

  weddingData:any;

  ngOnInit(): void{
    this.weddingData = this.service.weddingDetails;
  }
}
