import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { SwApiProvider } from '../../providers/sw-api/sw-api';

/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  people: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapi: SwApiProvider) {
    this.people = this.swapi.getPeople();
  }

  ionViewDidLoad() {
  }

}
