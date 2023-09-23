import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HeroesComponent} from "./pages/heroes/heroes.component";
import {HomeComponent} from "./pages/home/home.component";
import {HeroComponent} from "./pages/hero/hero.component";
import {Error404Component} from "./pages/error404/error404.component";




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
