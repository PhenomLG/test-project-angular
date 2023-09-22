import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import {HeroService} from "./services/hero.service";
import { DetailComponent } from './pages/detail/detail.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    DashboardComponent,
    DetailComponent,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
