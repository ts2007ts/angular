import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    //let obs = new Observable((observer) => { observer.next(Math.random()) });

    //const subject = new Subject();

    //const subject = new BehaviorSubject<number>(100);

    //const subject = new ReplaySubject<number>();

    const subject = new AsyncSubject<number>();

    subject.next(100);
    subject.next(200);
    subject.next(300);

    subject.complete();

    subject.subscribe({
      next: (data) => {
        console.log('First Subscriber   ' + data);
      }
    });

    subject.subscribe({
      next: (data) => {
        console.log('Second Subscriber  ' + data);
      }
    });

    subject.next(2020);

    subject.subscribe({
      next: (data) => {
        console.log('Third Subscriber   ' + data);
      }
    });

    subject.next(2023);




    // AJAX CALL
    // const subject = new Subject();
    // const data = ajax.get('https://randomuser.me/api/');

    // subject.subscribe((response) => {
    //   console.log(response);
    // });

    // subject.subscribe((response) => {
    //   console.log(response);
    // });

    // subject.subscribe((response) => {
    //   console.log(response);
    // });

    // data.subscribe(subject); // consumer

  }
}
