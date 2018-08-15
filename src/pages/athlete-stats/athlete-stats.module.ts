import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteStatsPage } from './athlete-stats';

@NgModule({
  declarations: [
    AthleteStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(AthleteStatsPage),
  ],
})
export class AthleteStatsPageModule {}
