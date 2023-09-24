import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from "../models/hero.models";

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(heroes: Hero[], searchName: string): Hero[] {
    if(searchName != "") {
      return heroes.filter(hero => hero.name.includes(searchName));
    }
    return heroes;
  }

}
