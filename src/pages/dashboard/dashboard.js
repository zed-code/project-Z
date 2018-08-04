var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ddSelected = 'myDashboard';
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'My Projects' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Anand Mehta' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Bhargav Jain' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
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
        this.lineChartColors = [
            {
                backgroundColor: '#0f03',
                borderColor: '#06B503',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'rgba(0,159,0,0.4)',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'rgba(77,83,96,0.7)',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: '#00f3',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'rgba(0,0,177,0.8)',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Projects'
                        },
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Months'
                        }
                    }]
            }
        };
        this.barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'My Projects' },
            { data: [98, 68, 90, 99, 76, 87, 90], label: 'Month Highest' }
        ];
    }
    DashboardPage.prototype.logout = function () {
        this.navCtrl.push(HomePage);
    };
    DashboardPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-dashboard',
            templateUrl: 'dashboard.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.js.map