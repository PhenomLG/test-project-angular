import { Component } from '@angular/core';
import {Hero} from "./models/hero.models";
import {HeroService} from "./services/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // стили только для текущего компонента
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }
}
