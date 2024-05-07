import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingAuthenticationService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
  logError(data: { statusCode: number, errorMessage: string, datetime: Date }) {
    this.http.post('https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/log.json', data)
      .subscribe();
  }

  fetchErrors() {
    this.http.get('https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/log.json')
      .subscribe((data) => {
        console.log(data);
      })
  }
}
