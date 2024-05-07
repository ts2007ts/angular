import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-task-details-authentication',
  templateUrl: './task-details-authentication.component.html',
  styleUrl: './task-details-authentication.component.css'
})
export class TaskDetailsAuthenticationComponent {

  @Output()
  CloseDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentTask: Task | null = null;;

  OnCloseTaskDetail() {
    this.CloseDetailView.emit(false);
  }
}
