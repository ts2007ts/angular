import { Component, OnInit, inject } from '@angular/core';
import { TaskAuthenticationService } from '../../Services/task-authentication.service';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit {

  inprogress: number = 0;
  open: number = 0;
  started: number = 0;
  closed: number = 0;
  total: number = 0;
  tasks: Task[] = [];

  taskService: TaskAuthenticationService = inject(TaskAuthenticationService);

  ngOnInit() {
    this.taskService.GetAllTasks().subscribe((taskList: Task[]) => {
      this.tasks = taskList;
      this.total = taskList.length;
      this.open = taskList.filter(x => x.status === 'open').length;
      this.started = taskList.filter(x => x.status === 'started').length;
      this.inprogress = taskList.filter(x => x.status === 'in-progress').length;
      this.closed = taskList.filter(x => x.status === 'closed').length;
    });
  }
}
