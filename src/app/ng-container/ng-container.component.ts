import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  toggle: Boolean = true;

  onToggle() {
    this.toggle = !this.toggle
  }
}
