import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public statusbar:StatusBar,public navCtrl: NavController) {
    try{
      this.statusbar.backgroundColorByHexString("#0000b4");
    }catch (e){
      alert(e)
    }
  }

  GoToFacebook(){
    window.open("https://www.facebook.com/pg/Energy.Club.Enim",'_blank', 'location=yes')
  }

}
