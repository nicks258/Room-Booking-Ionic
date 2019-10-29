import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PreviewPage} from "../preview/preview";
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";
import {DatabaseProvider} from "../../providers/database/database";
import {Http} from "@angular/http";

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
  loader;
  myDate;
  constructor(public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams,
              public storage:Storage,public dbProvider:DatabaseProvider,public http:Http) {
    let env = this;
    // if()
    this.loader = this.loadingCtrl.create({
      content: "Fetching New Coparts list...",
      spinner : 'crescent',
    });
    env.storage.get('roomDetail').then(data=>{
      this.roomName =  data;
      if(this.roomName==undefined){
        this.roomName="";
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailsPage');
  }

  presentConfirm(){
    let env = this;
    if(this.roomName!= undefined ) {
      env.storage.set('roomDetail',this.roomName).then(data=>{
        this.navCtrl.push(HomePage);
      })
    }
    else {
      alert("Please set Meeting Room Name");
    }
  }

  deleteAppData(){
    this.dbProvider.deleteAppData().then(data=>{
      alert("App data deleted successfully");
      this.fetchNewData();
    });
  }

  fetchNewData(){
    this.loader.present();
    let env = this;
    this.http.get('http://rayqube.com/projects/dtcm_way_finder/rest/get_coparts', {}).map(res => res.json()).subscribe(data => {
      // console.log(data);
      //      loadingPopup.dismiss();
      let data_to_use = data;
      console.log("data-> "+ data.copart);
      for(let copart of data_to_use)
      {
        console.log("copartId-> " + copart.id + "copart_name-> " + copart.name);
        env.dbProvider.addCoParts(copart.id,copart.name).then(data=>{
          console.log("Working")
        });
      }
      this.loader.dismiss();
    },error2 => {
      console.log("error-> " + error2);
      env.dbProvider.getAllCoParts().then(data=>{
      });
      this.loader.dismiss();
      alert("Internet is not there")
    })
  }



}
