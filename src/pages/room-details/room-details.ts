import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PreviewPage} from "../preview/preview";
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";

/**
 * Generated class for the RoomDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-details',
  templateUrl: 'room-details.html',
})
export class RoomDetailsPage {
  roomName;
  myDate;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    let env = this;
    // if()
    env.storage.get('roomDetail').then(data=>{
      this.roomName =  data;
      if(this.roomName==undefined){
        this.roomName="";
      }
      env.storage.get('date').then(data=>{
        this.myDate = data;
        if(this.myDate==undefined){
          this.myDate="";
        }
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailsPage');
  }

  presentConfirm(){
    let env = this;
    if(this.roomName!= undefined && this.myDate!= undefined) {
      console.log("roomName-> " + this.roomName + "Date-> " + this.myDate);
      env.storage.set('date',this.myDate).then(data=>{
        env.storage.set('roomDetail',this.roomName).then(data=>{
          this.navCtrl.push(HomePage);
        })
      });
    }
    else {
      alert("Please set Name/Date");
    }
  }

}
