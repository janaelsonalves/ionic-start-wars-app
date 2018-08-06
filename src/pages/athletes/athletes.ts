import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';
import { Observable } from 'rxjs';
import { Athlete } from '../../models/athlete.model';

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

  mercado: Observable<any>;
  isLoading: boolean = true;
  results: any;

  athletes: Array<Athlete>;
  teams: Array<any>;
  positions: Array<any>;
  status: Array<any>;

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
          this.results = results;
          this.athletes = results.atletas;
          this.positions = this.getArrayFromObject(results.posicoes);
          this.teams = this.getArrayFromObject(results.clubes);
          this.status = this.getArrayFromObject(results.status);
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

  getArrayFromObject(obj) {
    return Object.keys(obj)
      .map(key => obj[key]);
  }

  getTeams() {
    return Observable.create((observer) => {
      observer.next(this.teams);
    });
  }

  findTeamById(teamId) {
    try {
      let team = this.teams.find(team => team.id == teamId);
      return team;
    } catch (error) {
      console.log(error);

    }
  }

  getPositions() {
    return Object.keys(this.results.posicoes)
      .map(key =>
        this.positions = this.results.posicoes[key]
      );
  }

  findPositionById(posId) {
    try {
      let pos = this.positions.find(pos => pos.id == posId);
      return pos;
    } catch (error) {
      console.log(error);

    }
  }

  getStatus() {
    return Object.keys(this.results.status)
      .map(key =>
        console.log(this.results.status[key])
      );
  }

  filterItems(ev: any) {
    this.getAtletas();
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.athletes = this.athletes.filter(function(item) {
        return item.apelido.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  getAtletas(){
    this.athletes =  this.results.atletas;
  }
}
