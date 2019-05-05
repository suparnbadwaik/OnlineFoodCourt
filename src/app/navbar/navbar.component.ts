import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'fc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) {
    // null if logged out
    // afAuth.authState.subscribe(x=>console.log(x));
    // afAuth.authState.subscribe(user => this.user$ = user);
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}