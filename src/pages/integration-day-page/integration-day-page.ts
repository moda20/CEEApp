import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";


/**
 * Generated class for the IntegrationDayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-integration-day-page',
  templateUrl: 'integration-day-page.html',
})
export class IntegrationDayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntegrationDayPage');
  }

}
