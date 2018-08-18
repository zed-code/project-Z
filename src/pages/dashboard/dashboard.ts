import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DatepickerOptions } from 'ng2-datepicker';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectedClient = 0;
  addClient = 0;
  rate = 4.5;
  profileEditMode = false;
  badrate = 1;
  activeClients = 0;
  
  profileDetails = {
  	name: 'John Doe',
  	contact: '8734659846',
  	details: 'Details is pre-filled',
  	moreDetails: 'More details is pre-filled'
  }
  clientScheduled = [
  	{
  		clientName: 'John Doe',
  		clientStart: '12:00 PM',
  		cliendEnd: '1.30 PM',
  		sessionDuration: '90 Minutes',
  		sessionOn: 'Java 6 Technology & Concepts',
  		left: '50%',
  		width: '6%'
  	},
  	{
  		clientName: 'Kevin Snow',
  		clientStart: '3:00 PM',
  		cliendEnd: '4.00 PM',
  		sessionDuration: '60 Minutes',
  		sessionOn: 'Angular 6 Technology & Concepts',
  		left: '62.5%',
  		width: '4.5%'
  	}
  ];

  dropdownOptions = ['john doe', 'james walker', 'andrew stone'];
  config;
  dataModel;


  ddSelected = 'myDashboard';
  date = new Date();
  daySchedule = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23' ];

  options: DatepickerOptions = {
	  minYear: 1970,
	  maxYear: 2030,
	  displayFormat: 'MMM D[,] YYYY',
	  barTitleFormat: 'MMMM YYYY',
	  dayNamesFormat: 'dd',
	  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
	  // minDate: new Date(Date.now()), 
	  // maxDate: new Date(Date.now()),
	  barTitleIfEmpty: 'Click to select a date',
	  placeholder: 'Select date', // HTML input placeholder attribute (default: '')
	  addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
	  addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
	  fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
	  useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
	};

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

	ngOnInit() {
		this.config = {
        displayKey:"List of all clients", //if objects array passed which key to be displayed defaults to description
        search:true, //true/false for the search functionlity defaults to false,
        height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder:'Select Client' // text to be displayed when no item is selected defaults to Select,
      }
	}

	selectionChanged(event) {
		console.log(event);
	}

	logout() {
	  	this.navCtrl.push(HomePage);
	}

	dateCalled(date) {
		console.log('date', date);
	}

}
