import { Injectable, inject } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  http: HttpClient = inject(HttpClient);

  createTask(task: Task) {
    //console.log(task);
    const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    this.http.post(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
      task,
      { headers: headers }
    ).subscribe((response) => {
      //console.log(response);
    })
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
    this.http.delete(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks/' + id + '.json'
    ).subscribe((response) => {
      //console.log(response);
    })
  }

  deleteAllTasks() {
    this.http.delete(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json'
    ).subscribe((response) => {
      //console.log(response);
    })
  }
}
