import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // стили только для текущего компонента
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor() {
  }
}


