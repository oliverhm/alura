import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
	endpoint: string = 'https://1-dot-full-market.appspot.com/promocao';
	sales: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.pullSales();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesPage');
  }

  pullSales() {
    return new Promise((resolve, reject) => {
      this.http.get(this.endpoint).map(res => {
        try {
          let json = res.json();
          return json;
        } catch(e) {
          console.log('error: ', e);
        }
      }).subscribe(data => {
				this.sales = data;
      });
    });
  }

  pushSalePage(saleID) {
		console.log('Navigating to Sale..', saleID);

		for (let i = 0; i < this.sales.length; ++i) {
			if (this.sales[i].id == saleID) {
				this.navCtrl.push(SalePage, {
					sale: this.sales[i]
				});
			}
		}
	}
}
