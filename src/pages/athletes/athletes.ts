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
  isLoading: boolean = true;

  athletes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private cartola: CartolaProvider) {
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad AthletesPage');
  } */

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: 'Por favor, aguarde...',
    });

    loader.present().then(() => {
      this.cartola.getMarketData()
        .subscribe(results => {
          this.athletes = results.atletas;
        });
      loader.dismiss();
    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present().then(() => {
      /* this.mercado = this.cartola.getMarketData() */
      this.cartola.getMarketData().subscribe(results => {
        this.athletes = results.atletas;
      });
      loading.dismiss();
    });
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
