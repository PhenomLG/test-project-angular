import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Hero} from "../../models/hero.models";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit{
  hero!: Hero;
  id!: number;
  maxNameLength: number = 18;

  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroService,
              private location: Location,
              private loadingService: LoadingService)
  {
     activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.loadingService.showSpinner();
    this.heroService.getHero(this.id).subscribe((hero: Hero) => {
      this.hero = this.loadingService.manageLoading(hero);
    });
  }

  goToPreviousPage(): void {
    this.location.back();
  }

  onNameChange() {
    this.heroService.editHero(this.hero).subscribe();
  }
}
