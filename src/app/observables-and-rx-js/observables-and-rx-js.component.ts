import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-observables-and-rx-js',
  templateUrl: './observables-and-rx-js.component.html',
  styleUrl: './observables-and-rx-js.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ObservablesAndRxJSComponent implements AfterViewInit {
  data: any[] = [];

  arr_1 = [1, 3, 5, 7, 9];
  arr_2 = ['A', 'B', 'C', 'D'];

  @ViewChild('createbtn')
  createButton: ElementRef;

  buttonObservable;

  observable_1 = new Observable((observer) => {
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    //setTimeout(() => { observer.error(new Error('some errors occurred !')) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
    setTimeout(() => { observer.complete() }, 6000);
  });

  observable_2 = of(this.arr_1, this.arr_2);

  observable_3 = from(this.arr_1);

  promise = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  })

  observable_4 = from(this.promise);

  observable_5 = from([2, 4, 6, 8, 10, 12]);


  getData() {
    // this.observable_1.subscribe({
    //   next: (data: any) => {
    //     this.data.push(data);
    //     //this.data = data;
    //     console.log('you are the next handler !');
    //   },
    //   error: (err) => {
    //     console.log(err.message);
    //   },
    //   complete: () => {
    //     console.log('Observer has completed !');
    //   }
    // });

    // this.observable_2.subscribe({
    //   next: (data) => {
    //     console.log('of ' + data);
    //   }
    // });

    // this.observable_3.subscribe({
    //   next: (data) => {
    //     console.log('from ' + data);
    //   }
    // });

    // this.observable_4.subscribe({
    //   next: (data) => {
    //     console.log('promise to observable ' + data);
    //   }
    // });

    this.observable_5
      .pipe(map((data) => { return data * 5 })) // transform data  returns value transformed
      .pipe(filter((data, i) => { return data % 4 === 0 })) // filter the data returns true || false
      .subscribe({
        next: (data: any) => {
          this.data.push(data);
          console.log('observable_5 ' + data);
        }
      });

    // WE CAN CHAIN THE TWO OPERATOR

    this.observable_5
      .pipe(
        map((data) => { return data * 5 }), // transform data  returns value transformed
        filter((data, i) => { return data % 4 === 0 }) // filter the data returns true || false
      )
      .subscribe({
        next: (data: any) => {
          this.data.push(data);
          console.log('observable_5 ' + data);
        }
      });


  }

  // buttonClicked() {
  //   let count = 0;
  //   this.buttonObservable = fromEvent(this.createButton.nativeElement, 'click')
  //     .subscribe((data: any) => {
  //       console.log(data);
  //       this.showItem(++count);
  //     });
  // }

  // showItem(counter: number) {
  //   let div = document.createElement<"div">('div');
  //   div.innerText = 'Item ' + counter;
  //   console.log(div);
  //   document.getElementById('container').appendChild(div);
  // }

  ngAfterViewInit(): void {
    //this.buttonClicked();
  }
}
