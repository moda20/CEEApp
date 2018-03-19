import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";


/**
 * Generated class for the BrainStormingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
IonicPage()
@Component({
  selector: 'page-brain-storming-page',
  templateUrl: 'brain-storming-page.html',
})
export class BrainStormingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainStormingPage');
  }

}
