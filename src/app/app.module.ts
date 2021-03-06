import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MatchPage} from '../pages/match/match';
import { AddMatchPage } from '../pages/add-match/add-match';
import { RegistrationModalPage} from '../pages/registration-modal/registration-modal';
import { GuestModal} from '../pages/guest-modal/guest-modal';
import { AddStadiumPage} from '../pages/add-stadium/add-stadium';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MatchProvider } from '../providers/match/match';
import { AuthProvider } from '../providers/auth/auth';
import { StadiumProvider } from '../providers/stadium/stadium';

 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyB2JMeZEhGBBPn8nq49I2ib7gBEn50wNns",
    authDomain: "at-football.firebaseapp.com",
    databaseURL: "https://at-football.firebaseio.com",
    projectId: "at-football",
    storageBucket: "at-football.appspot.com",
    messagingSenderId: "419431587994"
};



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    LoginPage,
    AddMatchPage,
    MatchPage,
    RegistrationModalPage,
    GuestModal,
    AddStadiumPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoginPage,
    AddMatchPage,
    MatchPage,
    RegistrationModalPage,
    GuestModal,
    AddStadiumPage,
    SettingsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MatchProvider,
    AuthProvider,
    StadiumProvider,
  ]
})
export class AppModule {}
