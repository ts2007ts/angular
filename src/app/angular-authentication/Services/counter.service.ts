import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counter: number = 0;

  increment(componentName: string) {
    console.log('Component Name ' + componentName + ' : ' + this.counter++);
  }
}
