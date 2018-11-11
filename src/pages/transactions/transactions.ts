import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmsListProvider } from '../../providers/sms-list/sms-list';
import { SmsDetailedPage } from '../sms-detailed/sms-detailed';


@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  transMsg: any = [];
  turn:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public smsservice: SmsListProvider) {
    console.log('const TransactionsPage');
    // this.transMsg = smsservice.transactionMsg;
    this.turn = 0;
    for (let i = 0; i < 30; i++) {
      this.transMsg.push(smsservice.transactionMsg[i] );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
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
        this.transMsg.push(this.smsservice.transactionMsg[30*this.turn+i] );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 50);
  }



}
