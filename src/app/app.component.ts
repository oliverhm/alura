import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';

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
  constructor(private platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this._window.plugins.OneSignal.startInit(this.appId, this.googleProjectId);
      this._window.plugins.OneSignal.inFocusDisplaying(this._window.plugins.OneSignal.OSInFocusDisplayOption.Notification);
      this._window.plugins.OneSignal.setSubscription(true);
      this._window.plugins.OneSignal.handleNotificationReceived().subscribe(() => {
        // handle received here how you wish.
      });
      this._window.plugins.OneSignal.handleNotificationOpened().subscribe(() => {
        // handle opened here how you wish.
      });
      // this._window.plugins.OneSignal.endInit();
    });
  }

  abrePagina(pagina){
    this.nav.push(pagina.componente);
  }
}
