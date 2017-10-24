import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  email: string;
  constructor( private fire: AngularFireAuth,  public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.email = fire.auth.currentUser.email;
  }

  popThis(){
    //this.navCtrl.pop();
  }
  alert(message: string){
    this.alertCtrl.create({
      title: 'info!',
      subTitle: message,
      buttons: ['OK']
    }).present() ;
  }
  signOut(){
    this.fire.auth.signOut()
    .then( data => {
      this.alert("Success You\'re Logged out");
      this.navCtrl.setRoot(HomePage)
      console.log('got some data', data);
    })
    .catch(error => {
      console.log('got error', error);
      this.alert(error.message);
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
