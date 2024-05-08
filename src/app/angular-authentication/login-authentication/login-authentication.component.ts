import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthAuthenticationService } from '../Services/auth-authentication.service';
import { AuthResponse } from '../Models/authResponse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-authentication',
  templateUrl: './login-authentication.component.html',
  styleUrl: './login-authentication.component.css'
})
export class LoginAuthenticationComponent {

  isLoginMode: boolean = true;
  @ViewChild('authForm') form: NgForm;
  authService: AuthAuthenticationService = inject(AuthAuthenticationService);
  isLoading: boolean = false;
  errorMessage: string | null = null;
  authObs: Observable<AuthResponse>;
  router: Router = inject(Router);

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmitted() {
    //console.log(this.form.value);
    const email = this.form.value.email;
    const password = this.form.value.email;
    if (this.isLoginMode) {
      // login
      this.isLoading = true;
      this.authObs = this.authService.login(email, password);

    } else {

      //signup
      this.isLoading = true;
      this.authObs = this.authService.singUp(email, password);
    }

    this.authObs.subscribe(
      {
        next: (response: AuthResponse) => {
          this.isLoading = false;
          // console.log(' Response' + response);
          this.router.navigate(['/dashboard_']);
        },
        error: (errMsg) => {
          this.isLoading = false;
          // console.log(' Error ' + errMsg);
          this.errorMessage = errMsg;
          this.hideSnackbar();
          this.router.navigate(['/home_']);
        }
      }
    );

    this.form.reset();
  }

  hideSnackbar() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 5000);
  }

}
