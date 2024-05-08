import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';


export class AuthInterceptorAuthenticationService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log('Auth Interceptor called!');
    const modifiedReq = req.clone();
    return next.handle(modifiedReq).pipe(tap((event) => {
      if (event.type === HttpEventType.Response) {
        // console.log('Response has arrived. Response data: ');
        // console.log(event.body)
      }
    }));
  }
}
