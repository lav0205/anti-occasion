import { NgModule } from '@angular/core';
import { MatchMedia } from '@angular/flex-layout/core/match-media';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { ForgotPasswordComponent } from './main/forgot-password/forgot-password.component';
import { LoginComponent } from './main/login/login.component';
import { MainHomeComponent } from './main/main-home/main-home.component';
import { RegisterComponent } from './main/register/register.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { BookingsComponent } from './modules/bookings/bookings.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { Game1Component } from './modules/games/game1/game1.component';
import { Game2Component } from './modules/games/game2/game2.component';
import { Game3Component } from './modules/games/game3/game3.component';
import { Game4Component } from './modules/games/game4/game4.component';
import { Game5Component } from './modules/games/game5/game5.component';
import { GamesComponent } from './modules/games/games.component';
import { MathsComponent } from './modules/games/maths/maths.component';
import { MusicComponent } from './modules/music/music.component';
import { OccasionComponent } from './modules/occasion/occasion.component';
import { OccasionpageComponent } from './modules/occasionpage/occasionpage.component';
import { WeddingpageComponent } from './modules/occasionpage/weddingpage/weddingpage.component';
import { SuboccasionsComponent } from './modules/suboccasions/suboccasions.component';
import { VenuepageComponent } from './modules/venues/venuepage/venuepage.component';
import { VenuesComponent } from './modules/venues/venues.component';
import { WishlistComponent } from './modules/wishlist/wishlist.component';
import { ReligiousComponent } from './occasions/religious/religious.component';
import { WeddingComponent } from './occasions/wedding/wedding.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

const routes: Routes = [{
  path: '',
  component: MainHomeComponent
}, {
  path: 'aboutus',
  component: AboutusComponent
}, {
  path: 'contactus',
  component: ContactusComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'login/default',
  component: DefaultComponent
},{
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'occasion',
  component: OccasionComponent
}, {
  path: 'articles',
  component: ArticlesComponent
}, {
  path: 'sidebar',
  component: SidebarComponent
}, {
  path: 'suboccasions',
  component: SuboccasionsComponent
}, {
  path: 'venues',
  component: VenuesComponent
},{
  path: 'venues/:id',
  component: VenuepageComponent
},{
  path: 'religious',
  component: ReligiousComponent
},{
  path: 'religious/:id',
  component: OccasionpageComponent
},{
  path: 'wedding',
  component: WeddingComponent
},{
  path: 'wedding/:id',
  component: WeddingpageComponent
},{
  path: 'games',
  component: GamesComponent
},{
  path: 'game1',
  component: Game1Component
},{
  path: 'game2',
  component: Game2Component
},{
  path: 'game3',
  component: Game3Component
},{
  path: 'game4',
  component: Game4Component
},{
  path: 'game5',
  component: Game5Component
},{
  path: 'maths',
  component: MathsComponent
},{
  path: 'music',
  component: MusicComponent
},{
  path: 'wishlist',
  component: WishlistComponent
},{
  path: 'bookings',
  component: BookingsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
