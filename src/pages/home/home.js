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
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.sidebarState = 0;
        this.rate = 4.8;
        this.percent = 0;
        this.headerTexts = ['Explore Your Potential', 'Get Expertised', 'Reach Your limits'];
        this.loginAs = 'expert';
        this.email = '';
        this.password = '';
        this.loginFail = false;
        this.popupText = {
            "Privacy Policy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n Praesent vel arcu dignissim augue consequat fermentum. Sed aliquam quis nulla nec tempor. \n Fusce magna orci, cursus eu urna nec, ultricies venenatis ex. Maecenas tempus pharetra risus, eu porta arcu gravida vitae. Donec accumsan gravida leo eget lacinia. Vivamus eu tristique lorem, sed tincidunt velit. \n Aliquam malesuada neque et sapien malesuada placerat nec ut libero. Nullam egestas elementum tincidunt. In mattis ex eu nunc fringilla, at ornare ligula viverra. Mauris quis nibh eu massa mollis accumsan. Maecenas diam ipsum, eleifend et lacinia eu, venenatis sed ipsum. \n Praesent pulvinar maximus tortor, at ultrices augue ultricies eu. Aenean consectetur massa vel faucibus semper. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra accumsan sapien vel sollicitudin. Nam quis accumsan erat, vitae commodo sapien. Proin rutrum nisi vel facilisis hendrerit. Donec et dolor non justo dignissim interdum. Vivamus hendrerit at dolor in ultricies. Nullam sit amet lobortis dolor, eget euismod lorem. Donec sed consequat sem, ac feugiat enim. Aliquam molestie velit laoreet, dignissim eros sagittis, interdum lectus. In in convallis nibh, at blandit magna. Donec ut lorem euismod, dapibus tortor sit amet, elementum justo. Maecenas nisl odio, tempor fringilla sodales quis, egestas sed velit. \n Praesent tempor lacinia ipsum id gravida. Fusce mattis lacinia erat, vitae elementum libero porta sed. Sed vitae consectetur libero. In gravida metus et dolor gravida tristique. Suspendisse consequat diam eu diam sodales mollis. \n\n Quisque condimentum nisl lacinia commodo egestas. Suspendisse non augue hendrerit, lacinia nibh eget, facilisis urna. Nam a justo lacus. Mauris hendrerit vitae dolor quis varius. Etiam ac tempus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec tempus risus. Morbi sit amet urna eu turpis sagittis hendrerit eu quis odio. Aenean blandit et turpis nec convallis. Sed faucibus quis purus a ultricies. Phasellus nibh quam, luctus at justo auctor, ultrices pretium mi. Nam vel metus et risus gravida congue. Donec iaculis elit quam, in mollis nisl eleifend sit amet. Praesent quis nulla tempus, porta erat eget, placerat quam. Aenean tempor, metus id venenatis pharetra, purus nulla consequat nisl, vitae finibus lorem felis sit amet turpis. Cras vestibulum turpis sed metus feugiat, et ultricies nibh maximus. Aenean ut lorem iaculis, condimentum felis ut, convallis enim. \n Donec enim justo, auctor elementum suscipit vel, commodo at augue. Mauris quis libero mauris. Curabitur sit amet nisl vitae nisi condimentum pellentesque. Quisque vitae facilisis erat. Maecenas ullamcorper neque ac ante gravida, a rutrum nibh finibus. Pellentesque tincidunt consectetur lorem, ut rhoncus neque. Curabitur odio lorem, dapibus in risus molestie, condimentum bibendum nisi. Pellentesque orci felis, placerat et ligula eu, cursus consectetur ligula. Aliquam ac facilisis mi. Fusce posuere convallis pellentesque. Integer semper mollis turpis. Etiam imperdiet, dolor eget eleifend finibus, ex velit tincidunt odio, in consectetur tellus leo sed felis.",
            "Terms and Conditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n Praesent vel arcu dignissim augue consequat fermentum. Sed aliquam quis nulla nec tempor. \n Fusce magna orci, cursus eu urna nec, ultricies venenatis ex. Maecenas tempus pharetra risus, eu porta arcu gravida vitae. Donec accumsan gravida leo eget lacinia. Vivamus eu tristique lorem, sed tincidunt velit. \n Aliquam malesuada neque et sapien malesuada placerat nec ut libero. Nullam egestas elementum tincidunt. In mattis ex eu nunc fringilla, at ornare ligula viverra. Mauris quis nibh eu massa mollis accumsan. Maecenas diam ipsum, eleifend et lacinia eu, venenatis sed ipsum. \n Praesent pulvinar maximus tortor, at ultrices augue ultricies eu. Aenean consectetur massa vel faucibus semper. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra accumsan sapien vel sollicitudin. Nam quis accumsan erat, vitae commodo sapien. Proin rutrum nisi vel facilisis hendrerit. Donec et dolor non justo dignissim interdum. Vivamus hendrerit at dolor in ultricies. Nullam sit amet lobortis dolor, eget euismod lorem. Donec sed consequat sem, ac feugiat enim. Aliquam molestie velit laoreet, dignissim eros sagittis, interdum lectus. In in convallis nibh, at blandit magna. Donec ut lorem euismod, dapibus tortor sit amet, elementum justo. Maecenas nisl odio, tempor fringilla sodales quis, egestas sed velit. \n Praesent tempor lacinia ipsum id gravida. Fusce mattis lacinia erat, vitae elementum libero porta sed. Sed vitae consectetur libero. In gravida metus et dolor gravida tristique. Suspendisse consequat diam eu diam sodales mollis. \n\n Quisque condimentum nisl lacinia commodo egestas. Suspendisse non augue hendrerit, lacinia nibh eget, facilisis urna. Nam a justo lacus. Mauris hendrerit vitae dolor quis varius. Etiam ac tempus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec tempus risus. Morbi sit amet urna eu turpis sagittis hendrerit eu quis odio. Aenean blandit et turpis nec convallis. Sed faucibus quis purus a ultricies. Phasellus nibh quam, luctus at justo auctor, ultrices pretium mi. Nam vel metus et risus gravida congue. Donec iaculis elit quam, in mollis nisl eleifend sit amet. Praesent quis nulla tempus, porta erat eget, placerat quam. Aenean tempor, metus id venenatis pharetra, purus nulla consequat nisl, vitae finibus lorem felis sit amet turpis. Cras vestibulum turpis sed metus feugiat, et ultricies nibh maximus. Aenean ut lorem iaculis, condimentum felis ut, convallis enim. \n Donec enim justo, auctor elementum suscipit vel, commodo at augue. Mauris quis libero mauris. Curabitur sit amet nisl vitae nisi condimentum pellentesque. Quisque vitae facilisis erat. Maecenas ullamcorper neque ac ante gravida, a rutrum nibh finibus. Pellentesque tincidunt consectetur lorem, ut rhoncus neque. Curabitur odio lorem, dapibus in risus molestie, condimentum bibendum nisi. Pellentesque orci felis, placerat et ligula eu, cursus consectetur ligula. Aliquam ac facilisis mi. Fusce posuere convallis pellentesque. Integer semper mollis turpis. Etiam imperdiet, dolor eget eleifend finibus, ex velit tincidunt odio, in consectetur tellus leo sed felis."
        };
    }
    HomePage.prototype.ngOnInit = function () {
        var date = new Date();
        var self = this;
        var cnt = 0;
        this.currentYear = date.getFullYear();
        this.intervalFn = setInterval(function () {
            if (self.sidebarState == 0) {
                self.percent = (++cnt) % 3;
                if (cnt == 3) {
                    cnt = 0;
                }
            }
        }, 7500);
    };
    HomePage.prototype.scrollTo = function (id) {
        var ele = document.getElementById(id);
        ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    HomePage.prototype.carouselShift = function (direction) {
        if (direction == 'left') {
            if (this.percent != 0) {
                this.percent--;
            }
            else {
                this.percent = this.headerTexts.length - 1;
            }
        }
        else {
            if (this.percent != this.headerTexts.length - 1) {
                this.percent++;
            }
            else {
                this.percent = 0;
            }
        }
    };
    HomePage.prototype.login = function () {
        if (this.email && this.password) {
            this.navCtrl.push(DashboardPage);
        }
        else {
            this.loginFail = true;
            var self_1 = this;
            setTimeout(function () {
                self_1.loginFail = false;
            }, 300);
        }
    };
    HomePage.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalFn);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map