import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Platform } from 'ionic-angular';
import { SmsListProvider } from '../../providers/sms-list/sms-list';
import { SmsDetailedPage } from '../sms-detailed/sms-detailed';
import { SplashScreen } from '@ionic-native/splash-screen';

declare var SMS: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  messages: any = [];
  persMsg2: any = [];
  persMsg: any = [];

  turn:any ;
  constructor(public platform: Platform, public navCtrl: NavController, public smsservice: SmsListProvider,public splashScreen: SplashScreen, public androidPermissions: AndroidPermissions) {
    // splashScreen.show();
    console.log('showing splash screen');
    platform.ready().then((readySource) => {
    //  splashScreen.show();
     console.log('showing splash screen');

      this.checkPermission();
      // this.ReadSMSList();
      console.log('loaded Messages');
      //classify sms
      // this.classifyMessages();
      // console.log('classified Messages');
     
    }, err => {
      console.log("Error Device not ready");
    });

    // this.turn =0;
    // for (let i = 0; i < 30; i++) {
    //   this.persMsg.push(smsservice.personalMsg[i] );
    // }

  }

  checkPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {
      console.log('inside check permission');
      //  this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {
        //this.ReadSMSList();
        console.log('inside request permission');
        this.ReadSMSList();
      },
        err => {
          console.log('inside request permission cancel');
        });

    },
      err => {
        console.log('inside check permission cancel');

      });
  }

  ReadSMSList() {

    let filter = {
      box: 'inbox', // 'inbox' (default), 'sent', 'draft'
      indexFrom: 0, // start from index 0
      maxCount: 2000, // count of SMS to return each time
    };

    if (SMS)
      SMS.listSMS(filter, (ListSms) => {

        this.messages = ListSms

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

        var smsFilter = this.messages[i];
        // console.log("" + smsFilter.address);
        var regexPersonal = /^\+[0-9]{10,}/;
        var regexOther = /( missed call| missed calls|offer| from +)/i;
        var regexReminder = /( due by| due on| mticket| PNR)/i;
        var regexReminder2 = /^PNR/i;


        // console.log("" + smsFilter.address + "return " + regexPersonal.test(smsFilter.address));

        //Personal Messages
        if (regexPersonal.test(smsFilter.address)) {

          if (regexOther.test(smsFilter.body)) {
            // console.log("" + smsFilter.address + "added to others");
            this.smsservice.otherMsg.push(smsFilter);
          }
          else {
            // this.smsservice.personalMsg.push(smsFilter);
            this.persMsg.push(smsFilter);
            // console.log("" + smsFilter.address + "added to personal");
          }
        }

        else {
          //Transactional Messages
          //Pattern for transactional msgs
          var regexTransactional = /(credited| debited|UPI-Collectrequest|sbcollect|collect request)/i;
          // console.log("" + smsFilter.body + "return " + regexPersonal.test(smsFilter.body));
          if (regexTransactional.test(smsFilter.body)) {
            // console.log("" + smsFilter.address + "added to transactional");
            this.smsservice.transactionMsg.push(smsFilter);
          }
          else if (regexReminder.test(smsFilter.body) || regexReminder2.test(smsFilter.body)) {
            // console.log("" + smsFilter.address + "added to reminders");
            this.smsservice.reminderMsg.push(smsFilter);
          }
          else {
            //Other Messages
            // console.log("" + smsFilter.address + "added to others");
            this.smsservice.otherMsg.push(smsFilter);

          }
        }
      }


    }
    console.log('hiding splash screen');
    // this.splashScreen.hide();
  }

  //Display message in detail
  goToSmsDetailPage(addr, body) {
    console.log("onclick sms detailed page");

    this.navCtrl.push(SmsDetailedPage, {
      messageAddr: addr,
      messageBody: body
    });
  }

  //
  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');
  //    this.turn++;
  //    console.log('turn:'+this.turn);
  //   setTimeout(() => {

  //     for (let i = 0; i < 30; i++) {
  //       this.persMsg.push(this.smsservice.personalMsg[30*this.turn+i] );
  //     }

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 50);
  // }

}
