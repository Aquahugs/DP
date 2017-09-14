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
	constructor(private authService:AuthenticationService, private router:Router) { }
	ngOnInit() {}
	
	onSup(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		this.authService.sUpFunc(email,password);
		(resolve => this.router.navigate(['app-landingpage']))
	}
}

