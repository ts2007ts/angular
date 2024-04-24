import { UserService } from './../../Services/user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-admin-service',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  userService: UserService = inject(UserService);

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  createUser() {
    this.userService.createUser(this.name, this.gender, this.subType, this.status);
  }
}
