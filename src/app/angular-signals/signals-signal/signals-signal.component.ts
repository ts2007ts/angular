import { Component, DoCheck, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-signal',
  templateUrl: './signals-signal.component.html',
  styleUrl: './signals-signal.component.css'
})
export class SignalsSignalComponent implements DoCheck {

  counter = signal(0);
  message = signal<string[]>([]);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log('new counter ' + this.counter()));
  }

  increment() {
    this.counter.update((previous) => { return previous + 1 });
    this.message.update((previous) => { return [...previous, 'Current counter value is: ' + this.counter() + ' ' + this.doubleCounter()] });
    //this.message.mutate(())
    //push('Current counter value is: ' + this.counter)
  }

  decrement() {
    this.counter.update((previous) => { return previous - 1 });
    //this.message.pop();
  }

  ngDoCheck(): void {
    console.log('Change detection called !')
  }


}
