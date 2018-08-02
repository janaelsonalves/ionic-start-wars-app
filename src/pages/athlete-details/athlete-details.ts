import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AthleteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-details',
  templateUrl: 'athlete-details.html',
})
export class AthleteDetailsPage {

  athlete: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.athlete = navParams.get("athlete");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteDetailsPage');
  }

  getFormatedImage() {
    try {
      return this.athlete.foto.replace(/FORMATO/i, "140x140");
    } catch (error) {
      return '';
    }
  }
}
