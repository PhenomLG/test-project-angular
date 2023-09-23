import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Hero} from "../../models/hero.models";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})

export class HeroComponent implements OnInit{
  @Input() hero!: Hero;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
     activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    if(!this.hero) {
     this.hero = this.heroService.getHero(this.id);
    }
  }

  goToPreviousPage() {
    this.location.back();
  }
}
