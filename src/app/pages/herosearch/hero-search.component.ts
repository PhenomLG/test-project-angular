import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-herosearch',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  @Output() onSearchName: EventEmitter<string> = new EventEmitter<string>();

  title: string = "search hero";
  searchName: string = "";

  onInputName() {
    this.onSearchName.emit(this.searchName);
  }
}
