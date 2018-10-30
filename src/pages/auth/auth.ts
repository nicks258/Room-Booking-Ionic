import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {RoomDetailsPage} from "../room-details/room-details";
import {HomePage} from "../home/home";
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  username;
  password;
  dataFromOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController,public dbProvider:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
    this.dataFromOptions = this.navParams.get('message');

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
  submit(){
    let env = this;
    console.log("->"+this.username + this.password);
    if(this.password=='admin') {
      console.log('this.dataFroOpns->' + this.dataFromOptions);
      if (this.dataFromOptions == 'room'){
        this.navCtrl.push(HomePage);
      }
      else {
        this.navCtrl.push(RoomDetailsPage);

      }
    }
    else {
      alert("Wrong Password");
    }
  }

}
