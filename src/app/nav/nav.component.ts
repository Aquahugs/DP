import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'navbarguy',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  logopath: string;

  user: Observable<firebase.User>;
  constructor(private authService: AuthenticationService, private router: Router) {
  	this.logopath = '/assets/images/nav/logobig.png'

   }

  ngOnInit() {
  	this.user = this.authService.authUser()
  }

  logOut() {
  	this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
