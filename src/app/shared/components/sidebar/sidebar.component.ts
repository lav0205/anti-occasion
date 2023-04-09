import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private formbuilder: FormBuilder, private _router: Router) {
    
  }

  public redirectDashborad(){
    this._router.navigate(['/dashboard'], { });
  }
}
