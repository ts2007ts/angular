import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = [];

  addDefaultUsers() {
    let user_1 = new User('Tarek', 'Male', 'Yearly', 200, true);
    let user_2 = new User('Sara', 'Female', 'Yearly', 200, true);
    let user_3 = new User('Alia', 'Female', 'Yearly', 200, true);

    this.users.push(user_1);
    this.users.push(user_2);
    this.users.push(user_3);

  }

  getAllUsers() {
    return this.users;
  }

}
