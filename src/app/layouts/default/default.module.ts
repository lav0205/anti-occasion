import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { OccasionComponent } from 'src/app/modules/occasion/occasion.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav";
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { GamesComponent } from 'src/app/modules/games/games.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from "@angular/material/card";
import { SuboccasionsComponent } from 'src/app/modules/suboccasions/suboccasions.component';
import { VenuesComponent } from 'src/app/modules/venues/venues.component';
import { OccasionpageComponent } from 'src/app/modules/occasionpage/occasionpage.component';
import { ReligiousComponent } from 'src/app/occasions/religious/religious.component';
import { WeddingComponent } from 'src/app/occasions/wedding/wedding.component';
import { WeddingpageComponent } from 'src/app/modules/occasionpage/weddingpage/weddingpage.component';
import { MusicComponent } from 'src/app/modules/music/music.component';
import { WishlistComponent } from 'src/app/modules/wishlist/wishlist.component';
import { BookingsComponent } from 'src/app/modules/bookings/bookings.component';
import { VenuepageComponent } from 'src/app/modules/venues/venuepage/venuepage.component';
import { MathsComponent } from 'src/app/modules/games/maths/maths.component';
import { Game1Component } from 'src/app/modules/games/game1/game1.component';
import { Game2Component } from 'src/app/modules/games/game2/game2.component';
import { Game3Component } from 'src/app/modules/games/game3/game3.component';
import { Game4Component } from 'src/app/modules/games/game4/game4.component';
import { Game5Component } from 'src/app/modules/games/game5/game5.component';
import { MatRadioModule } from "@angular/material/radio";


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    OccasionComponent,
    SidebarComponent,
    ArticlesComponent,
    GamesComponent,
    SuboccasionsComponent,
    VenuesComponent,
    OccasionpageComponent,
    ReligiousComponent,
    WeddingComponent,
    WeddingpageComponent,
    MusicComponent,
    WishlistComponent,
    BookingsComponent,
    VenuepageComponent,
    MathsComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class DefaultModule { }
