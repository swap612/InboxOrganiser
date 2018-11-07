import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Platform } from 'ionic-angular';
import { SmsListProvider } from '../../providers/sms-list/sms-list';
import { SmsDetailedPage } from '../sms-detailed/sms-detailed';

declare var SMS: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messages: any = [];
  persMsg: any = [];
  constructor(public platform: Platform, public navCtrl: NavController, public smsservice: SmsListProvider, public androidPermissions: AndroidPermissions) {
    platform.ready().then((readySource) => {
      this.ReadSMSList();
      console.log('loaded Messages');
      //classify sms
      // this.classifyMessages();
      // console.log('classified Messages');
    }, err => {
      console.log("Error Device not ready");
    });

  }

  checkPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {

      //if permission granted
      this.ReadSMSList();
    },
      err => {

        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {
          this.ReadSMSList();
        },
          err => {
            alert("cancelled")
          });
      });

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);

  }

  ReadSMSList() {

    //this.platform.ready().then((readySource) => {

    let filter = {
      box: 'inbox', // 'inbox' (default), 'sent', 'draft'
      indexFrom: 0, // start from index 0
      maxCount: 100, // count of SMS to return each time
    };

    if (SMS)
      SMS.listSMS(filter, (ListSms) => {

        this.messages = ListSms

        // this.smsservice.personalMsg = ListSms
        // this.smsservice.transactionMsg = ListSms
        // this.smsservice.otherMsg=ListSms
        // classify the messages
        this.classifyMessages();

      },
        Error => {
          alert(JSON.stringify(Error))
        });
  }

  classifyMessages() {
    console.log('inside classify Messages');

    // classify the messages
    if (Array.isArray(this.messages)) {
      console.log("inside array");

      for (var i in this.messages) {
        console.log("inside for");

        var smsFilter = this.messages[i];
        console.log("" + smsFilter.address);
        var regexPersonal = /^\+[0-9]{10,}/;
        console.log("" + smsFilter.address + "return " + regexPersonal.test(smsFilter.address));

        if (regexPersonal.test(smsFilter.address)) {
          console.log("" + smsFilter.address + "added to personal");
          this.persMsg.push(smsFilter);
        }

        else {
          //Transactional Messages
          //Pattern for transactional msgs
          var regexTransactional = /(credited| debited|UPI-Collectrequest|sbcollect)/i ;
          console.log("" + smsFilter.body + "return " + regexPersonal.test(smsFilter.body));
          if (regexTransactional.test(smsFilter.body)) {
            console.log("" + smsFilter.address + "added to transactional");
            this.smsservice.transactionMsg.push(smsFilter);
          }

          else {
            //Other Messages
            console.log("" + smsFilter.address + "added to others");
            this.smsservice.otherMsg.push(smsFilter);

          }
        }
      }
      console.log("outside for");

    }
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
