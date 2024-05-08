import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from '../Models/authResponse';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../Models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAuthenticationService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
  error: string | null = null;
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  router: Router = inject(Router);
  private timer: any;

  singUp(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjYeBKHQiFleyHzo37DrTWdj_jglJ1Dqc',
      data
    ).pipe(
      catchError(this.handleError),
      tap((response) => {
        this.handleCreateUser(response);
      })
    )
  }

  login(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjYeBKHQiFleyHzo37DrTWdj_jglJ1Dqc',
      data
    ).pipe(
      catchError(this.handleError),
      tap((response) => {
        this.handleCreateUser(response);
      })
    )
  }

  logout() {
    this.user.next(null); // to logout we need to emit null from the subject
    localStorage.removeItem('user');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = null;
    this.router.navigate(['/login_']);
  }

  autoLogin() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return
    }

    const loggedUser = new User(user.email, user.id, user._token, user._expiresIn);

    if (loggedUser.token) {
      this.user.next(loggedUser);
      const timeStampExpiresIn = new Date(user._expiresIn).getTime() - new Date().getTime();
      this.autoLogout(timeStampExpiresIn);
    }


  }

  autoLogout(expireTime: number) {
    this.timer = setTimeout(() => {
      this.logout();
    }, expireTime)
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string = 'An unknown error has occurred';
    //console.log(err.error.error.message);
    if (!err.error || !err.error.error) {
      return throwError(() => errorMessage);
    }

    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already exists';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'This operation is not allowed';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'This email or password is not valid';
        break;
    }

    return throwError(() => { errorMessage });
  }

  private handleCreateUser(response) {
    const expiresInTs = new Date().getTime() + +response.expiresIn * 1000;
    const expiresIn = new Date(expiresInTs);
    const user = new User(response.email, response.localId, response.idToken, expiresIn);
    this.user.next(user);

    //store user data at browser storage

    localStorage.setItem('user', JSON.stringify(user));

    this.autoLogout(+response.expiresIn * 1000);
  }


}
