import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Hero} from "../models/hero.models";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showSpinner() {
    this.isLoading.next(true);
  }

  hideSpinner() {
    this.isLoading.next(false);
  }

  hideError() {
    this.isError.next(false);
  }

  switchToError() {
    this.isError.next(true);
    this.isLoading.next(false);
  }



  manageLoading(value: Hero | Hero[]): any {
    const isArray = Array.isArray(value);
    const hasValue = isArray ? value.length > 0 : typeof value.id !== 'undefined';

    if(hasValue) {
      this.hideError();
      this.hideSpinner();
      return value;
    }
    this.switchToError();
    return null;
  }

  constructor() { }
}
