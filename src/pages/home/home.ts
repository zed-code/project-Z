import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  currentYear: any;
  sidebarState = 0;
  percent;
  intervalFn;

  popupText = {
  				"Privacy Policy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n Praesent vel arcu dignissim augue consequat fermentum. Sed aliquam quis nulla nec tempor. \n Fusce magna orci, cursus eu urna nec, ultricies venenatis ex. Maecenas tempus pharetra risus, eu porta arcu gravida vitae. Donec accumsan gravida leo eget lacinia. Vivamus eu tristique lorem, sed tincidunt velit. \n Aliquam malesuada neque et sapien malesuada placerat nec ut libero. Nullam egestas elementum tincidunt. In mattis ex eu nunc fringilla, at ornare ligula viverra. Mauris quis nibh eu massa mollis accumsan. Maecenas diam ipsum, eleifend et lacinia eu, venenatis sed ipsum. \n Praesent pulvinar maximus tortor, at ultrices augue ultricies eu. Aenean consectetur massa vel faucibus semper. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra accumsan sapien vel sollicitudin. Nam quis accumsan erat, vitae commodo sapien. Proin rutrum nisi vel facilisis hendrerit. Donec et dolor non justo dignissim interdum. Vivamus hendrerit at dolor in ultricies. Nullam sit amet lobortis dolor, eget euismod lorem. Donec sed consequat sem, ac feugiat enim. Aliquam molestie velit laoreet, dignissim eros sagittis, interdum lectus. In in convallis nibh, at blandit magna. Donec ut lorem euismod, dapibus tortor sit amet, elementum justo. Maecenas nisl odio, tempor fringilla sodales quis, egestas sed velit. \n Praesent tempor lacinia ipsum id gravida. Fusce mattis lacinia erat, vitae elementum libero porta sed. Sed vitae consectetur libero. In gravida metus et dolor gravida tristique. Suspendisse consequat diam eu diam sodales mollis. \n\n Quisque condimentum nisl lacinia commodo egestas. Suspendisse non augue hendrerit, lacinia nibh eget, facilisis urna. Nam a justo lacus. Mauris hendrerit vitae dolor quis varius. Etiam ac tempus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec tempus risus. Morbi sit amet urna eu turpis sagittis hendrerit eu quis odio. Aenean blandit et turpis nec convallis. Sed faucibus quis purus a ultricies. Phasellus nibh quam, luctus at justo auctor, ultrices pretium mi. Nam vel metus et risus gravida congue. Donec iaculis elit quam, in mollis nisl eleifend sit amet. Praesent quis nulla tempus, porta erat eget, placerat quam. Aenean tempor, metus id venenatis pharetra, purus nulla consequat nisl, vitae finibus lorem felis sit amet turpis. Cras vestibulum turpis sed metus feugiat, et ultricies nibh maximus. Aenean ut lorem iaculis, condimentum felis ut, convallis enim. \n Donec enim justo, auctor elementum suscipit vel, commodo at augue. Mauris quis libero mauris. Curabitur sit amet nisl vitae nisi condimentum pellentesque. Quisque vitae facilisis erat. Maecenas ullamcorper neque ac ante gravida, a rutrum nibh finibus. Pellentesque tincidunt consectetur lorem, ut rhoncus neque. Curabitur odio lorem, dapibus in risus molestie, condimentum bibendum nisi. Pellentesque orci felis, placerat et ligula eu, cursus consectetur ligula. Aliquam ac facilisis mi. Fusce posuere convallis pellentesque. Integer semper mollis turpis. Etiam imperdiet, dolor eget eleifend finibus, ex velit tincidunt odio, in consectetur tellus leo sed felis.",
			 	"Terms and Conditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n Praesent vel arcu dignissim augue consequat fermentum. Sed aliquam quis nulla nec tempor. \n Fusce magna orci, cursus eu urna nec, ultricies venenatis ex. Maecenas tempus pharetra risus, eu porta arcu gravida vitae. Donec accumsan gravida leo eget lacinia. Vivamus eu tristique lorem, sed tincidunt velit. \n Aliquam malesuada neque et sapien malesuada placerat nec ut libero. Nullam egestas elementum tincidunt. In mattis ex eu nunc fringilla, at ornare ligula viverra. Mauris quis nibh eu massa mollis accumsan. Maecenas diam ipsum, eleifend et lacinia eu, venenatis sed ipsum. \n Praesent pulvinar maximus tortor, at ultrices augue ultricies eu. Aenean consectetur massa vel faucibus semper. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra accumsan sapien vel sollicitudin. Nam quis accumsan erat, vitae commodo sapien. Proin rutrum nisi vel facilisis hendrerit. Donec et dolor non justo dignissim interdum. Vivamus hendrerit at dolor in ultricies. Nullam sit amet lobortis dolor, eget euismod lorem. Donec sed consequat sem, ac feugiat enim. Aliquam molestie velit laoreet, dignissim eros sagittis, interdum lectus. In in convallis nibh, at blandit magna. Donec ut lorem euismod, dapibus tortor sit amet, elementum justo. Maecenas nisl odio, tempor fringilla sodales quis, egestas sed velit. \n Praesent tempor lacinia ipsum id gravida. Fusce mattis lacinia erat, vitae elementum libero porta sed. Sed vitae consectetur libero. In gravida metus et dolor gravida tristique. Suspendisse consequat diam eu diam sodales mollis. \n\n Quisque condimentum nisl lacinia commodo egestas. Suspendisse non augue hendrerit, lacinia nibh eget, facilisis urna. Nam a justo lacus. Mauris hendrerit vitae dolor quis varius. Etiam ac tempus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec tempus risus. Morbi sit amet urna eu turpis sagittis hendrerit eu quis odio. Aenean blandit et turpis nec convallis. Sed faucibus quis purus a ultricies. Phasellus nibh quam, luctus at justo auctor, ultrices pretium mi. Nam vel metus et risus gravida congue. Donec iaculis elit quam, in mollis nisl eleifend sit amet. Praesent quis nulla tempus, porta erat eget, placerat quam. Aenean tempor, metus id venenatis pharetra, purus nulla consequat nisl, vitae finibus lorem felis sit amet turpis. Cras vestibulum turpis sed metus feugiat, et ultricies nibh maximus. Aenean ut lorem iaculis, condimentum felis ut, convallis enim. \n Donec enim justo, auctor elementum suscipit vel, commodo at augue. Mauris quis libero mauris. Curabitur sit amet nisl vitae nisi condimentum pellentesque. Quisque vitae facilisis erat. Maecenas ullamcorper neque ac ante gravida, a rutrum nibh finibus. Pellentesque tincidunt consectetur lorem, ut rhoncus neque. Curabitur odio lorem, dapibus in risus molestie, condimentum bibendum nisi. Pellentesque orci felis, placerat et ligula eu, cursus consectetur ligula. Aliquam ac facilisis mi. Fusce posuere convallis pellentesque. Integer semper mollis turpis. Etiam imperdiet, dolor eget eleifend finibus, ex velit tincidunt odio, in consectetur tellus leo sed felis."
			  };
 
  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  	const date = new Date();
  	const self = this;
  	let cnt = 0;
  	this.currentYear = date.getFullYear();
  	this.intervalFn = setInterval(function() {
  		if (self.sidebarState == 0 ) {
		    self.percent = (++cnt) % 3;
		    if (cnt == 3) {
		    	cnt = 0;
		    }
		}
	}, 2400);
  }

  scrollTo(id) {
  	const ele = document.getElementById(id);
  	ele.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() {
  	clearInterval(this.intervalFn);
  }

}
