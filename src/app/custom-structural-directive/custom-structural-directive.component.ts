import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-structural-directive',
  templateUrl: './custom-structural-directive.component.html',
  styleUrl: './custom-structural-directive.component.css'
})
export class CustomStructuralDirectiveComponent {

  display: boolean = false;

  displayTermsAndServices() {
    this.display = !this.display;
  }
}
