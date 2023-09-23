import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';

import {HeroService} from "./services/hero.service";

import {provideAnimations} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    DashboardComponent,
    HomeComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [HeroService, provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
