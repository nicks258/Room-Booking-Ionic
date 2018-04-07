import { Component } from '@angular/core';
import {LoadingController, ModalController, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {PreviewPage} from "../preview/preview";
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  roomName="";myDate="";
  timeArray:any[] = [];
  loader;
  i = 0;
  copart1;copart2;copart18;
  copart3;copart4;copart5;copart6;copart7;copart8;copart9;copart10;copart11;copart12;copart13;copart14;copart15;copart16;copart17;
  coparts:any[] = [];
  timeSlot1;timeSlot2;timeSlot3;timeSlot4;timeSlot5;timeSlot6;timeSlot7;timeSlot8;
  timeSlot17;timeSlot16;timeSlot15;timeSlot14;timeSlot13;timeSlot12;timeSlot11;timeSlot10;
  timeSlot9;timeSlot18;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public dbProvider:DatabaseProvider,
              public http:Http,public loadingCtrl:LoadingController,private storage: Storage,public modalCtrl : ModalController) {
    this.loader = this.loadingCtrl.create({
      content: "Fetching Coparts...",
      spinner : 'crescent',
    });
    let env = this;
    setTimeout(function () {
      env.fetchCoparts()
    },3000);
    this.loader.present();


  }

  presentConfirm() {
    let env = this;
    let alert1 = this.alertCtrl.create({
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
            // console.log("this.myDate-> " + this.myDate);
            env.addMeeting();
            console.log('ok clicked');
          }
        }
      ]
    });
    alert1.present();
  }

  addMeeting(){
    let env= this;
    if(this.timeSlot1 !=undefined){
      env.storage.set('timeSlot1',this.timeSlot1);
    }
    else {
      env.storage.set('timeSlot1',this.copart1);
    }
    if(this.timeSlot2 !=undefined){
      env.storage.set('timeSlot2',this.timeSlot2);
    }
    else {
      env.storage.set('timeSlot2',this.copart2);
    }
    if(this.timeSlot3 !=undefined){
      env.storage.set('timeSlot3',this.timeSlot3);
    }
    else {
      env.storage.set('timeSlot3',this.copart3);
    }
    if(this.timeSlot4 !=undefined){
      env.storage.set('timeSlot4',this.timeSlot4);
    }
    else {
      env.storage.set('timeSlot4',this.copart4);
    }
    if(this.timeSlot5 !=undefined){
      env.storage.set('timeSlot5',this.timeSlot5);
    }
    else {
      env.storage.set('timeSlot5',this.copart5);
    }
    if(this.timeSlot6 !=undefined){
      env.storage.set('timeSlot6',this.timeSlot6);
    }
    else {
      env.storage.set('timeSlot6',this.copart6);
    }
    if(this.timeSlot7 !=undefined){
      env.storage.set('timeSlot7',this.timeSlot7);
    }
    else {
      env.storage.set('timeSlot7',this.copart7);
    }
    if(this.timeSlot8 !=undefined){
      env.storage.set('timeSlot8',this.timeSlot8);
    }
    else {
      env.storage.set('timeSlot8',this.copart8);
    }
    if(this.timeSlot9 !=undefined){
      env.storage.set('timeSlot9',this.timeSlot9);
    }
    else {
      env.storage.set('timeSlot9',this.copart9);
    }
    if(this.timeSlot10 !=undefined){
      env.storage.set('timeSlot10',this.timeSlot10);
    }
    else {
      env.storage.set('timeSlot10',this.copart10);
    }
    if(this.timeSlot11 !=undefined){
      env.storage.set('timeSlot11',this.timeSlot11);
    }
    else {
      env.storage.set('timeSlot11',this.copart11);
    }
    if(this.timeSlot12 !=undefined){
      env.storage.set('timeSlot12',this.timeSlot12);
    }
    else {
      env.storage.set('timeSlot12',this.copart12);
    }
    if(this.timeSlot13 !=undefined){
      env.storage.set('timeSlot13',this.timeSlot13);
    }
    else {
      env.storage.set('timeSlot13',this.copart13);
    }
    if(this.timeSlot14 !=undefined){
      env.storage.set('timeSlot14',this.timeSlot14);
    }
    else {
      env.storage.set('timeSlot14',this.copart14);
    }
    if(this.timeSlot15 !=undefined){
      env.storage.set('timeSlot15',this.timeSlot15);
    }
    else {
      env.storage.set('timeSlot15',this.copart15);
    }
    if(this.timeSlot16 !=undefined){
      env.storage.set('timeSlot16',this.timeSlot16);
    }
    else {
      env.storage.set('timeSlot16',this.copart16);
    }
    if(this.timeSlot17 !=undefined){
      env.storage.set('timeSlot17',this.timeSlot17);
    }
    else {
      env.storage.set('timeSlot17',this.copart17);
    }
    if(this.timeSlot18 !=undefined){
      env.storage.set('timeSlot18',this.timeSlot18);
    }
    else {
      env.storage.set('timeSlot18',this.copart18);
    }
    // env.storage.set('date',this.myDate);
    // env.storage.set('roomDetail',this.roomName);

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
      env.storage.set('session','true');
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

  fetchCoparts() {
    let env = this;
    env.storage.get('roomDetail').then(data=>{
      this.roomName = data;
      env.storage.get('date').then(data=>{
        this.myDate = data;
        env.storage.get('timeSlot1').then(data=>{
          this.copart1 = data;
          env.storage.get('timeSlot2').then(data=>{
            this.copart2 = data;
            env.storage.get('timeSlot3').then(data=>{
              this.copart3 = data;
              env.storage.get('timeSlot4').then(data=>{
                this.copart4 = data;
                env.storage.get('timeSlot5').then(data=>{
                  this.copart5 = data;
                  env.storage.get('timeSlot6').then(data=>{
                    this.copart6 = data;
                    env.storage.get('timeSlot7').then(data=>{
                      this.copart7 = data;
                      env.storage.get('timeSlot8').then(data=>{
                        this.copart8 = data;
                        env.storage.get('timeSlot9').then(data=>{
                          this.copart9 = data;
                          env.storage.get('timeSlot10').then(data=>{
                            this.copart10 = data;
                            env.storage.get('timeSlot11').then(data=>{
                              this.copart11 = data;
                              env.storage.get('timeSlot12').then(data=>{
                                this.copart12 = data;
                                env.storage.get('timeSlot13').then(data=>{
                                  this.copart13 = data;
                                  env.storage.get('timeSlot14').then(data=>{
                                    this.copart14 = data;
                                    env.storage.get('timeSlot15').then(data=>{
                                      this.copart15 = data;
                                      env.storage.get('timeSlot16').then(data=>{
                                        this.copart16 = data;
                                        env.storage.get('timeSlot17').then(data=>{
                                          this.copart17 = data;
                                          env.storage.get('timeSlot18').then(data=>{
                                            this.copart18 = data;
                                            console.log("Last Copart->"+this.copart18);
                                            this.http.get('http://52.66.132.37/room_booking_admin/rest_api/get_coparts', {}).map(res => res.json()).subscribe(data => {
                                              // console.log(data);
                                              //      loadingPopup.dismiss();
                                              let data_to_use = data;
                                              for(let copart of data_to_use)
                                              {
                                                console.log("copartId-> " + copart.copart_id + "copart_name-> " + copart.copart_name);
                                                env.dbProvider.addCoParts(copart.copart_id,copart.copart_name).then(data=>{
                                                  console.log("Working")
                                                });
                                              }
                                              env.dbProvider.getAllCoParts().then(data=>{
                                                env.coparts = data;
                                              });
                                              this.loader.dismiss();
                                            },error2 => {
                                              env.dbProvider.getAllCoParts().then(data=>{
                                                env.coparts = data;
                                              });
                                              this.loader.dismiss();
                                              console.log("Internet is not there");
                                            })
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  openAuth(){
    let data = { message : 'preview' };
    let modalPage = this.modalCtrl.create('AuthPage',data);
    modalPage.present();
  }

}
