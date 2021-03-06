import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmsListProvider } from '../../providers/sms-list/sms-list';
import { SmsDetailedPage } from '../sms-detailed/sms-detailed';

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  remMsg: any = [];
  turn:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public smsservice: SmsListProvider) {
    this.remMsg = smsservice.reminderMsg;

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
  }

   //Display message in detail
   goToSmsDetailPage(addr, body) {
    console.log("onclick sms detailed page");

    this.navCtrl.push(SmsDetailedPage, {
      messageAddr: addr,
      messageBody: body
    });
  }
  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
    if(event.direction === 2) {
      this.navCtrl.parent.select(3);
    }
  }

}
