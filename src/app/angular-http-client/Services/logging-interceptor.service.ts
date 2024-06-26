import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class LoggingInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Logging Interceptor called');
    console.log('Request Send To URL : ' + req.url);
    return next.handle(req);
  }
}
