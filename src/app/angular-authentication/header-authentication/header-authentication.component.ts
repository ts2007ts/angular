import { AuthAuthenticationService } from './../Services/auth-authentication.service';
import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { User } from '../Models/User';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-authentication',
  templateUrl: './header-authentication.component.html',
  styleUrl: './header-authentication.component.css'
})
export class HeaderAuthenticationComponent implements OnInit, OnDestroy {

  authService: AuthAuthenticationService = inject(AuthAuthenticationService);
  isLoggedIn: boolean = false;
  private _userSubject: Subscription;


  ngOnInit(): void {

    this._userSubject = this.authService.user.subscribe({
      next: (user: User) => {
        //console.log(user);
        this.isLoggedIn = user ? true : false;
      }
    })
  }

  ngOnDestroy(): void {
    this._userSubject.unsubscribe();
  }

  onLogout() {
    this.authService.logout();

  }

}
