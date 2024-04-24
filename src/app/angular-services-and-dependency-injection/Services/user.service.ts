import { LoggerService } from './logger.service';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  LoggerService: LoggerService = inject(LoggerService);

  users: User[] = [
    new User('Tarek', 'Male', 'Monthly', 'Active'),
    new User('Sara', 'Female', 'Yearly', 'Inactive'),
    new User('Alia', 'Female', 'Quarterly', 'Active'),
  ];

  onUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  onShowUserDetails(user: User) {
    this.onUserDetailsClicked.emit(user);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    this.LoggerService.logMessage(name, status);
  }

}
