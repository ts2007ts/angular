import { Component } from '@angular/core';

@Component({
  selector: 'app-difference-between-property-and-host-binding',
  templateUrl: './difference-between-property-and-host-binding.component.html',
  styleUrl: './difference-between-property-and-host-binding.component.css'
})
export class DifferenceBetweenPropertyAndHostBindingComponent {

  textValue: string = 'Hello World';

  logValue() {
    console.log('Input has been focused');
  }
}
