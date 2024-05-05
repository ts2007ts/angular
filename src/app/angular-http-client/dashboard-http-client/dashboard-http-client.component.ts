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
  editMode: boolean = false;
  selectedTask: Task;
  currentTaskId: string = '';

  ngOnInit(): void {
    this.fetchAllTasks();
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
      console.log('You are updating');
      this.taskService.editTask(this.currentTaskId, task);
      this.closeCreateTaskForm();
      this.fetchAllTasks();
    } else if (!this.editMode) { //create
      console.log('You are creating');
      this.taskService.createTask(task);
      this.closeCreateTaskForm();
      this.fetchAllTasks();
    }

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

  editTask(id: string | undefined) {
    this.showCreateTaskForm = true;
    this.editMode = true;
    this.selectedTask = this.allTasks.find((task) => { return task.id === id });
    this.currentTaskId = id;

    //console.log(this.selectedTask);
  }
}
