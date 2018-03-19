import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AboutPage} from "../pages/about-page/about-page";
import {EventsPage} from "../pages/events-page/events-page";
import {MembersPage} from "../pages/members-page/members-page";
import {FormationPage} from "../pages/formation-page/formation-page";
import {IntegrationDayPage} from "../pages/integration-day-page/integration-day-page";
import {SortiePage} from "../pages/sortie-page/sortie-page";
import {BrainStormingPage} from "../pages/brain-storming-page/brain-storming-page";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:string}>;
  barcolor="lighterblue";
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Acceuil', component: HomePage,icon:"home_icon.png" },
      { title: 'Evennements', component: EventsPage,icon:"events_icon.png" },
      { title: 'Membres', component: MembersPage,icon:"members_icon.png" },
      {title: 'Les Formation',  component: FormationPage,icon:"form_icon.png"},
      {title: "Journée d'intégration",  component: IntegrationDayPage,icon:"integration_icon.png"},
      {title: "Sortie d'étude",  component: SortiePage,icon:"sortie_icon.png"},
      {title: "Brainstorming et autres",  component: BrainStormingPage,icon:"brainstorming_icon.png"},
      {title: "A propos",  component: AboutPage,icon:"about_icon.png"},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#0000b4");
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component).then(()=>{
      if(page.title =="A propos"){
        this.barcolor = "G2foss"
      }else{
        this.barcolor = "lighterblue"
      }
    });

  }
}
