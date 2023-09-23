import {Hero} from "../models/hero.models";

export class HeroService {
  private heroes: Hero[] = [
    new Hero('Dr.Nice', 12),
    new Hero('Bombasto', 13),
    new Hero('Celeritas', 14),
    new Hero('Magneta', 15),
    new Hero('Dynama', 16),
    new Hero('Dr.IQ', 16),
    new Hero('Magma', 16),
    new Hero('Tornado', 16),
  ];

  constructor() { }
  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(id: number): Hero {
     // Сделаем допущение, что данные получены с БД и свойство id – primary key
     return this.heroes[this.heroes.findIndex(hero => hero.id == id)];
  }
}
