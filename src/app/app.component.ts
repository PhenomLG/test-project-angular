import {Component} from '@angular/core';
import {pageAnimation} from './animation';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [pageAnimation]

})
export class AppComponent {
  title = 'Tour of Heroes';
  isError: boolean = false;
  isLoading: boolean = false;

  constructor() {
  }
  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  onLoading($event: boolean): void {
    this.isLoading = $event;
  }

  onError($event: boolean): void {
    this.isError = $event;
  }
}


