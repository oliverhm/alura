import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
// import { Push, PushToken } from '@ionic/cloud-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { EscolhaPage } from '../pages/escolha/escolha';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { Storage } from '@ionic/storage';
import { AgendamentoDao } from '../domain/agendamento/agendamento-dao';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LoginPage } from '../pages/login/login';
import { UsuarioService } from '../domain/usuario/usuario-service';
import { PerfilPage } from '../pages/perfil/perfil';
import { SalesPage } from '../pages/sales/sales';
import { SalePage } from '../pages/sale/sale';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


function provideStorage() {

  return new Storage(['indexeddb'], {
    name: 'aluracar',
    storeName: 'agendamentos'
  });
}

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '4bb52b3d'
  },
  'push': {
    'sender_id': '392173710904',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

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
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
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
  providers: [{provide: ErrorHandler,
               useClass: IonicErrorHandler}, 
               AgendamentoService, 
               {provide : Storage, useFactory: provideStorage},
               AgendamentoDao,
               UsuarioService]
})
export class AppModule {}
