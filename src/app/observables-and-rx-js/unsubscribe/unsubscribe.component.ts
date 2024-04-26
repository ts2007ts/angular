import { Component } from '@angular/core';
import { Subscription, count, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {

  counter = interval(1000);
  data: number[] = [];
  sub;

  subscribe() {
    this.sub = this.counter.subscribe({
      next: (data: number) => {
        this.data.push(data);
      }
    })
  }

  unSubscribe() {
    this.sub.unsubscribe();
  }
}
