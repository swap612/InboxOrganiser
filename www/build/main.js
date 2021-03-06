webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms_detailed_sms_detailed__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sms_list_sms_list__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherPage = /** @class */ (function () {
    function OtherPage(navCtrl, navParams, smsservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.smsservice = smsservice;
        this.otherMsg = [];
        console.log('const othersPage');
        this.otherMsg = smsservice.otherMsg;
    }
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad othersPage');
    };
    //Display message in detail
    OtherPage.prototype.goToSmsDetailPage = function (addr, body) {
        console.log("onclick sms detailed page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sms_detailed_sms_detailed__["a" /* SmsDetailedPage */], {
            messageAddr: addr,
            messageBody: body
        });
    };
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other',template:/*ion-inline-start:"/home/swapnil/IonicApps/new-sms/src/pages/other/other.html"*/'\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Other messages</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list>\n      <ion-item *ngFor="let x of otherMsg" (click)="goToSmsDetailPage(x.address,x.body)">\n        <h2>{{x.address}}</h2>\n        <p>{{x.body}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/swapnil/IonicApps/new-sms/src/pages/other/other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_sms_list_sms_list__["a" /* SmsListProvider */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sms_list_sms_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_detailed_sms_detailed__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReminderPage = /** @class */ (function () {
    function ReminderPage(navCtrl, navParams, smsservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.smsservice = smsservice;
        this.remMsg = [];
        this.remMsg = smsservice.reminderMsg;
    }
    ReminderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReminderPage');
    };
    //Display message in detail
    ReminderPage.prototype.goToSmsDetailPage = function (addr, body) {
        console.log("onclick sms detailed page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sms_detailed_sms_detailed__["a" /* SmsDetailedPage */], {
            messageAddr: addr,
            messageBody: body
        });
    };
    ReminderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reminder',template:/*ion-inline-start:"/home/swapnil/IonicApps/new-sms/src/pages/reminder/reminder.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Reminder messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let x of remMsg" (click)="goToSmsDetailPage(x.address,x.body)">\n      <h2>{{x.address}}</h2>\n      <p>{{x.body}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/swapnil/IonicApps/new-sms/src/pages/reminder/reminder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_sms_list_sms_list__["a" /* SmsListProvider */]])
    ], ReminderPage);
    return ReminderPage;
}());

