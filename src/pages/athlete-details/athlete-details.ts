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
  positon: any;
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.athlete = navParams.get("athlete");
    this.positon = navParams.get("position");
    this.team = navParams.get("team");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleteDetailsPage');
    console.log(`Team: ${this.team.nome}`);
    console.log(`Position: ${this.positon.nome}`);
    
  }

  getFormatedImage() {
    try {
      return this.athlete.foto.replace(/FORMATO/i, "140x140");
    } catch (error) {
      return '';
    }
  }

  /* getScores(scouts: any) {
    let scores: any[] = [];
    for (const key in scouts) {
      let quantity = scouts[key];
      let scout = this.getScoutBySigla(key);
      let total = this.getScoreByScout(quantity, scout.pontos);
      scores.push({
        scout: scout,
        quantity: quantity,
        total: total
      })
    }
    return scores;
  }

  getNegativeScore() {
    return this.scores.filter(x => x.total < 0)
      .reduce((acc, obj) => {
        return acc + obj.total;
      }, 0)
  }

  getPositiveScore() {
    return this.scores.filter(x => x.total >= 0)
      .reduce((acc, obj) => {
        return acc + obj.total;
      }, 0);
  }

  getScoutBySigla(sigla: string): Scout {
    try {
      return SCOUTS.find(x => x.sigla == sigla);
    } catch (error) {
      return null;
    }
  } */

  getScoreByScout(quantity: number, value: number): number {
    return quantity * value;
  }

  getTotalScore(): number {
    /* try {
      return this.scores.reduce((acc, obj) => {
        return acc + obj.total;
      }, 0)
    } catch (error) { */
    return this.athlete.media_num * this.athlete.jogos_num;
    //}
  }

  isEmpty(obj: any) {
    if (obj == null) {
      return true;
    } else {
      return Object.keys(obj).length == 0;
    }
  }
}
