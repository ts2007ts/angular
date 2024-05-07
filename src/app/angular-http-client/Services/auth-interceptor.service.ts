import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(req.url !== '') {

    // }
    console.log('Auth Interceptor called');
    const modifiedReq = req.clone({ headers: req.headers.append('auth', 'yes') });
    return next.handle(modifiedReq).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Response has arrived !');
          console.log('Response Data');
          console.log(event.body);
        }
      })
    );
  }
}
