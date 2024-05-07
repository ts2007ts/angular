import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-task-details-http-client',
  templateUrl: './task-details-http-client.component.html',
  styleUrl: './task-details-http-client.component.css'
})
export class TaskDetailsHttpClientComponent {

  @Output()
  closeDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  detailsTask: Task;

  onCloseTaskDetail() {
    this.closeDetailView.emit(false);
  }

}
