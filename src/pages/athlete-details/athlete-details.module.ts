import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteDetailsPage } from './athlete-details';

@NgModule({
  declarations: [
    AthleteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AthleteDetailsPage),
  ],
})
export class AthleteDetailsPageModule {}
