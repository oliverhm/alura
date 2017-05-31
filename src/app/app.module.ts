import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';

import { AgendamentoDao } from '../domain/agendamento/agendamento-dao';
import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EscolhaPage } from '../pages/escolha/escolha';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { SalePage } from '../pages/sale/sale';
import { SalesPage } from '../pages/sales/sales';
import { UsuarioService } from '../domain/usuario/usuario-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


function provideStorage() {

  return new Storage(['indexeddb'], {
    name: 'aluracar',
    storeName: 'agendamentos'
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EscolhaPage, 
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage,
    SalesPage,
    SalePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage,
    SalesPage,
    SalePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AgendamentoService,
    { provide : Storage, useFactory: provideStorage },
    AgendamentoDao,
    UsuarioService,
    OneSignal
  ]
})
export class AppModule {}
