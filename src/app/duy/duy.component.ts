import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duy',
  templateUrl: './duy.component.html',
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
export class DuyComponent implements OnInit {
	post1:string
	post2:string
	post3:string
	post4:string
	post5:string
	post6:string

	facebook
	twitter
	linkedin
	pintrest

  constructor() {
  	this.post1 = '/assets/images/news/duy/duy1.jpg'
	this.post2 = '/assets/images/news/duy/duy2.jpg'
	this.post3 = '/assets/images/news/duy/duy3.jpg'
	this.post4 = '/assets/images/news/duy/duy4.jpg'
	this.post5 = '/assets/images/news/duy/duy5.jpg'
	this.post6 = '/assets/images/news/duy/duy6.jpg'
	

  	this.facebook = '/assets/images/news/socialicons/facebook.png'
  	this.twitter = '/assets/images/news/socialicons/twitter.png'
  	this.linkedin = '/assets/images/news/socialicons/linkedin.png'
  	this.pintrest = '/assets/images/news/socialicons/pintrest.png'



   }

  ngOnInit() {
  }

}
