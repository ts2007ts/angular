import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoggingAuthenticationService } from './logging-authentication.service';
import { Subject, catchError, map, tap, throwError } from 'rxjs';
import { Task } from '../Models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskAuthenticationService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
  loggingService: LoggingAuthenticationService = inject(LoggingAuthenticationService);
  errorSubject = new Subject<HttpErrorResponse>();

  CreateTask(task: Task) {
    const headers = new HttpHeaders({ 'my-header': 'hello-world' })
    this.http.post<{ name: string }>(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
      task, { headers: headers }
    )
      .pipe(catchError((err) => {
        //Write the logic to log errors
        const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
        this.loggingService.logError(errorObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      });
  }

  DeleteTask(id: string | undefined) {
    this.http.delete('https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json')
      .pipe(catchError((err) => {
        //Write the logic to log errors
        const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
        this.loggingService.logError(errorObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      });
  }

  DeleteAllTasks() {
    this.http.delete('https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json', { observe: 'events', responseType: 'json' })
      .pipe(tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {

        }
      }), catchError((err) => {
        //Write the logic to log errors
        const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
        this.loggingService.logError(errorObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      })
  }

  GetAlltasks() {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    headers = headers.append('content-type', 'text/html')

    let queryParams = new HttpParams();
    queryParams = queryParams.set('page', 2);
    queryParams = queryParams.set('item', 10)

    return this.http.get<{ [key: string]: Task }>(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json'
      , { headers: headers, params: queryParams, observe: 'body' }
    ).pipe(map((response) => {
      //TRANSFORM DATA
      let tasks = [];
      console.log(response);
      for (let key in response) {
        if (response.hasOwnProperty(key)) {
          tasks.push({ ...response[key], id: key });
        }
      }

      return tasks;
    }), catchError((err) => {
      //Write the logic to log errors
      const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
      this.loggingService.logError(errorObj);
      return throwError(() => err);
    }))
  }

  UpdateTask(id: string | undefined, data: Task) {
    this.http.put('https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json', data)
      .pipe(catchError((err) => {
        //Write the logic to log errors
        const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
        this.loggingService.logError(errorObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      });
  }

  getTaskDetails(id: string | undefined) {
    return this.http.get('https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json')
      .pipe(map((response) => {
        console.log(response)
        let task = {};
        task = { ...response, id: id }
        return task;
      }))
  }
}
