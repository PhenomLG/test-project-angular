import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero.models";
import {HeroService} from "../../services/hero.service";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit{
  title: string = "My Heroes";
  heroes: Hero[] = [];
  searchName: string = "";

  constructor(private heroService: HeroService,
              private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.loadingService.showSpinner();
     this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
        this.heroes = this.loadingService.manageLoading(heroes);
     });
  }

  onSearchName($event: string)   {
    this.searchName = $event;
  }
}
