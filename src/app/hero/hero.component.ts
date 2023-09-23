import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../models/hero.models";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../services/hero.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})

export class HeroComponent implements OnInit{
  @Input() hero!: Hero;
  id!: number;

  private subsc: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroService,
              private router: Router) {
     this.subsc = activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    if(!this.hero) {
     this.hero = this.heroService.getHero(this.id);
    }
  }

  goToPreviousPage() {
    this.router.navigate(['/heroes'], {
    });
  }
}
