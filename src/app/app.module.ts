import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoaderComponent } from '../components/loader/loader';
import { PortalApp } from './app.component';
import { HomePage } from '../pages/home/home';

// ionic2-rating
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    PortalApp,
    HomePage,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule,
    IonicModule.forRoot(PortalApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PortalApp,
    HomePage,
    LoaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
