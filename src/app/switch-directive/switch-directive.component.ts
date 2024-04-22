import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrl: './switch-directive.component.css'
})
export class SwitchDirectiveComponent {

  tab: string = '';

  onClick(name: string) {
    //console.log(name);
    this.tab = name;
  }
}
