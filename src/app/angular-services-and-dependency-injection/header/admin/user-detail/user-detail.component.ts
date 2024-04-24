import { UserService } from './../../../Services/user.service';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements AfterViewInit {

  selectedUser: User;
  UserService: UserService = inject(UserService);

  ngAfterViewInit(): void {
    this.UserService.onUserDetailsClicked.subscribe((user) => {
      this.selectedUser = user;
      //console.log(this.selectedUser);
    })
  }
}
