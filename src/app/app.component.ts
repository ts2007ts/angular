import { Component, OnInit, inject } from '@angular/core';
import { AuthAuthenticationService } from './angular-authentication/Services/auth-authentication.service';

@Component({
  selector: 'app-root',
  //selector: '[app-root]', //HTML attribute
  //selector: '.app-root', //CSS class
  //selector: '#app-root', //CSS id
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Ekart';

  authService: AuthAuthenticationService = inject(AuthAuthenticationService);

  ngOnInit(): void {
    this.authService.autoLogin();
  }


}
