import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IonicStorageModule} from "@ionic/storage";
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { DatabaseProvider } from '../providers/database/database';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {HttpModule} from "@angular/http";
import {SQLite} from "@ionic-native/sqlite";
import {PreviewPage} from "../pages/preview/preview";
import {AuthPage} from "../pages/auth/auth";
import {AuthPageModule} from "../pages/auth/auth.module";
import {RoomDetailsPage} from "../pages/room-details/room-details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoomDetailsPage,
    PreviewPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    HttpModule,
    AuthPageModule,
    IonicModule.forRoot(MyApp,{scrollAssist:false,
      autoFocusAssist:false}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    RoomDetailsPage,
    PreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLitePorter,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    HttpModule,
    ScreenOrientation,
    SQLite,
  ]
})
export class AppModule {}
