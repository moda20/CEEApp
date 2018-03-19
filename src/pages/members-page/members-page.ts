import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";


/**
 * Generated class for the MembersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-members-page',
  templateUrl: 'members-page.html',
})
export class MembersPage {
  members:any;
  constructor(public statusbar:StatusBar,public navCtrl: NavController, public navParams: NavParams) {
    try{
      this.statusbar.backgroundColorByHexString("#0000b4");
    }catch (e){

    }
    this.members=[
      {name:"AMENI DHAOUADI",pos:"Responsable communication", img:"com"},
      {name:"AMIRA BOUZID",pos:"Secrétaire générale", img:"sg"},
      {name:"AOUINI OUSSEMA",pos:"Responsable sponsoring", img:"spon"},
      {name:"AUNI MOHAMED",pos:"Trésorier", img:"trez"},
      {name:"DHIA MOSBAH",pos:"Président", img:"pres"},
      {name:"MLAYAH SAHAR",pos:"Responsable mediatisation", img:"media"},
      {name:"NOUREDDINE OUMAIM",pos:"Vice président", img:"vice"},
      {name:"SAIDI MOHAMED ALI",pos:"Respnsable événements", img:"event"},

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }

}
