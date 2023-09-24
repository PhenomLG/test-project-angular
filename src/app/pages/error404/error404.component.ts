import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <section class="error">
      <h2>{{errorMessage}}</h2>
      <img src="../../../assets/error.gif" alt="Error" height="280" width="280">
    </section>'
  `
})
export class Error404Component {
  @Input() errorMessage: string = 'The page is not found';
}
