import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HeroesComponent} from "./pages/heroes/heroes.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  // http://domen.ru/dashboard/10
  //               //dashboard/:id
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
