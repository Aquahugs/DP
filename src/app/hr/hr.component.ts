import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styles: [
  `
 .pictures {
			padding-top: 2%;
		}

		ul {
			list-style: none;
		}

		h2{
			font-size: 20px;
		}

		#links li{
			padding-right: 2%;
			float: left;
			text-align: left;
		}

		

		h1{
			font-family: 'Anton', sans-serif;
		}

		p{
			font-size: 16px;
		}

		ul li {
			display: inline-block;
			float:left
			padding-left:.5%

		}

		ul{
			margin: 0;
			padding: 0;
			margin-left: 1.5%;
		}



  `]
})
export class HrComponent implements OnInit {
	hr1	
	hr2
	facebook
	twitter
	linkedin
	pintrest

  constructor() {
  	this.hr1 = '/assets/images/news/hr/render1.jpg'
  	this.hr2 = '/assets/images/news/hr/render2.jpg'
  	this.facebook = '/assets/images/news/socialicons/facebook.png'
  	this.twitter = '/assets/images/news/socialicons/twitter.png'
  	this.linkedin = '/assets/images/news/socialicons/linkedin.png'
  	this.pintrest = '/assets/images/news/socialicons/pintrest.png'
   }

  ngOnInit() {
  }

}
