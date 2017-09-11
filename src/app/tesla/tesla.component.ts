import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styles: [`
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

		iframe {
			padding-top: 2%;
		}

		h1{
			font-family: 'Anton', sans-serif;
		}
		
		p{
			font-size: 16px;
		}
  `]
})
export class TeslaComponent implements OnInit {
	rudd1
	rudd2
  constructor() { 
  	this.rudd1 = '/assets/images/news/rudd/rudd1.jpg'
  	this.rudd2 = '/assets/images/news/rudd/rudd2.jpg'
  }

  ngOnInit() {
  }

}
