import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Models/Task';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard-http-client',
  templateUrl: './dashboard-http-client.component.html',
  styleUrl: './dashboard-http-client.component.css'
})
export class DashboardHttpClientComponent implements OnInit {

  showCreateTaskForm: boolean = false;
  taskService: TaskService = inject(TaskService);
  allTasks: Task[] = [];

  ngOnInit(): void {
    this.fetchAllTasks();
  }

  openCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  closeCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  createTask(task: Task) {
    //console.log(task);
    this.taskService.createTask(task);
    this.closeCreateTaskForm();
    this.fetchAllTasks();
  }



  fetchAllTasks() {
    this.taskService.fetchAllTasks().subscribe((tasks) => { this.allTasks = tasks });
  }

  deleteTask(id: string | undefined) {
    this.deleteTask(id);
    this.fetchAllTasks();
  }

  deleteAllTasks() {
    this.taskService.deleteAllTasks();
    this.fetchAllTasks();
  }
}
