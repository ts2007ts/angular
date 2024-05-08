import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoggingAuthenticationService } from './logging-authentication.service';
import { Subject, catchError, exhaustMap, map, take, tap, throwError } from 'rxjs';
import { Task } from '../Models/Task';
import { AuthAuthenticationService } from './auth-authentication.service';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class TaskAuthenticationService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
  loggingService: LoggingAuthenticationService = inject(LoggingAuthenticationService);
  errorSubject = new Subject<HttpErrorResponse>();
  authService: AuthAuthenticationService = inject(AuthAuthenticationService);

  CreateTask(task: Task) {

    return this.authService.user
      .pipe(
        take(1),//it will take only once and unsubscribe
        exhaustMap(//replace the previous user with the new user
          user => {
            return this.http.post<{ name: string }>(
              'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
              task,
              { params: new HttpParams().set('auth', user.token) }
            )
          }
        ),
        catchError(
          (err) => {
            //Write the logic to log errors
            const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
            this.loggingService.logError(errorObj);
            return throwError(() => err);
          }
        )
      )
  }

  DeleteTask(id: string | undefined) {


    return this.authService.user
      .pipe(
        take(1),//it will take only once and unsubscribe
        exhaustMap(//replace the previous user with the new user
          user => {
            return this.http.delete(
              'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json',
              { params: new HttpParams().set('auth', user.token) }
            )
          }
        ),
        catchError(
          (err) => {
            //Write the logic to log errors
            const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
            this.loggingService.logError(errorObj);
            return throwError(() => err);
          }
        )
      )

  }

  DeleteAllTasks() {

    return this.authService.user
      .pipe(
        take(1),//it will take only once and unsubscribe
        exhaustMap(//replace the previous user with the new user
          user => {
            return this.http.delete(
              'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
              { params: new HttpParams().set('auth', user.token) }
            )
          }
        ),
        catchError(
          (err) => {
            //Write the logic to log errors
            const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
            this.loggingService.logError(errorObj);
            return throwError(() => err);
          }
        )
      )

  }

  GetAllTasks() {

    return this.authService.user
      .pipe(
        take(1),//it will take only once and unsubscribe
        exhaustMap(//replace the previous user with the new user
          user => {
            return this.http.get<{ [key: string]: Task }>(
              'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
              { params: new HttpParams().set('auth', user.token) }
              // , { headers: headers, params: queryParams, observe: 'body' }
            )
          }
        ),
        map(
          (response) => {
            //TRANSFORM DATA
            let tasks = [];
            // console.log(response);
            for (let key in response) {
              if (response.hasOwnProperty(key)) {
                tasks.push({ ...response[key], id: key });
              }
            }

            return tasks;
          }
        ),
        catchError(
          (err) => {
            //Write the logic to log errors
            const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
            this.loggingService.logError(errorObj);
            return throwError(() => err);
          }
        )
      )

    // let headers = new HttpHeaders();
    // headers = headers.append('content-type', 'application/json');
    // headers = headers.append('content-type', 'text/html')

    // let queryParams = new HttpParams();
    // queryParams = queryParams.set('page', 2);
    // queryParams = queryParams.set('item', 10)

    // return this.http.get<{ [key: string]: Task }>(
    //   'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json'
    //   // , { headers: headers, params: queryParams, observe: 'body' }
    // ).pipe()
  }

  UpdateTask(id: string | undefined, data: Task) {

    return this.authService.user
      .pipe(
        take(1),//it will take only once and unsubscribe
        exhaustMap(//replace the previous user with the new user
          user => {
            return this.http.put(
              'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json',
              data,
              { params: new HttpParams().set('auth', user.token) }
            )
          }
        ),
        catchError(
          (err) => {
            //Write the logic to log errors
            const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
            this.loggingService.logError(errorObj);
            return throwError(() => err);
          }
        )
      )

  }

  getTaskDetails(id: string | undefined) {

    return this.authService.user
      .pipe(
        take(1),//it will take only once and unsubscribe
        exhaustMap(//replace the previous user with the new user
          user => {
            return this.http.get(
              'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json',
              { params: new HttpParams().set('auth', user.token) }
            )
          }
        ),
        map((response) => {
          // console.log(response)
          let task = {};
          task = { ...response, id: id }
          return task;
        }),
        catchError(
          (err) => {
            //Write the logic to log errors
            const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
            this.loggingService.logError(errorObj);
            return throwError(() => err);
          }
        )
      )
  }
}
