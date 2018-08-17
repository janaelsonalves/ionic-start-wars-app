import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the AthleteStatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-athlete-stats',
  templateUrl: 'athlete-stats.html',
})
export class AthleteStatsPage {

  openedSearchbar: boolean;
  items: string[];
  data: any;
  athletes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartola: CartolaProvider) {
    this.getItems();
    this.cartola.getMarketData()
      .subscribe(data => {
        this.data = data;
        this.athletes = data.atletas;
      });
  }

  getItems() {
    this.items = [
      "John",
      "Mary",
      "Jack",
      "Rose",
      "Michael",
      "Anne",
      "Natalie"
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteStatsPage');
  }

  filterItems(event: any) {
    this.getItems();
    let val = event.target.value;
    console.log(val);
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return item.toLocaleLowerCase()
          .indexOf(val) > -1;
      });
    }
  }

  getAthletes(): any {
    this.athletes = this.data.atletas;
    console.log(this.athletes)
  }

  filterAthletes(event: any) {
    this.getAthletes();
    let val = event.target.value;
    console.log(val);
    if (val && val.trim() != '') {
      this.athletes = this.athletes.filter((item) => {
        return item.apelido.toLocaleLowerCase().indexOf(val) > -1;
      });
    }
    //return this.getAthletes();
  }

  onClear(event: any){
    console.log('clear', event);
    this.getAthletes();
  }

  toggleSearchbar() {
    this.openedSearchbar = !this.openedSearchbar;
  }
}
