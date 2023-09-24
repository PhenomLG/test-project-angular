import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Hero} from "../../models/hero.models";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit{
  hero!: Hero;
  id!: number;
  maxNameLength: number = 18;
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroService,
              private location: Location)
  {
     activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.heroService.getHero(this.id).subscribe((hero: Hero) => {
      if(typeof hero.id !== 'undefined') {
        this.isLoading = false;
        this.hero = hero;
      }
      else {
        this.isLoading = false;
        this.isError = true;
      }
    });
  }

  goToPreviousPage(): void {
    this.location.back();
  }

  onNameChange() {
    this.heroService.editHero(this.hero).subscribe();

  }
}
