import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './Validators/noSpaceAllowed.validator';


@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrl: './angular-reactive-form.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngularReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;

  formStatus: string = '';

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      first_name: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      last_name: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required, CustomValidators.checkUserName),
      gender: new FormControl('male'),
      dob: new FormControl(null),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ]),
      experience: new FormArray([

      ])
    });

    // this.reactiveForm.get('first_name').valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // this.reactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // this.reactiveForm.get('email').statusChanges.subscribe((status) => {
    //   console.log(status);
    // })

    this.reactiveForm.statusChanges.subscribe((status: string) => {
      console.log(status);
      this.formStatus = status;
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkill() {
    (<FormArray>this.reactiveForm.get('skills'))
      .push(new FormControl(null, Validators.required));
  }

  deleteSkill(index: number) {
    (<FormArray>this.reactiveForm.get('skills')).removeAt(index);
  }

  addExperience() {
    const formGroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }

  deleteExperience(index: number) {
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }

}
