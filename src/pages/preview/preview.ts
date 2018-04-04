import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  timeArray:any[];
  roomName;
  myDate;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.timeArray = this.navParams.get("TIME_DETAILS");
    this.roomName = this.navParams.get("ROOM_NAME");
    this.myDate = this.navParams.get("DATE");
    for(let time of this.timeArray){
      console.log(time.NAME);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

}
