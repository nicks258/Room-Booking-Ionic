import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";
import { HomePage } from '../pages/home/home';
import {PreviewPage} from "../pages/preview/preview";
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {RoomDetailsPage} from "../pages/room-details/room-details";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any ;

  constructor(private screenOrientation: ScreenOrientation,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage) {
    let env = this;
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.screenOrientation.lock('portrait');
      // env.nav.setRoot(PreviewPage, {}, {animate: true, animation:'transition',duration:300,  direction: 'forward'});
      env.storage.get('session').then(data=>{
        if(data=='true')
        {
          env.nav.setRoot(PreviewPage, {}, {animate: true, animation:'transition',duration:300,  direction: 'forward'});
        }
        else {
          env.nav.setRoot(RoomDetailsPage, {}, {animate: true, animation:'transition',duration:300,  direction: 'forward'});
        }
        console.log("Preview");
      }).catch(error=>{
        env.nav.setRoot(RoomDetailsPage, {}, {animate: true, animation:'transition',duration:300,  direction: 'forward'});
      })
    });
  }
}

