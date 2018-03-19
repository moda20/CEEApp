import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AboutPage} from "../pages/about-page/about-page";
import {AboutPageModule} from "../pages/about-page/about-page.module";
import {EventsPageModule} from "../pages/events-page/events-page.module";
import {MembersPageModule} from "../pages/members-page/members-page.module";
import {EventsPage} from "../pages/events-page/events-page";
import {MembersPage} from "../pages/members-page/members-page";
import {GalleryPage} from "../pages/GalleryPage/GalleryPage";
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {IntegrationDayPage} from "../pages/integration-day-page/integration-day-page";
import {SortiePage} from "../pages/sortie-page/sortie-page";
import {BrainStormingPage} from "../pages/brain-storming-page/brain-storming-page";
import {FormationPage} from "../pages/formation-page/formation-page";
import {GalleryPageModule} from "../pages/GalleryPage/GalleryPage.module";
import {IntegrationDayPageModule} from "../pages/integration-day-page/integration-day-page.module";
import {SortiePageModule} from "../pages/sortie-page/sortie-page.module";
import {BrainStormingPageModule} from "../pages/brain-storming-page/brain-storming-page.module";
import {FormationPageModule} from "../pages/formation-page/formation-page.module";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    EventsPageModule,
    MembersPageModule,
    GalleryPageModule,
    IntegrationDayPageModule,
    SortiePageModule,
    BrainStormingPageModule,
    FormationPageModule,

    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    EventsPage,
    MembersPage,
    GalleryPage,
    IntegrationDayPage,
    SortiePage,
    BrainStormingPage,
    FormationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
