import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SwApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwApiProvider {

  constructor(private http: HttpClient) {
    console.log('Hello SwApiProvider Provider');
  }

  getFilms() {
    return this.http.get("/api/films/");
  }

  getPeople() {
    return this.http.get("/api/people/");
  }

  getPlanets() {
    return this.http.get("/api/planets/");
  }
}
