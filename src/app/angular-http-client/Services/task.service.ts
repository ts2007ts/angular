import { Injectable, inject } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
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
    return this.http.get<{ [key: string]: Task }>(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json'
    )
      .pipe(
        map((response) => {
          let tasks = [];

          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              tasks.push({ ...response[key], id: key });
            }
          }

          return tasks;

        })
      )
  }

  deleteTask(id: string | undefined) {
    return this.http.delete(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json'
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
}
