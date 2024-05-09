import { AuthAuthenticationService } from './../Services/auth-authentication.service';
import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { User } from '../Models/User';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-header-authentication',
  templateUrl: './header-authentication.component.html',
  styleUrl: './header-authentication.component.css'
})
export class HeaderAuthenticationComponent implements OnInit, OnDestroy {

  authService: AuthAuthenticationService = inject(AuthAuthenticationService);
  counterService: CounterService = inject(CounterService);
  isLoggedIn: boolean = false;
  private _userSubject: Subscription;


  ngOnInit(): void {

    this.counterService.increment('Header Component');

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
