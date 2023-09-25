import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from "../../models/hero.models";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit{
  title: string = "My Heroes";
  heroes: Hero[] = [];
  searchName: string = "";

  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
     this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
       if(heroes.length > 0) {
         this.heroes = heroes;
         this.isLoading = false;
       }
       else {
         this.isLoading = false;
         this.isError = true;
       }
     });
  }

  onSearchName($event: string)   {
    this.searchName = $event;
  }
}
