import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  firstName: string = '';
  lastName: string = '';
  country: string = 'usa';
  message: string = '';

  isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
  }

  canExit() {
    if ((this.firstName || this.lastName || this.message) && !this.isSubmitted) {
      return confirm('You have unsaved changes. Do you want to leave this page ? ');
    } else {
      return true;
    }
  }

}
