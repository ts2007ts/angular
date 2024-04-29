import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-router',
  templateUrl: './login-router.component.html',
  styleUrl: './login-router.component.css'
})
export class LoginRouterComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));

      if (logout) {
        this.authService.logout();
        alert('You are now Logged out isLogged = ' + this.authService.isLogged);
      }
    })
  }

  login() {

    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if (user === undefined) {
      alert('The login credentials you have entered is not correct ');
    } else {
      alert('Welcome ' + username + ' ' + 'you have logged in');
      this.router.navigate(['/Courses']);
    }
  }

}
