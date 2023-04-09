import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit{
  images = [  
    { img: "../assets/img/e1.jpg" },  
    { img: "../assets/img/e2.jpg" },  
    { img: "../assets/img/e3.jpg" },  
    { img: "../assets/img/e4.jpg" },  
    { img: "../assets/img/e5.jpg" },  
    { img: "../assets/img/e6.jpg" }, 
  ];  
  
  slideConfig = {  
    "slidesToShow": 6,  
    "slidesToScroll": 6,  
    "dots": true,  
    "infinite": true  
  };  
  ngOnInit(): void {
    
  }

}
