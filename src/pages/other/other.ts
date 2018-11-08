import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmsDetailedPage } from '../sms-detailed/sms-detailed';
import { SmsListProvider } from '../../providers/sms-list/sms-list';

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {
  otherMsg:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public smsservice: SmsListProvider) {
    console.log('const othersPage');
    this.otherMsg = smsservice.otherMsg;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad othersPage');
  }

  //Display message in detail
  goToSmsDetailPage(addr, body) {
    console.log("onclick sms detailed page");

    this.navCtrl.push(SmsDetailedPage, {
      messageAddr: addr,
      messageBody: body
    });
  }
}