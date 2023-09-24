import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/hero.models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  topHeroes: Hero[] = [];
  title: string = 'Top Heroes';

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.topHeroes = heroes.slice(0, 4));
  }
}
