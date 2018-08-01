import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwApiProvider } from '../../providers/sw-api/sw-api';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the PlanetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {

  planets: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapi: SwApiProvider) {
    this.planets = this.swapi.getPlanets();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetsPage');
  }

}
