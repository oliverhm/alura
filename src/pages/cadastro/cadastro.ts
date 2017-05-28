import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { Carro } from '../../domain/carro/Carro';
import { HomePage } from '../home/home';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoService } from '../../domain/agendamento/agendamento-service';
import { Vibration, DatePicker } from 'ionic-native';


@Component({
  templateUrl: 'cadastro.html'
})
export class CadastroPage implements OnInit {

  public agendamento : Agendamento;
  public carro: Carro;
  public precoTotal: number;
  private _alerta : Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _agendamentoService: AgendamentoService, private _alertCtrl: AlertController) {
      
      this.carro = this.navParams.get('carro');
      this.precoTotal = this.navParams.get('precoTotal');
      this.agendamento = new Agendamento(this.carro, this.precoTotal);
      this._alerta = this._alertCtrl.create({
        title : 'Aviso',
        buttons: [{text : 'ok', handler: () => {this.navCtrl.setRoot(HomePage)}}]
      });
  }

  ngOnInit() {

    console.log('ionViewDidLoad CadastroPage');
  }

  agenda(){

    if(!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email){
      
      Vibration.vibrate(500);
      this._alertCtrl.create({

        title: 'Preenchimento Obrigatório',
        subTitle: 'Você deve preencher todas as informações',
        buttons: [{text: 'Ok!'}]
      }).present();
      return;
    }

    
    this._agendamentoService
      .agenda(this.agendamento)
      .then(confirmado => {
        confirmado ?
          this._alerta.setSubTitle('Agendamento realizado com sucesso') :
          this._alerta.setSubTitle('Deu ruim no agendamento!');
          this._alerta.present();

      })
      .catch(erro => {
        console.log(erro.message);
        this._alerta.setSubTitle(erro.message);
        this._alerta.present();
      });
  }

  obtemData(){

    DatePicker.show({
      date: new Date(),
      mode: 'date'
    }).then(data => this.agendamento.data = data.toISOString());
  }

}
