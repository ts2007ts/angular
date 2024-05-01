import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-template-driven-form',
  templateUrl: './angular-template-driven-form.component.html',
  styleUrl: './angular-template-driven-form.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngularTemplateDrivenFormComponent {

  onSubmit(regForm: NgForm) {
    console.log(regForm);
  }

}
