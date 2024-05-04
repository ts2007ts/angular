import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard-http-client',
  templateUrl: './dashboard-http-client.component.html',
  styleUrl: './dashboard-http-client.component.css'
})
export class DashboardHttpClientComponent implements OnInit {

  showCreateTaskForm: boolean = false;

  http: HttpClient = inject(HttpClient);

  allTasks: Task[] = [];

  ngOnInit(): void {
    this.fetchAllTask();
  }

  openCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  closeCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  createTask(task: Task) {
    //console.log(task);
    const headers = new HttpHeaders({ 'my-header': 'hello-world' });
    this.http.post(
      'https://angularhttpclient-8c62e-default-rtdb.firebaseio.com/tasks.json',
      task,
      { headers: headers }
    ).subscribe((response) => {
      //console.log(response);
      this.closeCreateTaskForm();
      this.fetchAllTask();
    })
  }

  private fetchAllTask() {
    this.http.get<{ [key: string]: Task }>(
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
      .subscribe((tasks) => {
        //console.log(tasks);
        this.allTasks = tasks;
        // this.allTasks.forEach(task => {
        //   console.log(task);
        // });
      })
  }

  fetchAllTasks_() {
    this.fetchAllTask();
  }
}
