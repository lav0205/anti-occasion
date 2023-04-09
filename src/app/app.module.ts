import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './main/main-home/main-home.component';
import { LoginComponent } from './main/login/login.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from "@angular/material/select";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RegisterComponent } from './main/register/register.component';
import { ForgotPasswordComponent } from './main/forgot-password/forgot-password.component';
import { DefaultModule } from './layouts/default/default.module';
import { NgChartsModule } from 'ng2-charts';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './main/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    LoginComponent,
    AboutusComponent,
    ContactusComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    SlickCarouselModule,
    DefaultModule,
    NgChartsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{

  ngOnInit() {

  }
 }
