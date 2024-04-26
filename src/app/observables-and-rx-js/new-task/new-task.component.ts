import { TaskService } from './../Services/task.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask: string = '';

  taskService: TaskService = inject(TaskService);


  onCreateTask() {
    this.taskService.onCreateTask(this.newTask);
  }
}
