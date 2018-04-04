import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {PreviewPage} from "../preview/preview";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  roomName;myDate;
  timeArray:any[] = [];
  i = 0;
  timeSlot1=" ";timeSlot2=" ";timeSlot3=" ";timeSlot4=" ";timeSlot5=" ";timeSlot6=" ";timeSlot7=" ";timeSlot8=" ";
  timeSlot17=" ";timeSlot16=" ";timeSlot15=" ";timeSlot14=" ";timeSlot13=" ";timeSlot12=" ";timeSlot11=" ";timeSlot10=" ";
  timeSlot9=" ";timeSlot18=" ";
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public dbProvider:DatabaseProvider) {

  }

  presentConfirm() {
    let env = this;
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Are You Sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            env.addMeeting();
            console.log('ok clicked');
          }
        }
      ]
    });
    alert.present();
  }

  addMeeting(){
    let env= this;
    env.nextPage(0,"09:00 AM - 09:30 AM",this.timeSlot1);
    env.nextPage(1,"09:30 AM - 10:00 AM",this.timeSlot2);
    env.nextPage(2,"10:00 AM - 10:30 AM",this.timeSlot3);
    env.nextPage(3,"10:30 AM - 11:00 AM",this.timeSlot4);
    env.nextPage(4,"11:00 AM - 11:30 AM",this.timeSlot5);
    env.nextPage(5,"11:30 AM - 12:00 PM",this.timeSlot6);
    env.nextPage(6,"12:00 PM - 12:30 PM",this.timeSlot7);
    env.nextPage(7,"12:30 PM - 01:00 PM",this.timeSlot8);
    env.nextPage(8,"01:00 PM - 01:30 PM",this.timeSlot9);
    env.nextPage(9,"01:30 PM - 02:00 PM",this.timeSlot10);
    env.nextPage(10,"02:00 PM - 02:30 PM",this.timeSlot11);
    env.nextPage(11,"02:30 PM - 03:00 PM",this.timeSlot12);
    env.nextPage(12,"03:00 PM - 03:30 PM",this.timeSlot13);
    env.nextPage(13,"03:30 PM - 04:00 PM",this.timeSlot14);
    env.nextPage(14,"04:00 PM - 04:30 PM",this.timeSlot15);
    env.nextPage(15,"04:30 PM - 05:00 PM",this.timeSlot16);
    env.nextPage(16,"05:00 PM - 05:30 PM",this.timeSlot17);
    env.nextPage(17,"05:30 PM - 06:00 PM",this.timeSlot18);
    env.nextPage(288,"05:30 PM - 06:00 PM",this.timeSlot18);
  }

  nextPage(index,time,name){
    let env = this;
    if(index ==288)
    {
      env.navCtrl.push(PreviewPage,{TIME_DETAILS:env.timeArray,ROOM_NAME:env.roomName,DATE:env.myDate},{});
    }
   else {
      env.timeArray[env.i] = {
        TIMESLOT: time,
        NAME: name,
      };
      env.i++;
    }
    // env.navCtrl.push(PreviewPage,{TIME_DETAILS:env.timeArray,ROOM_NAME:env.roomName,DATE:env.myDate},{});
  }


}
