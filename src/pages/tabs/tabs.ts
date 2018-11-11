import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TransactionsPage } from '../transactions/transactions';
import { HomePage } from '../home/home';
import { OtherPage } from '../other/other';
import { ReminderPage } from '../reminder/reminder';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  transactionPage = TransactionsPage;
  personalPage = HomePage;
  otherPage = OtherPage;
  reminderPage =ReminderPage;
  

  constructor(platform: Platform, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log('tabs constructor');
    
      // splashScreen.show();

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
