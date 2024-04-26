import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
  styleUrl: './promise-vs-observable.component.css'
})
export class PromiseVsObservableComponent implements OnInit {

  // 1. Promise is native to JavaScript  |  Observable is provided by a third party library RxJS

  // 2. Promise is eager returns data as soon as its created | Observable is lazy emits the data if there is subscriber to it

  // 3. Promise can only emit single value | Observable can emit single or multiple values

  // 4. Promise has methods for success & errors | Observable has methods for success, error, and completion

  // 5. Promise always return asynchronous data | Observable can return both based on how it's implemented

  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');
      resolve(100);
      resolve(200);
    }).then((data) => {
      console.log('Promise data is ' + data);
    });

    const obs = new Observable((sub) => {
      console.log('Observable is called');
      sub.next(100);
      sub.next(200);
    }).subscribe({
      next: (data) => {
        console.log('Observable data is ' + data);
      }
    });
  }
}
