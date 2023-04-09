import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from '../helpers/validateform';
import { userData } from '../login/login-data';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'highcharts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData:any = {};
  pwd: string = "";
  cpwd: string = "";
  email: string = "";
  name: string = "";

  constructor(private router: Router,private http: HttpClient, private formBuilder: FormBuilder) {
    this.userData = JSON.parse(JSON.stringify(userData));
 }
//  public registerForm !: FormGroup

  ngOnInit(): void{

    // this.registerForm = this.formBuilder.group({
    //   name: [""],
    //   email: [""],
    //   pwd: [""],
    //   cpwd: [""]
    // })
  }

  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(4)]),
    email: new FormControl("",[Validators.email,Validators.required]),
    pwd: new FormControl("",[Validators.required,Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    ),Validators.minLength(6)]),
    cpwd: new FormControl("",[Validators.required,Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    ),Validators.minLength(6)])
  });

  registerSubmited(){
    console.log(this.registerForm.get("name"))
  }

  get Name(): FormControl{
    return this.registerForm.get("name") as FormControl;
  }

  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }

  get Password(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }

  get ConfirmPassword(): FormControl{
    return this.registerForm.get("cpwd") as FormControl;
  }

  OnRegister() {
    // this.http.post<any>("http://localhost:3000/users",this.registerForm.value).subscribe( res => {
    //   alert("Register Successful");
    //   this.registerForm.reset
    //   this.router.navigate(["login"])
    // }, error =>{
    //   alert("Something went wrong")
    // })

    console.log(this.registerForm.value)

    if(this.userData.data.length > 0) {
      let fetchUser: Array<any> = this.userData.data.filter((data: any) => data.email == this.email);

      if(fetchUser?.length > 0) {
        if(fetchUser[0]?.password == this.pwd ) {
          this.router.navigate(['login']);
          alert("register successful")
        } else {
          alert("register failed");
        }
      } else {
        alert("invalid details");
      }
    } else {
      alert("invalid details");
    }
}



}
