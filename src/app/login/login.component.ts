import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  errorMsg: string;
  user: Observable<firebase.User> 

  constructor(private authService: AuthenticationService, private router: Router,private afAuth: AngularFireAuth ) 
  { this.user = this.afAuth.authState}

  signIn() {
    this.authService.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['app-landingpage']))
      .catch(error => this.errorMsg = error.message);
  }
   loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(resolve => this.router.navigate(['app-landingpage']))
      .catch(function (error){
      alert('${error.message} Please try again')
    })
  }
  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(resolve => this.router.navigate(['app-landingpage']))
    .catch(function (error){
      alert('${error.message} Please try again')
    })
  }



}