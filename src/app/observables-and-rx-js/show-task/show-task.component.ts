import { TaskService } from './../Services/task.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  taskService: TaskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.taskSubject.subscribe((task) => {
      this.tasks.push(task);
    })
  }
}
