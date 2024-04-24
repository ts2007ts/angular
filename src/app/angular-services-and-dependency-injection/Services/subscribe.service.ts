import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSubscribe(value: string) {
    alert('Thank you ... you can access the service now ' + value)
  }
}
