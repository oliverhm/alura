import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  _window: any = window;
  rootPage = LoginPage;
  appId: string = '3b5b2620-6255-4462-b908-77c21b7afd97';
  googleProjectId: string = '87333275656';

  public paginas = [
    { titulo : 'Perfil', componente: PerfilPage }
  ];

  @ViewChild(Nav) public nav : Nav;
  constructor(private platform: Platform, private oneSignal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();


      this.oneSignal.startInit(this.appId, this.googleProjectId);

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
    });
  }

  abrePagina(pagina){
    this.nav.push(pagina.componente);
  }
}
