import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomDetailsPage } from './room-details';

@NgModule({
  declarations: [
    RoomDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomDetailsPage),
  ],
})
export class RoomDetailsPageModule {}
