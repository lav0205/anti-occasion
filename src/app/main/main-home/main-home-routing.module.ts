import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MainHomeComponent } from './main-home.component';

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
    children: [{
      path: 'aboutus',
      component: AboutusComponent
    },{
      path: 'contactus',
      component: ContactusComponent
    },{
      path: 'register',
      component: RegisterComponent
    },{
      path: 'forgot-password',
      component: ForgotPasswordComponent
    },{
      path: 'login',
      component: LoginComponent,
    }] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainHomeRoutingModule { }
