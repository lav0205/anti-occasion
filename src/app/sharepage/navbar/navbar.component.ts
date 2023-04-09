import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject, OnInit, Renderer2 } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2, private router: Router){}

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['login']);
    alert("Logout successful");
  }
}
