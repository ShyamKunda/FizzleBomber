import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FirstPage} from '../pages/first/first';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import {ItemDetailsPage} from '../pages/item-details/item-details' ;

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



const firebaseAuth =     {
    apiKey: "AIzaSyBRdzgc56t5RKithHCy_tNm83oSayRsp9A",
    authDomain: "shysample-f249d.firebaseapp.com",
    databaseURL: "https://shysample-f249d.firebaseio.com",
    projectId: "shysample-f249d",
    storageBucket: "shysample-f249d.appspot.com",
    messagingSenderId: "64476352175"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstPage,
    LoginPage,
    ItemDetailsPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstPage,
    LoginPage,
    ItemDetailsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
