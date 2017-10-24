import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirstPage} from '../first/first';
import{LoginPage} from '../login/login';
import {RegisterPage} from '../register/register'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openFirstPage(){
    this.navCtrl.push(FirstPage)
  }

  login(){
    this.navCtrl.push(LoginPage)
  }
  register(){
    this.navCtrl.push(RegisterPage)
  }


}
