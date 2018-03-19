import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";


/**
 * Generated class for the MembersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'GalleryPage-page',
  templateUrl: 'GalleryPage.html',
})
export class GalleryPage {
  param:any;
  Address:any;
  constructor(public viewCtrl:ViewController,public statusbar:StatusBar,public navCtrl: NavController, public navParams: NavParams) {
    try{
      this.statusbar.backgroundColorByHexString("#0000b4");
    }catch (e){
    }
    this.param=this.navParams.data.x;
    switch (this.param){
      case "1" : {this.Address="enerer";break;}
      case "2" : {this.Address="Petrol";break;}
      case "3" : {this.Address="Forum";break;}
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
