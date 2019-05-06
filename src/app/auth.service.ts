import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private activeRoute: ActivatedRoute) {
    // null if logged out
    // afAuth.authState.subscribe(x=>console.log(x));
    // afAuth.authState.subscribe(user => this.user$ = user);
    this.user$ = afAuth.authState;
   }

  login() {
    // Save the return url viz current page from the url
    // If there is no return url send back to home page
    let returnUrl = this.activeRoute.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}