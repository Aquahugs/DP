import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

	imagepath: string;
	displayName: string;
	constructor(private authService:AuthenticationService, router: Router) {this.imagepath = '/assets/images/car2.gif' }
	ngOnInit() {}
	
	onSup(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		const displayName = form.value.displayName;
		this.authService.sUpFunc(email,password,displayName);	
	}

}

