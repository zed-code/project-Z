import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoaderComponent } from '../components/loader/loader';
import { PortalApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NgDatepickerModule } from 'ng2-datepicker';

// ionic2-rating
import { Ionic2RatingModule } from 'ionic2-rating';
// ng2 charts
import { ChartsModule } from 'ng2-charts';
// ng select dropdown
import { SelectDropDownModule } from 'ngx-select-dropdown'
@NgModule({
  declarations: [
    PortalApp,
    HomePage,
    DashboardPage,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    Ionic2RatingModule,
    ChartsModule,
    SelectDropDownModule,
    NgDatepickerModule,
    IonicModule.forRoot(PortalApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PortalApp,
    HomePage,
    DashboardPage,
    LoaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
