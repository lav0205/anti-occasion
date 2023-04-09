import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userData } from './login-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData:any = {};
  pwd: string = "";
  email: string = "";

  constructor(private router: Router,private http: HttpClient) {
     this.userData = JSON.parse(JSON.stringify(userData));
  }
  // public loginForm!: FormGroup

  onSubmit() {
    // this.http.get<any>("http://localhost:3000/users")
    // .subscribe(res=>{
    //   const user = res.find((a:any)=>{
    //     return a.email === this.loginForm.value.email && a.pwd === this.loginForm.value.pwd
    //   });
    //   if(user){
    //     alert('Login Succesful');
    //     this.loginForm.reset()
    //   this.router.navigate(['login/default'])
    //   }else{
    //     alert("user not found")
    //   }
    // },err=>{
    //   alert("Something went wrong")
    // })
      console.log(this.loginForm.value)

      if(this.userData.data.length > 0) {
        let fetchUser: Array<any> = this.userData.data.filter((data: any) => data.email == this.email);

        if(fetchUser?.length > 0) {
          if(fetchUser[0]?.password == this.pwd ) {
            this.router.navigate(['login/default']);
            alert("Login Successful")
          } else {
            alert("login failed");
          }
        } else {
          alert("invalid email and password");
        }
      } else {
        alert("invalid email and password");
      }
  }
  ngOnInit() {
    // this.loginForm = this.formbuilder.group({
    //   email: [''],
    //   password: ['', Validators.required]
    // })
  }

  passFormControl = new FormControl('', [
    Validators.required,
]);
confirmFormControl = new FormControl('', [
    Validators.required,
    ]);

     hide =true;

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.email,Validators.required]),
    pwd: new FormControl("",[Validators.required,Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    ),Validators.minLength(6)])
  });

  loginSubmited(){
    console.log(this.loginForm.get("email"))
  }

  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }

  get Password(): FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }

}
