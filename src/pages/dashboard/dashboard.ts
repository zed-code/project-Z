import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ddSelected = 'myDashboard';

  public lineChartData:Array<any> = [
	  {data: [65, 59, 80, 81, 56, 55, 40], label: 'My Projects'},
	  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Anand Mehta'},
	  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Bhargav Jain'}
	];
	public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartOptions:any = {
	  responsive: true,
	  maintainAspectRatio: false,
	  scales: {
	    yAxes: [{
	      scaleLabel: {
	        display: true,
	        labelString: 'Projects'
	      }
	    }],
	    xAxes: [{
	      scaleLabel: {
	        display: true,
	        labelString: 'Months'
	      }
	    }]
	  }
	};
	public lineChartColors:Array<any> = [
	  { // grey
	    backgroundColor: '#0f03',
	    borderColor: '#06B503',
	    pointBackgroundColor: 'rgba(148,159,177,1)',
	    pointBorderColor: '#fff',
	    pointHoverBackgroundColor: 'rgba(0,159,0,0.4)',
	    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	  },
	  { // dark grey
	    backgroundColor: 'rgba(77,83,96,0.2)',
	    borderColor: 'rgba(77,83,96,1)',
	    pointBackgroundColor: 'rgba(77,83,96,1)',
	    pointBorderColor: '#fff',
	    pointHoverBackgroundColor: 'rgba(77,83,96,0.7)',
	    pointHoverBorderColor: 'rgba(77,83,96,1)'
	  },
	  { // grey
	    backgroundColor: '#00f3',
	    borderColor: 'rgba(148,159,177,1)',
	    pointBackgroundColor: 'rgba(148,159,177,1)',
	    pointBorderColor: '#fff',
	    pointHoverBackgroundColor: 'rgba(0,0,177,0.8)',
	    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	  }
	];
	public lineChartLegend:boolean = false;
	public lineChartType:string = 'line';

	public barChartOptions:any = {
	  scaleShowVerticalLines: false,
	  responsive: true,
	  maintainAspectRatio: false,
	  legend: {
        display: false
      },
	  scales: {
	    yAxes: [{
	      scaleLabel: {
	        display: true,
	        labelString: 'Projects'
	      },
	      ticks: {
            beginAtZero: true
          }
	    }],
	    xAxes: [{
	      scaleLabel: {
	        display: true,
	        labelString: 'Months'
	      }
	    }]
	  }
	};
	public barChartLabels:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public barChartType:string = 'bar';
	public barChartLegend:boolean = true;

	public barChartData:any[] = [
	  {data: [65, 59, 80, 81, 56, 55, 40], label: 'My Projects'},
	  {data: [98, 68, 90, 99, 76, 87, 90], label: 'Month Highest'}
	];

	logout() {
	  	this.navCtrl.push(HomePage);
	}

}