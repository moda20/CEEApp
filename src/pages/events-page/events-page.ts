import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {GalleryPage} from "../GalleryPage/GalleryPage";


/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events-page',
  templateUrl: 'events-page.html',
})
export class EventsPage {

  constructor(public modalCtrl:ModalController,public statusbar:StatusBar,public navCtrl: NavController, public navParams: NavParams) {
    try{
      this.statusbar.backgroundColorByHexString("#0000b4");
    }catch (e){
      alert(e)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  GoToGallery(x){
    let modal =this.modalCtrl.create(GalleryPage,{x});
    modal.present();
  }


}