//# sourceMappingURL=reminder.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transactions_transactions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__other_other__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reminder_reminder__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.transactionPage = __WEBPACK_IMPORTED_MODULE_1__transactions_transactions__["a" /* TransactionsPage */];
        this.personalPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.otherPage = __WEBPACK_IMPORTED_MODULE_3__other_other__["a" /* OtherPage */];
        this.reminderPage = __WEBPACK_IMPORTED_MODULE_4__reminder_reminder__["a" /* ReminderPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/swapnil/IonicApps/new-sms/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="personalPage" tabTitle="Personal" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="transactionPage" tabTitle="Transactions" tabIcon="logo-usd"></ion-tab>\n  <ion-tab [root]="reminderPage" tabTitle="Reminders" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="otherPage" tabTitle="Others" tabIcon="text"></ion-tab>\n\n  \n</ion-tabs>'/*ion-inline-end:"/home/swapnil/IonicApps/new-sms/src/pages/tabs/tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sms_list_sms_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_detailed_sms_detailed__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(navCtrl, navParams, smsservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.smsservice = smsservice;
        this.transMsg = [];
        console.log('const TransactionsPage');
        this.transMsg = smsservice.transactionMsg;
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionsPage');
    };
    //Display message in detail
    TransactionsPage.prototype.goToSmsDetailPage = function (addr, body) {
        console.log("onclick sms detailed page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sms_detailed_sms_detailed__["a" /* SmsDetailedPage */], {
            messageAddr: addr,
            messageBody: body
        });
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/home/swapnil/IonicApps/new-sms/src/pages/transactions/transactions.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Transactional messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let x of transMsg" (click)="goToSmsDetailPage(x.address,x.body)">\n      <h2>{{x.address}}</h2>\n      <p>{{x.body}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/swapnil/IonicApps/new-sms/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_sms_list_sms_list__["a" /* SmsListProvider */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/other/other.module": [
		281,
		4
	],
	"../pages/reminder/reminder.module": [
		282,
		3
	],
	"../pages/sms-detailed/sms-detailed.module": [
		283,
		2
	],
	"../pages/tabs/tabs.module": [
		284,
		1
	],
	"../pages/transactions/transactions.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sms_list_sms_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sms_detailed_sms_detailed__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, smsservice, androidPermissions) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.smsservice = smsservice;
        this.androidPermissions = androidPermissions;
        this.messages = [];
        this.persMsg = [];
        platform.ready().then(function (readySource) {
            _this.ReadSMSList();
            console.log('loaded Messages');
            //classify sms
            // this.classifyMessages();
            // console.log('classified Messages');
        }, function (err) {
            console.log("Error Device not ready");
        });
    }
    HomePage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
            //if permission granted
            _this.ReadSMSList();
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
                _this.ReadSMSList();
            }, function (err) {
                alert("cancelled");
            });
        });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    HomePage.prototype.ReadSMSList = function () {
        //this.platform.ready().then((readySource) => {
        var _this = this;
        var filter = {
            box: 'inbox',
            indexFrom: 0,
            maxCount: 500,
        };
        if (SMS)
            SMS.listSMS(filter, function (ListSms) {
                _this.messages = ListSms;
                // this.smsservice.personalMsg = ListSms
                // this.smsservice.transactionMsg = ListSms
                // this.smsservice.otherMsg=ListSms
                // classify the messages
                _this.classifyMessages();
            }, function (Error) {
                alert(JSON.stringify(Error));
            });
    };
    HomePage.prototype.classifyMessages = function () {
        console.log('inside classify Messages');
        // classify the messages
        if (Array.isArray(this.messages)) {
            console.log("inside array");
            for (var i in this.messages) {
                console.log("inside for");
                var smsFilter = this.messages[i];
                console.log("" + smsFilter.address);
                var regexPersonal = /^\+[0-9]{10,}/;
                var regexOther = /( missed call| missed calls|Dear Customer| offer| from +)/i;
                var regexReminder = /( due by| due on)/i;
                var regexReminder2 = /^PNR/i;
                console.log("" + smsFilter.address + "return " + regexPersonal.test(smsFilter.address));
                //Personal Messages
                if (regexPersonal.test(smsFilter.address)) {
                    if (regexOther.test(smsFilter.body)) {
                        console.log("" + smsFilter.address + "added to others");
                        this.smsservice.otherMsg.push(smsFilter);
                    }
                    else {
                        this.persMsg.push(smsFilter);
                        console.log("" + smsFilter.address + "added to personal");
                    }
                }
                else {
                    //Transactional Messages
                    //Pattern for transactional msgs
                    var regexTransactional = /(credited| debited|UPI-Collectrequest|sbcollect)/i;
                    console.log("" + smsFilter.body + "return " + regexPersonal.test(smsFilter.body));
                    if (regexTransactional.test(smsFilter.body)) {
                        console.log("" + smsFilter.address + "added to transactional");
                        this.smsservice.transactionMsg.push(smsFilter);
                    }
                    else if (regexReminder.test(smsFilter.body) || regexReminder2.test(smsFilter.body)) {
                        console.log("" + smsFilter.address + "added to reminders");
                        this.smsservice.reminderMsg.push(smsFilter);
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
    };
    //Display message in detail
    HomePage.prototype.goToSmsDetailPage = function (addr, body) {
        console.log("onclick sms detailed page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sms_detailed_sms_detailed__["a" /* SmsDetailedPage */], {
            messageAddr: addr,
            messageBody: body
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/swapnil/IonicApps/new-sms/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Personal Messages\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let msg of persMsg" (click)="goToSmsDetailPage(msg.address,msg.body)" >\n      <h2>{{msg.address}}</h2>\n      <p>{{msg.body}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/swapnil/IonicApps/new-sms/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_sms_list_sms_list__["a" /* SmsListProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_sms_list_sms_list__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sms_detailed_sms_detailed__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_other_other__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reminder_reminder__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sms_detailed_sms_detailed__["a" /* SmsDetailedPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reminder_reminder__["a" /* ReminderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    //to hide the tabs on sms detailed page
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reminder/reminder.module#ReminderPageModule', name: 'ReminderPage', segment: 'reminder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms-detailed/sms-detailed.module#SmsDetailedPageModule', name: 'SmsDetailedPage', segment: 'sms-detailed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sms_detailed_sms_detailed__["a" /* SmsDetailedPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reminder_reminder__["a" /* ReminderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_sms_list_sms_list__["a" /* SmsListProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/swapnil/IonicApps/new-sms/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/swapnil/IonicApps/new-sms/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsDetailedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmsDetailedPage = /** @class */ (function () {
    function SmsDetailedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // console.log("Inside sms detail()")
        this.msg_address = navParams.get('messageAddr');
        this.msg_body = navParams.get('messageBody');
        // console.log("Message detaisl are"+ this.msg_address + "Body:"+ this.msg_body)
    }
    SmsDetailedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SmsDetailedPage');
    };
    SmsDetailedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sms-detailed',template:/*ion-inline-start:"/home/swapnil/IonicApps/new-sms/src/pages/sms-detailed/sms-detailed.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{msg_address}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n      <ion-card-content background-color="light">\n         {{msg_body}}\n      </ion-card-content>  <!-- <p>{{msg_detail.body}}</p> -->\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/swapnil/IonicApps/new-sms/src/pages/sms-detailed/sms-detailed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SmsDetailedPage);
    return SmsDetailedPage;
}());

//# sourceMappingURL=sms-detailed.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SmsListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SmsListProvider = /** @class */ (function () {
    function SmsListProvider(http) {
        this.http = http;
        this.personalMsg = [];
        this.transactionMsg = [];
        this.otherMsg = [];
        this.reminderMsg = [];
        console.log('Hello SmsListProvider Provider');
    }
    SmsListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SmsListProvider);
    return SmsListProvider;
}());

//# sourceMappingURL=sms-list.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map