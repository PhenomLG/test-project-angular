import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-heroSearch',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  @Output() onSearchName: EventEmitter<string> = new EventEmitter<string>();

  title: string = "search hero";
  searchName: string = "";

  onInputName(): void {
    this.onSearchName.emit(this.searchName);
  }
}
