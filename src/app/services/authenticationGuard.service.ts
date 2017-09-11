import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class AuthenticationGuard implements CanActivate {

	user: Observable<firebase.User>;

	constructor (private afAuth: AngularFireAuth, private router: Router){
		this.user = afAuth.authState; //observable of a firebase user
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){// snapshot in the look in firebase docs 
		return this.user.map((auth) => {
			if (!auth){ //if user is not auth force them to login 
				this.router.navigateByUrl('/login');
				return false;
			}
			return true;
		}).take(1);

	}
}