import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineFoodCourt';

  constructor(private auth: AuthService, router: Router) {
    // auth.user$ gives you information about the current user
    // refer auth.service.ts
    auth.user$.subscribe(user => {
      if(user) {
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
