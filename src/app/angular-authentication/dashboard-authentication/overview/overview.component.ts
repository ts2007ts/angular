import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TaskAuthenticationService } from '../../Services/task-authentication.service';
import { Task } from '../../Models/Task';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { CounterService } from '../../Services/counter.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit, OnDestroy {

  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  http: HttpClient = inject(HttpClient)
  allTasks: Task[] = [];
  taskService: TaskAuthenticationService = inject(TaskAuthenticationService);
  counterService: CounterService = inject(CounterService);
  currentTaskId: string = '';
  isLoading: boolean = false;

  currentTask: Task | null = null;

  errorMessage: string | null = null;

  editMode: boolean = false;
  selectedTask: Task;

  errorSub: Subscription

  ngOnInit() {

    this.counterService.increment('OverView Component');

    this.fetchAllTasks();
    this.errorSub = this.taskService.errorSubject.subscribe({
      next: (httpError) => {
        this.setErrorMessage(httpError);
      }
    })
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = { title: '', desc: '', assignedTo: '', createdAt: '', priority: '', status: '' }
  }

  showCurrentTaskDetails(id: string | undefined) {
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({
      next: (data: Task) => {
        this.currentTask = data;
      }
    });
  }

  CloseTaskDetails() {
    this.showTaskDetails = false;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(data: Task) {
    if (!this.editMode)
      this.taskService.CreateTask(data).subscribe({
        next: () => {
          this.fetchAllTasks();
        },
        error: (err) => {
          this.taskService.errorSubject.next(err);
        }
      });
    else
      this.taskService.UpdateTask(this.currentTaskId, data).subscribe({
        next: () => {
          this.fetchAllTasks();
        },
        error: (err) => {
          this.taskService.errorSubject.next(err);
        }
      });
  }

  /*{
    key1: {},
    key2: {}
  }*/

  FetchAllTaskClicked() {
    this.fetchAllTasks()
  }

  private fetchAllTasks() {
    this.isLoading = true;
    this.taskService.GetAllTasks().subscribe({
      next: (tasks) => {
        this.allTasks = tasks;
        this.isLoading = false;
      }, error: (error) => {
        // console.log(error);
        this.setErrorMessage(error);
        this.isLoading = false;
      }
    })
  }

  private setErrorMessage(err: HttpErrorResponse) {
    if (err.error.error === 'Permission denied') {
      this.errorMessage = 'You do not have permisssion to perform this action';
    }
    else {
      this.errorMessage = err.message;
    }

    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  DeleteTask(id: string | undefined) {
    this.taskService.DeleteTask(id).subscribe({
      next: () => {
        this.fetchAllTasks();
      },
      error: (err) => {
        this.taskService.errorSubject.next(err);
      }
    });
  }

  DeleteAllTask() {
    this.taskService.DeleteAllTasks().subscribe({
      next: () => {
        this.fetchAllTasks();
      },
      error: (err) => {
        this.taskService.errorSubject.next(err);
      }
    });
  }

  OnEditTaskClicked(id: string | undefined) {
    this.currentTaskId = id;

    //OPEN EDIT TASK FORM
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task) => { return task.id === id })
  }
}
