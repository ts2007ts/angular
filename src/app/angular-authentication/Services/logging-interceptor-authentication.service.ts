import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class LoggingInterceptorAuthenticationService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Logging Interceptor called!');
    console.log('Request sent to URL: ' + req.url);
    return next.handle(req);
  }
}
