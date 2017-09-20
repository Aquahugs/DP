import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;
  private authState: any;


  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,) { 
    this.user = afAuth.authState;
  }

  get currentUserId(): string {
      return this.authState !== null ? this.authState.uid : '';
    }

  login(user: User){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

  }

  logout(){
    return this.afAuth.auth.signOut();
  }



  authUser(){
    return this.user;
  }

  sUpFunc(email: string, password: string, displayName:string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((user) => {
      this.authState = user;
      const status = 'online';
      this.setUserData(email, displayName, status);
    }).catch(error => console.log(error));
   }

   setUserData(email: string, displayName: string, status: string): void {
      const path = `users/${this.currentUserId}`;
      const data = {
        email: email,
        displayName: displayName,
        status: status
      };

      this.db.object(path).update(data)
        .catch(error => console.log(error));
    }

    setUserStatus(status: string): void {
      const path = `users/${this.currentUserId}`;

      const data = {
        status: status
      };

      this.db.object(path).update(data)
        .catch(error => console.log(error));
    }


}
