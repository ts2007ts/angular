import { Component, ComponentFactoryResolver, OnInit, ViewChild, inject } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ViewContainerDirective } from '../Directives/view-container.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  showConfirmDeleteComponent: boolean = false;

  deletedUser: User;

  @ViewChild('appViewContainer') container: ViewContainerDirective;

  confirmationOBS;

  userService: UserService = inject(UserService);

  ngOnInit(): void {
    this.userService.addDefaultUsers();
    this.users = this.userService.getAllUsers();
  }

  onDelete(user: User) {
    // this.showConfirmDeleteComponent = true;
    this.deletedUser = user;
    this.showConfirmDelete(this.deletedUser);  // create component automatically
  }

  onConfirmDelete(value: boolean) {
    this.showConfirmDeleteComponent = false;
    if (value) {
      let index = this.users.indexOf(this.deletedUser);
      this.users.splice(index, 1);
    }
  }

  showConfirmDelete(user: User) {

    //console.log(this.container.viewContainer);

    const containerViewRef = this.container.viewContainer;

    containerViewRef.clear();

    const componentRef = containerViewRef.createComponent(ConfirmDeleteComponent);

    componentRef.instance.deletedUser = user;

    this.confirmationOBS = componentRef.instance.onConfirmation.subscribe((value) => {
      this.confirmationOBS.unsubscribe();
      containerViewRef.clear();

      if (value) {
        let index = this.users.indexOf(this.deletedUser);
        this.users.splice(index, 1);
      }
    })
  }

}
