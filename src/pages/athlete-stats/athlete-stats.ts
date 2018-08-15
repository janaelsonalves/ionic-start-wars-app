import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getItems();
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

  toggleSearchbar(){
    this.openedSearchbar = !this.openedSearchbar;
  }
}
