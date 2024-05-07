import { Task } from './../Models/Task';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, catchError, map, throwError } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
  logService: LoggingService = inject(LoggingService);
  errorSubject = new Subject<HttpErrorResponse>();

  createTask_(task: Task) {
    //console.log(task);
    const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    return this.http.post(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
      task,
      { headers: headers }
    ).subscribe({
      error: (error) => {
        this.errorSubject.next(error);
      }
    })
  }

  createTask(task: Task) {
    //console.log(task);
    const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    return this.http.post(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
      task,
      { headers: headers }
    )
  }

  fetchAllTasks() {
    let headers = new HttpHeaders();
    // headers = headers.set('content-type', 'application/json');
    // headers = headers.set('content-type', 'text/html');

    //set is clearing and following the last value // while append is going to append it

    headers = headers.append('content-type', 'application/json');
    headers = headers.append('content-type', 'text/html');
    headers = headers.append('Access-Control-Allow-Origin', '*');

    let httpParams = new HttpParams();

    httpParams = httpParams.set('page', 2);
    httpParams = httpParams.set('item', 10);

    // httpParams = httpParams.append('page', 2);
    // httpParams = httpParams.append('item', 10);



    return this.http.get<{ [key: string]: Task }>(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
      {
        headers: headers,
        params: httpParams,
        //observe: 'body'
        //observe: 'response'
        //observe: 'events'
      }
    )
      .pipe(
        map((response) => {
          let tasks = [];

          //console.log(response);

          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              tasks.push({ ...response[key], id: key });
            }
          }

          return tasks;

        }),
        catchError((err) => {
          const errorObj = { statusCode: err.status, errorMessage: err.message, dateTime: new Date() };
          this.logService.logError(errorObj);
          return throwError(() => err)
        })
      )
  }

  deleteTask(id: string | undefined) {
    return this.http.delete(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json',
      {
        //observe: 'body'
        //observe: 'response'
        //observe: 'events'
        responseType: 'arraybuffer'
      }
    )
  }

  deleteAllTasks() {
    return this.http.delete(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json'
    )
  }

  editTask(id: string | undefined, task: Task) {
    return this.http.put(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json',
      task
    )
  }

  getTaskDetails(id: string | undefined) {
    return this.http.get(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json',
    ).pipe(
      map((response) => {
        let task = {};

        task = { ...response, id: id };

        return task;
      })
    )
  }
}
