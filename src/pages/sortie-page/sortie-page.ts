import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";


/**
 * Generated class for the SortiePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
IonicPage()
@Component({
  selector: 'page-sortie-page',
  templateUrl: 'sortie-page.html',
})
export class SortiePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortiePage');
  }

}
