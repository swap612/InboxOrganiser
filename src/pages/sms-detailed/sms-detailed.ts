import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sms-detailed',
  templateUrl: 'sms-detailed.html',
})
export class SmsDetailedPage {
  msg_address:any;
  msg_body:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log("Inside sms detail()")
    this.msg_address = navParams.get('messageAddr');
    this.msg_body = navParams.get('messageBody');
    // console.log("Message detaisl are"+ this.msg_address + "Body:"+ this.msg_body)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsDetailedPage');
  }

}
