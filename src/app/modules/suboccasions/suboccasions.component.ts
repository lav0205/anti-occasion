import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suboccasions',
  templateUrl: './suboccasions.component.html',
  styleUrls: ['./suboccasions.component.css']
})
export class SuboccasionsComponent {
  constructor(private router: Router) { }
  religious() {
    this.router.navigate(['/religious'])
  }

  wedding(){
    this.router.navigate(['/wedding'])
  }
  ngOnInit() { }



}
