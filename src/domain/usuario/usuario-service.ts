import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from './usuario';


const fotoKey: string = "fotoKey";
@Injectable()
export class UsuarioService{
    
    private _usuarioLogado: Usuario;
    constructor(private _http: Http){}

    public efetuaLogin(email: string, senha: string){
        let api = `https://aluracar.herokuapp.com/login?email=${email}&senha=${senha}`;
        return this._http
            .get(api)
            .map(res => res.json().usuario)
            .toPromise()
            .then(dado => {
                let usuario = new Usuario(dado.nome, dado.dataNascimento, dado.email, dado.telefone);
                this._usuarioLogado = usuario;
                return usuario;
            });
    }

    obtemUsuarioLogado(){
        return this._usuarioLogado;
    }

    obtemFoto(){

        return localStorage.getItem(fotoKey);
    }

    guardaFoto(urlFoto: string){
        
        localStorage.setItem(fotoKey, urlFoto);
    }
}