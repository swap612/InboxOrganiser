import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SmsListProvider {
  personalMsg: any = [];
  transactionMsg: any = [];
  otherMsg: any = [];
  reminderMsg: any = [];
  
  constructor(public http: HttpClient) {
    console.log('Hello SmsListProvider Provider');
  }

}
