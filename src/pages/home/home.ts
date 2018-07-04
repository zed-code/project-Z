import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  currentYear: any;
  sidebarState = 0;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  	const date = new Date();
  	this.currentYear = date.getFullYear();
  }

  ngOnDestroy() {

  }

}
