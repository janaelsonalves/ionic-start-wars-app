import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {

  private apiCartolaProxy = "/cartola";

  constructor(public http: HttpClient) {
    console.log("Hello CartolaProvider Provider")
  }

  getMarketData(): Observable<any> {
    return this.http.get(`${this.apiCartolaProxy}/atletas/mercado`);
  }
}
