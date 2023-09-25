import { Component } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
      <svg style="margin-left: 20px; background: #ffffff; display: block; shape-rendering: auto;" width="201px" height="201px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path d="M11 50A39 39 0 0 0 89 50A39 42.1 0 0 1 11 50" fill="#1d3f72" stroke="none">
          <animateTransform attributeName="transform" type="rotate" dur="0.5681818181818182s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.55;360 50 51.55"></animateTransform>
        </path>
      </svg>
  `
})
export class SpinnerComponent {

}
