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
  otherMsg:any=[];
  otherMsg2:any=[];
  turn:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public smsservice: SmsListProvider) {
    console.log('const othersPage');
    // this.otherMsg2 = smsservice.otherMsg;
    this.turn =0;
    for (let i = 0; i < 30; i++) {
      this.otherMsg2.push(smsservice.otherMsg[i] );
    }
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
     this.turn++;
     console.log('turn:'+this.turn);
    setTimeout(() => {

      for (let i = 0; i < 30; i++) {
        this.otherMsg2.push(this.smsservice.otherMsg[30*this.turn+i] );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 50);
  }
}