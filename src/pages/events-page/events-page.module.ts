import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events-page';
import {GalleryPageModule} from "../GalleryPage/GalleryPage.module";

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
    GalleryPageModule
  ],
})
export class EventsPageModule {}
