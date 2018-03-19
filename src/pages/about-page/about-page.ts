import { Component } from '@angular/core';
import {FabContainer, IonicPage, NavController, NavParams} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about-page',
  templateUrl: 'about-page.html',
})
export class AboutPage {

  constructor(public statusbar:StatusBar,public navCtrl: NavController, public navParams: NavParams) {
    this.statusbar.backgroundColorByHexString("#F53108");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  gotofb(){
    window.open("https://www.facebook.com/G2FOSS",'_blank', 'location=yes')
  }
  gotowebsite(){
    window.open(" http://www.g2foss.com",'_blank', 'location=yes')
  }
  gotomygit(fab: FabContainer){
    window.open("https://github.com/moda20",'_blank', 'location=yes')  }
  gotomyface(fab :FabContainer){
    window.open("https://www.facebook.com/moda.vingt",'_blank', 'location=yes')
  }

}
