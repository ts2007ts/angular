import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrl: './life-cycle-hook.component.css'
})
export class LifeCycleHookComponent {

  constructor() {
    console.log('Life Cycle Hook Component Constructor called ! ');

  }

}
