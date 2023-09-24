import {Hero} from "../models/hero.models";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class HeroService {
  private apiUrl: string = 'http://heroapi.com/api';

  constructor(private http: HttpClient) {
  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/heroes`).pipe(catchError(error => {
      return throwError(() => error)}))
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/heroes?id=${id}`).pipe(catchError(error => {
      return throwError(() => error)}));
  }
}
