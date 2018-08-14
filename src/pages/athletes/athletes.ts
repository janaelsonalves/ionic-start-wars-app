import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { updateImgs } from 'ionic-angular/components/content/content';
import { Img } from 'ionic-angular/components/img/img-interface';
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

  @ViewChild(Content) content: Content;

  openedSeachbar: boolean = false;
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


  ngAfterViewInit(): void {
    if (this.content) {
      this.content.imgsUpdate = () => {
        if (this.content._scroll.initialized && this.content._imgs.length && this.content.isImgsUpdatable()) {
          // Reset cached bounds
          this.content._imgs.forEach((img: Img) => (<any>img)._rect = null);

          // Use global position to calculate if an img is in the viewable area
          updateImgs(this.content._imgs, this.content._cTop * -1, this.content.contentHeight, this.content.directionY, 1400, 400);
        }
      };
    }
  }

  renderDividers(record: any, recordIndex: number, records: any): any {
    let heading: any = ['War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport',
      'War/Adventure', 'Science Fiction/Fantasy', 'Humour', 'Sport'],
      num: number = 0;


    // IF this is every tenth record we want to
    // inject the correct heading from the above
    // array into the list to act as a divider
    // between different comic genres
    if (recordIndex % 10 === 0) {
      num++;
      return heading[num * recordIndex / 10];
    }
    return null;
  }

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
    this.navCtrl.push('AthleteDetailsPage',
      {
        athlete: athlete,
        team: this.findTeamById(athlete.clube_id),
        position: this.findPositionById(athlete.posicao_id),
        status: this.findStatusById(athlete.status_id)
      }
    );
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
      return this.teams.find(team => team.id == teamId);
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
      return this.positions.find(pos => pos.id == posId);
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

  findStatusById(statusId) {
    try {
      return this.status.find(status => status.id == statusId);
    } catch (error) {
      console.log(error);

    }
  }

  // Search

  filterItems(ev: any) {
    this.getAtletas();
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.athletes = this.athletes.filter(function (item) {
        return item.apelido.toLowerCase().includes(val.toLowerCase());
      });
    }
    return this.athletes;
  }

  canceledSearch() {

  }

  getAtletas() {
    this.athletes = this.results.atletas;
  }
}
