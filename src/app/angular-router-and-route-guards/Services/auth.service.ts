import { UserService } from './user.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userService: UserService = inject(UserService);
  isLogged: boolean = false;


  login(username: string, password: string) {

    //console.log('Username = ' + username, 'Password = ' + password);
    //console.log(this.userService.users);
    let user = this.userService.users.find(user => user.username === username && user.password === password);
    //console.log(user);
    if (user === undefined) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }

    return user;
  }

  logout() {
    this.isLogged = false;
  }

  isAuthenticated() {
    return this.isLogged;
  }
}
