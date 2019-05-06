import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, RouterState, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {  }

  canActivate(route, state: RouterStateSnapshot) {
    // when checkout is entered in the url, the guard gets activated.
    // it executes the canActivate method.
    // it navigates to /login path and attaches query params to it that contains current url
    return this.auth.user$.map(user => {
      if(user) return true;

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    });
  }
}