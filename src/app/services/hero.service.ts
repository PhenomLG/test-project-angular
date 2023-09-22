import {Injectable} from '@angular/core';
import {Hero} from "../models/hero.models";

@Injectable()
export class HeroService {
  constructor() { }
  heroes: Hero[] = [
    new Hero('Dr.Nice', 12),
    new Hero('Bombasto', 13),
    new Hero('Celeritas', 14),
    new Hero('Magneta', 15),
    new Hero('Poldi', 16),
  ];
  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(num: number): Hero {
     return this.heroes[num];
  }

  createHero() {

  }

  updateHero() {

  }

  destroyHero() {

  }
}
