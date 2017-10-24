import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirstPage} from '../first/first';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth,  public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  alert(message: string){
    this.alertCtrl.create({
      title: 'info!',
      subTitle: message,
      buttons: ['OK']
    }).present() ;
  }

  signIn(){
    //this.fire.auth.sendPasswordResetEmail;


    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then( data => {
      this.alert("Success You\'re Logged in");
      this.navCtrl.setRoot(FirstPage);
      console.log('would sign in with' , this.uname.value, this.password.value);
      console.log('got some data', this.fire.auth.currentUser);
      console.log('got some data', data);
    })
    .catch(error => {
      console.log('got error', error);
      this.alert(error.message);
    })

/* if(this.uname.value=="shyam" && this.password.value=="1234"){
      this.navCtrl.push(FirstPage)
    }else{
      let alert = this.alertCtrl.create({
      title: 'oops!!!!',
      subTitle: 'Wrong password darling',
      buttons: ['OK']
    });
    alert.present();
  }*/
  }

}
