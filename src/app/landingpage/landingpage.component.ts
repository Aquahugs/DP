import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  	imagepath:string;
  	imagepath2:string;
  constructor() { 
  	 this.imagepath = '/assets/images/1.jpg'
  	 this.imagepath2 = '/assets/images/2.jpg'

  }

  ngOnInit() {
  }

}
