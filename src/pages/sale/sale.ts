import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Sale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html'
})
export class SalePage {
	endpoint: string = 'https://1-dot-full-market.appspot.com/promocao';
	sale: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	  this.sale = navParams.get('sale');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalePage');
  }
}
