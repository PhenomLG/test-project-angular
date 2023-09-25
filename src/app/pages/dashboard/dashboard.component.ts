import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/hero.models";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  topHeroes: Hero[] | null = [];
  title: string = 'Top Heroes';

  constructor(private heroService: HeroService,
              private loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.loadingService.showSpinner();
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => {
        const result = this.loadingService.manageLoading(heroes);
        this.topHeroes = result ? result.slice(0, 4) : null;
      });
  }
}
