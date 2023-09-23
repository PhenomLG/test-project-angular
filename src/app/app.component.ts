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
  customString: string = "Hello World";
  customNumber: number = 123.4564654;

  constructor() {
  }

  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}


