import { User } from '../../../Models/User';
import { UserService } from './../../../Services/user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  userService: UserService = inject(UserService);

  usersList = this.userService.getAllUsers();

  showUserDetails(user: User) {
    this.userService.onShowUserDetails(user);
  }


}
