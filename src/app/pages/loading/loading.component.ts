import { Component } from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'loading',
  template:`
    <div *ngIf="loadingService.isLoading | async">
      <spinner></spinner>
    </div>
    <div *ngIf="loadingService.isError | async">
      <app-error404></app-error404>
    </div>
  `
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {
  }
}
