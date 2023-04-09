import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  baseurl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  // registerUser(){
  //   return this.http.post(this.baseServerurl + "User/CreateUser",
  //   // {
  //   //   // Name: user[0],
  //   //   // Email: user[1],
  //   //   // Password: user[2],
  //   //   // ConfirmPassword: user[3]
  //   // },
  //   {
  //     responseType: 'text',
  //   });
  // }

}


