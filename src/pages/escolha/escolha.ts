import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Carro } from '../../domain/carro/Carro';
import { Acessorio } from '../../domain/carro/Acessorio';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage{

    public carro: Carro;
    public acessorios : Acessorio[];
    private _precoTotal: number;
    
    constructor(public navParams: NavParams, public navCtrl: NavController){

        this.carro = this.navParams.get('carroSelecionado');
        this.acessorios = [
            new Acessorio('Freio ABS', 500),
            new Acessorio('Ar Condicionado', 700),
            new Acessorio('Rodas de Liga', 8000)
        ];
        this._precoTotal = this.carro.preco;
        console.log(this.carro);   
     }

     get precoTotal(){
         return this._precoTotal;
     }

     atualizaTotal(ligado: boolean, acessorio){
         ligado ? this._precoTotal+= acessorio.preco
                : this._precoTotal-= acessorio.preco;
     }

     avancaNoAgendamento(){
        this.navCtrl.push(CadastroPage, {
            carro: this.carro,
            precoTotal: this._precoTotal
        });
     }

}