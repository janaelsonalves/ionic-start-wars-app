import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';
import { Observable } from 'rxjs';

/**
 * Generated class for the AthletesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html',
})
export class AthletesPage {

  mercado: Observable<any>

  athletes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private cartola: CartolaProvider) {
    this.mercado = this.cartola.getMarketData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthletesPage');
  }

  openDetails(athlete: any) {
    this.navCtrl.push('AthleteDetailsPage', { athlete: athlete });
  }

  getFormattedImage(foto: any) {
    try {
      return foto.replace(/FORMATO/i, "140x140");
    } catch (error) {
      return '';
    }
  }
}
