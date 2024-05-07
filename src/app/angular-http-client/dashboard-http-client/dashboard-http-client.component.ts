import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Models/Task';
import { TaskService } from '../Services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from '../Services/logging.service';

@Component({
  selector: 'app-dashboard-http-client',
  templateUrl: './dashboard-http-client.component.html',
  styleUrl: './dashboard-http-client.component.css'
})
export class DashboardHttpClientComponent implements OnInit {

  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  taskService: TaskService = inject(TaskService);
  logService: LoggingService = inject(LoggingService);
  allTasks: Task[] = [];
  editMode: boolean = false;
  selectedTask: Task;
  detailsTask: Task;
  currentTaskId: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.fetchAllTasks();
    this.taskService.errorSubject.subscribe({
      next: (httpErrorResponse) => {
        this.setErrorMessage(httpErrorResponse);
      }
    })
  }

  openCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = { title: '', description: '', assignedTo: '', createdAt: '', priority: '', status: '' }
  }

  closeCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  createOrUpdateTask(task: Task) {
    //console.log(task);
    if (this.editMode) { //update
      this.isLoading = true;
      this.taskService.editTask(this.currentTaskId, task).subscribe({
        next: () => { this.isLoading = false; this.fetchAllTasks(); },
        error: (error) => {
          this.setErrorMessage(error);
          this.isLoading = false;
          setTimeout(() => {
            this.errorMessage = null;
          }, 4000)
        }
      });
      this.closeCreateTaskForm();

    } else if (!this.editMode) { //create
      this.isLoading = true;
      this.taskService.createTask(task).subscribe({
        next: () => { this.isLoading = false; this.fetchAllTasks(); },
        error: (error) => {
          this.setErrorMessage(error);
          this.isLoading = false;
          setTimeout(() => {
            this.errorMessage = null;
          }, 4000)
        }
      });
      //this.taskService.createTask_(task);
      this.closeCreateTaskForm();

    }

  }

  fetchAllTasks() {
    this.isLoading = true;
    this.taskService.fetchAllTasks().subscribe({
      next: (tasks) => {
        this.allTasks = tasks;
        this.isLoading = false;
      },
      error: (error) => {
        this.setErrorMessage(error);
        this.isLoading = false;
        setTimeout(() => {
          this.errorMessage = null;
        }, 4000)
      }
    });
  }

  deleteTask(id: string | undefined) {
    this.isLoading = true;
    this.taskService.deleteTask(id).subscribe({
      next: () => { this.isLoading = false; this.fetchAllTasks(); },
      error: (error) => {
        this.setErrorMessage(error);
        this.isLoading = false;
        setTimeout(() => {
          this.errorMessage = null;
        }, 4000)
      }
    });

  }

  deleteAllTasks() {
    this.isLoading = true;
    this.taskService.deleteAllTasks().subscribe({
      next: () => { this.isLoading = false; this.fetchAllTasks(); },
      error: (error) => {
        this.setErrorMessage(error);
        this.isLoading = false;
        setTimeout(() => {
          this.errorMessage = null;
        }, 4000)
      }
    });;

  }

  editTask(id: string | undefined) {
    this.showCreateTaskForm = true;
    this.editMode = true;
    this.selectedTask = this.allTasks.find((task) => { return task.id === id });
    this.currentTaskId = id;

    //console.log(this.selectedTask);
  }

  private setErrorMessage(err: HttpErrorResponse) {
    console.log(err.statusText);
    //this.errorMessage = err.error.error;
    this.errorMessage = err.statusText;
  }

  showCurrentTaskDetails(id: string | undefined) {
    this.showTaskDetails = true;
    this.isLoading = true;
    this.taskService.getTaskDetails(id).subscribe({
      next: (task: Task) => {
        //console.log(task);
        this.detailsTask = task;
        this.isLoading = false;
      }
    })
  }

  closeDetailView() {
    this.showTaskDetails = false;
  }
}
