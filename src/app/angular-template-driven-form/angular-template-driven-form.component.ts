import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-template-driven-form',
  templateUrl: './angular-template-driven-form.component.html',
  styleUrl: './angular-template-driven-form.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngularTemplateDrivenFormComponent {

  @ViewChild('regForm') form: NgForm;

  firstName: string = '';
  lastName: string = '';
  email_: string = '';
  phone: number;
  username: string = '';
  dateOfBirth: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  street1: string = '';
  street2: string = '';
  postal: number;
  region: string = '';
  isAgreed: boolean = false;


  onSubmit() {
    // console.log(this.form.value.first_name);
    // console.log(this.form.controls['first_name'].value)
    console.log(this.form);

    this.firstName = this.form.value.first_name;
    this.lastName = this.form.value.last_name;
    this.email_ = this.form.value.email;
    this.dateOfBirth = this.form.value.dob;
    this.username = this.form.value.username;
    this.street1 = this.form.value.address.street1;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.isAgreed = this.form.value.agreement;

    //this.form.reset();
  }

  generateUsername() {
    let username = '';
    if (this.firstName.length >= 3) {
      username += this.firstName.slice(0, 3);
    } else {
      username += this.firstName;
    }

    if (this.lastName.length >= 3) {
      username += this.lastName.slice(0, 3);
    } else {
      username += this.lastName;
    }

    let year = new Date(this.dateOfBirth).getFullYear();

    username += year;

    username = username.toLowerCase();

    //this.form.controls['username'].value = username;

    // this.form.setValue({
    //must match the structure of value object
    // first_name: this.form['first_name'].value,
    // last_name: this.form['last_name'].value,
    // email: this.form['email'].value,
    // username: username,
    // dob: this.form['dob'].value,
    // gender: this.form['gender'].value,
    // address: {
    //   street1: this.form['address.street1'].value,
    //   street2: this.form['address.street2'].value,
    //   country: this.form['address.country'].value,
    //   city: this.form['address.city'].value,
    //   region: this.form['address.region'].value,
    //   postal: this.form['address.postal'].value
    //   },
    // })

    this.form.form.patchValue({
      username: username
    })
  }

}
