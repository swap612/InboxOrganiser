import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmsListProvider } from '../../providers/sms-list/sms-list';

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  remMsg: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public smsservice: SmsListProvider) {
    this.remMsg = smsservice.reminderMsg;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
  }

}
