import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrl: './life-cycle-hook.component.css'
})
export class LifeCycleHookComponent {

  inputVal: string = '';
  toDestroy: boolean = false;

  constructor() {
    console.log('Life Cycle Hook Component Constructor called! ');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit of LifeCycleHookComponent Hook Called! ');
  }

  onBtnClick(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }

}
