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

  formData: any = {};

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
      //console.log(status);
      this.formStatus = status;
    })
  }

  onSubmit() {
    //console.log(this.reactiveForm);

    this.formData = this.reactiveForm.value;
    this.reactiveForm.reset({
      first_name: null,
      last_name: null,
      email: null,
      username: null,
      dob: null,
      gender: 'male',
      address: {
        street: null,
        country: 'India',
        city: null,
        region: null,
        postal: null
      },
      skills: [
        null
      ],
      experience: [

      ]
    });

    console.log('formData is ', this.formData);
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

  generateUsername() {
    let username = '';
    const fName: string = this.reactiveForm.get('first_name').value;
    const lName: string = this.reactiveForm.get('last_name').value;
    const dob: string = this.reactiveForm.get('dob').value;


    if (fName !== null) {
      if (fName.length >= 3) {
        username += fName.slice(0, 3);
      }
      else {
        username += fName;
      }
    }

    if (lName !== null) {
      if (lName.length >= 3) {
        username += lName.slice(0, 3);
      }
      else {
        username += lName;
      }
    }

    let dateTime = new Date(dob);
    username += dateTime.getFullYear();

    username = username.toLowerCase();

    //console.log(username);

    // this.reactiveForm.setValue({
    //   first_name: this.reactiveForm.get('first_name').value,
    //   last_name: this.reactiveForm.get('last_name').value,
    //   email: this.reactiveForm.get('email').value,
    //   username: username,
    //   dob: this.reactiveForm.get('dob').value,
    //   gender: this.reactiveForm.get('gender').value,
    //   address: {
    //     street: this.reactiveForm.get('address.street').value,
    //     country: this.reactiveForm.get('address.country').value,
    //     city: this.reactiveForm.get('address.city').value,
    //     region: this.reactiveForm.get('address.region').value,
    //     postal: this.reactiveForm.get('address.postal').value
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience: this.reactiveForm.get('experience').value
    // })

    //this.reactiveForm.get('username').setValue(username);

    this.reactiveForm.patchValue({
      username: username,
      // address: {
      //   city: 'New Delhi'
      // }
    })
  }

}
