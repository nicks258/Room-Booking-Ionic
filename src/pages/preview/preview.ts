import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";
import {DatabaseProvider} from "../../providers/database/database";
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
  timeArray:any[] = [];
  roomName;
  loader;
  coparts:any[] = [];
  dropDown1:boolean=false;dropDown2:boolean=false;dropDown3:boolean=false;dropDown4:boolean=false;dropDown5:boolean=false;
  dropDown10:boolean=false;dropDown9:boolean=false;dropDown8:boolean=false;dropDown7:boolean=false;dropDown6:boolean=false;
  dropDown11:boolean=false;dropDown12:boolean=false;dropDown13:boolean=false;dropDown14:boolean=false;dropDown15:boolean=false;
  dropDown16:boolean=false;dropDown17:boolean=false;dropDown18:boolean=false;
  timeSlot1=" ";timeSlot2=" ";timeSlot3=" ";timeSlot4=" ";timeSlot5=" ";timeSlot6=" ";timeSlot7=" ";timeSlot8=" ";
  timeSlot17=" ";timeSlot16=" ";timeSlot15=" ";timeSlot14=" ";timeSlot13=" ";timeSlot12=" ";timeSlot11=" ";timeSlot10=" ";
  timeSlot9=" ";timeSlot18=" ";
  myDate;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams,public storage:Storage,public modalCtrl : ModalController,
              public dbProvider:DatabaseProvider,public loadingCtrl:LoadingController) {
    // this.timeArray = this.navParams.get("TIME_DETAILS");
    // let env = this;
    this.loader = this.loadingCtrl.create({
      content: "Setting up your meeting...",
      spinner : 'crescent',
    });
    this.loader.present();
    let env = this;
    setTimeout(function () {
      env.dbProvider.getAllCoParts().then(data=>{
        env.coparts = data;
        env.loader.dismiss();
      });
    },3000);


    // if(this.timeArray==undefined)
    {
      env.storage.get('timeSlot1').then(data=>{
        this.timeSlot1 = data;
        if(data==undefined){
          this.dropDown1 = true;
        }
        console.log("timeSlot1->"+ env.timeSlot1 + " " + data);
        env.storage.get('timeSlot2').then(data=>{
          this.timeSlot2 = data;
          if(data==undefined){
            this.dropDown2 = true;
          }
          env.storage.get('timeSlot3').then(data=>{
            this.timeSlot3 = data;
            if(data==undefined){
              this.dropDown3 = true;
            }
            env.storage.get('timeSlot4').then(data=>{
              this.timeSlot4 = data;
              if(data==undefined){
                this.dropDown4 = true;
              }
              env.storage.get('timeSlot5').then(data=>{
                this.timeSlot5 = data;
                if(data==undefined){
                  this.dropDown5 = true;
                }
                env.storage.get('timeSlot6').then(data=>{
                  this.timeSlot6 = data;
                  if(data==undefined){
                    this.dropDown6 = true;
                  }
                  env.storage.get('timeSlot7').then(data=>{
                    this.timeSlot7 = data;
                    if(data==undefined){
                      this.dropDown7 = true;
                    }
                    env.storage.get('timeSlot8').then(data=>{
                      this.timeSlot8 = data;
                      if(data==undefined){
                        this.dropDown8 = true;
                      }
                      env.storage.get('timeSlot9').then(data=>{
                        this.timeSlot9 = data;
                        if(data==undefined){
                          this.dropDown9 = true;
                        }
                        env.storage.get('timeSlot10').then(data=>{
                          this.timeSlot10 = data;
                          if(data==undefined){
                            this.dropDown10 = true;
                          }
                          env.storage.get('timeSlot11').then(data=>{
                            this.timeSlot11 = data;
                            if(data==undefined){
                              this.dropDown11 = true;
                            }
                            env.storage.get('timeSlot12').then(data=>{
                              this.timeSlot12 = data;
                              if(data==undefined){
                                this.dropDown12 = true;
                              }
                              env.storage.get('timeSlot13').then(data=>{
                                this.timeSlot13 = data;
                                if(data==undefined){
                                  this.dropDown13 = true;
                                }
                                env.storage.get('timeSlot14').then(data=>{
                                  this.timeSlot14 = data;
                                  if(data==undefined){
                                    this.dropDown14 = true;
                                  }
                                  env.storage.get('timeSlot15').then(data=>{
                                    this.timeSlot15 = data;
                                    if(data==undefined){
                                      this.dropDown15 = true;
                                    }
                                    env.storage.get('timeSlot16').then(data=>{
                                      this.timeSlot16 = data;
                                      if(data==undefined){
                                        this.dropDown16 = true;
                                      }
                                      env.storage.get('timeSlot17').then(data=>{
                                        this.timeSlot17 = data;
                                        if(data==undefined){
                                          this.dropDown17 = true;
                                        }
                                        env.storage.get('timeSlot18').then(data=>{
                                          env.timeSlot18 = data;
                                          if(data==undefined){
                                            this.dropDown18 = true;
                                          }
                                          env.timeArray = [];
                                          console.log("timeSlot1 Array->"+ env.timeSlot1);
                                          env.timeArray[0] = {
                                            TIMESLOT: "09:00 AM - 09:30 AM",
                                            NAME: " " + env.timeSlot1,
                                          };
                                          env.timeArray[1] = {
                                            TIMESLOT: "09:30 AM - 10:00 AM",
                                            NAME: env.timeSlot2,
                                          };
                                          env.timeArray[2] = {
                                            TIMESLOT: "10:30 AM - 11:00 AM",
                                            NAME: env.timeSlot3,
                                          };
                                          env.timeArray[3] = {
                                            TIMESLOT: "11:00 AM - 11:30 AM",
                                            NAME: env.timeSlot4,
                                          };
                                          env.timeArray[4] = {
                                            TIMESLOT: "11:30 AM - 12:00 PM",
                                            NAME: env.timeSlot5,
                                          };
                                          env.timeArray[5] = {
                                            TIMESLOT: "12:00 PM - 12:30 PM",
                                            NAME: env.timeSlot6,
                                          };
                                          env.timeArray[6] = {
                                            TIMESLOT: "12:30 PM - 01:00 PM",
                                            NAME: env.timeSlot7,
                                          };
                                          env.timeArray[7] = {
                                            TIMESLOT: "01:00 PM - 01:30 PM",
                                            NAME: env.timeSlot8,
                                          };
                                          env.timeArray[8] = {
                                            TIMESLOT: "01:30 PM - 02:00 PM",
                                            NAME: env.timeSlot9,
                                          };
                                          env.timeArray[9] = {
                                            TIMESLOT: "02:00 PM - 02:30 PM",
                                            NAME: env.timeSlot10,
                                          };
                                          env.timeArray[10] = {
                                            TIMESLOT: "02:30 PM - 03:00 PM",
                                            NAME: env.timeSlot11,
                                          };
                                          env.timeArray[11] = {
                                            TIMESLOT: "03:00 PM - 03:30 PM",
                                            NAME: env.timeSlot12,
                                          };
                                          env.timeArray[12] = {
                                            TIMESLOT: "03:30 PM - 04:00 PM",
                                            NAME: env.timeSlot13,
                                          };
                                          env.timeArray[13] = {
                                            TIMESLOT: "04:00 PM - 04:30 PM",
                                            NAME: env.timeSlot14,
                                          };
                                          env.timeArray[14] = {
                                            TIMESLOT: "04:00 PM - 04:30 PM",
                                            NAME: env.timeSlot15,
                                          };
                                          env.timeArray[15] = {
                                            TIMESLOT: "04:30 PM - 05:00 PM",
                                            NAME: env.timeSlot16,
                                          };
                                          env.timeArray[16] = {
                                            TIMESLOT: "05:00 PM - 05:30 PM",
                                            NAME: env.timeSlot17,
                                          };
                                          env.timeArray[17] = {
                                            TIMESLOT: "05:30 PM - 06:00 AM",
                                            NAME: env.timeSlot18,
                                          };
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

      env.storage.get('roomDetail').then(data=>{
        console.log("this.roomName" + this.roomName);
        this.roomName = data;
      });



      env.storage.get('date').then(data=>{
        this.myDate = data;
      })
    }
    // else {
    //   this.roomName = this.navParams.get("ROOM_NAME");
    //   this.myDate = this.navParams.get("DATE");
    // }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

  homePage(){
    this.navCtrl.push(HomePage);
  }

  openAuth(){
    let data = { message : 'room' };
    let modalPage = this.modalCtrl.create('AuthPage',data);
    modalPage.present();
  }

  manyEvent(){
    console.log("manyEvent");
  }
  presentConfirm(text:string) {
    let env = this;
    console.log(text);
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
            console.log("this.myDate-> " + this.myDate);
            if(text == 'slot1')
            {
              this.dropDown1 = false;
              env.storage.set('timeSlot1',this.timeSlot1);
            }
            else if(text == 'slot2')
            {
              this.dropDown2 = false;
              env.storage.set('timeSlot2',this.timeSlot2);
            }
            else if(text == 'slot3')
            {
              this.dropDown3 = false;
              env.storage.set('timeSlot3',this.timeSlot3);
            }
            else if(text == 'slot4')
            {
              this.dropDown4 = false;
              env.storage.set('timeSlot4',this.timeSlot4);
            }
            else if(text == 'slot5')
            {
              this.dropDown5 = false;
              env.storage.set('timeSlot5',this.timeSlot5);
            }
            else if(text == 'slot6')
            {
              this.dropDown6 = false;
              env.storage.set('timeSlot6',this.timeSlot6);
            }
            else if(text == 'slot7')
            {
              this.dropDown7 = false;
              env.storage.set('timeSlot7',this.timeSlot7);
            }
            else if(text == 'slot8')
            {
              this.dropDown8 = false;
              env.storage.set('timeSlot8',this.timeSlot8);
            }
            else if(text == 'slot9')
            {
              this.dropDown9 = false;
              env.storage.set('timeSlot9',this.timeSlot9);
            }
            else if(text == 'slot10')
            {
              this.dropDown10 = false;
              env.storage.set('timeSlot10',this.timeSlot10);
            }
            else if(text == 'slot11')
            {
              this.dropDown11 = false;
              env.storage.set('timeSlot11',this.timeSlot11);
            }
            else if(text == 'slot12')
            {
              this.dropDown12 = false;
              env.storage.set('timeSlot12',this.timeSlot12);
            }
            else if(text == 'slot13')
            {
              this.dropDown13 = false;
              env.storage.set('timeSlot13',this.timeSlot13);
            }
            else if(text == 'slot14')
            {
              this.dropDown14 = false;
              env.storage.set('timeSlot14',this.timeSlot14);
            }
            else if(text == 'slot15')
            {
              this.dropDown15 = false;
              env.storage.set('timeSlot15',this.timeSlot15);
            }
            else if(text == 'slot16')
            {
              this.dropDown16 = false;
              env.storage.set('timeSlot16',this.timeSlot16);
            }
            else if(text == 'slot17')
            {
              this.dropDown17 = false;
              env.storage.set('timeSlot17',this.timeSlot17);
            }
            else if(text == 'slot18')
            {
              this.dropDown18 = false;
              env.storage.set('timeSlot18',this.timeSlot18);
            }
            console.log('ok clicked');
          }
        }
      ]
    });
    alert1.present();
  }

}
