import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SalePage } from '../sale/sale';

/*
  Generated class for the Sales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html'
})
export class SalesPage {
	sales: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.sales = [
			{
				title: 'bla',
				description: 'bla'
			},
			{
				title: 'bla 1',
				description: 'bla 1'
			},

			{
				title: 'bla 2',
				description: 'bla 2'
			},
		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesPage');
  }

  pushSalePage() {
		this.navCtrl.push(SalePage);
  }
}
