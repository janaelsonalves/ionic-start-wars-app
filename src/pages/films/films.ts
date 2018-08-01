import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { SwApiProvider } from '../../providers/sw-api/sw-api';

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  films: Observable<any>;

  constructor(public navCtrl: NavController, private swapi: SwApiProvider) {
    this.films = this.swapi.getFilms();    
  }
  
  ionViewWillEnter() {
  }

  openDetails(film: any) {
    this.navCtrl.push('FilmDetailsPage', { film: film })
  }

  goToPlanets() {
    this.navCtrl.parent.select(2);
  }
}
