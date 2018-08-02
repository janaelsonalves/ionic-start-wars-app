import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { SwApiProvider } from '../providers/sw-api/sw-api';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { CartolaProvider } from '../providers/cartola/cartola';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    SwApiProvider,
    FavoriteProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CartolaProvider,
  ]
})
export class AppModule { }
