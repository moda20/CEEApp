import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";


/**
 * Generated class for the FormationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
IonicPage()
@Component({
  selector: 'page-formation-page',
  templateUrl: 'formation-page.html',
})
export class FormationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormationPage');
  }

}
