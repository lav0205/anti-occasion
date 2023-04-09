import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from './main/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anti-Occasion';

  user!: Object;
  userUrl!: string;

  constructor(
    private userService: UserService,private http: HttpClient
  ) {}

  ngOnInit() {
     const userUrl = 'https://localhost:7291/db';
  }

  getUser() {
    return this.http.get(this.userUrl);
  }
}
