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
  photoURL:string;
  user: Observable<firebase.User> 

  constructor(private authService: AuthenticationService, private router: Router,private afAuth: AngularFireAuth ) 
  { this.user = this.afAuth.authState}

  
   loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(resolve => this.router.navigate(['app-landingpage']))
      .then(user => {
      const current = firebase.database().ref('/users').child(user.uid);
      current.once('user', function(snapshot) {
          if(snapshot.exists()) {
              snapshot.ref.update({
                  name: user.displayName,
                  email: user.email,
                  photoURL: user.photoURL
              });
          } else {
              snapshot.ref.set({
                  name: user.displayName,
                  email: user.email,
                  photoURL: user.photoURL,
               
              });
          }
      })
    });
      
  }
  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(resolve => this.router.navigate(['app-landingpage']))
    .catch(function (error){
      alert('${error.message} Please try again')
    })
  }

   signIn() {
    this.authService.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['app-landingpage']))
      .catch(error => this.errorMsg = error.message);
  }
}