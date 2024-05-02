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

  onSubmit() {
    // console.log(this.form.value.first_name);
    // console.log(this.form.controls['first_name'].value)
    console.log(this.form)
  }

}
