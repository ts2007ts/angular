import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-task-http-client',
  templateUrl: './create-task-http-client.component.html',
  styleUrl: './create-task-http-client.component.css'
})
export class CreateTaskHttpClientComponent {

  @Output()
  closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  OnCloseForm() {
    this.closeForm.emit(false);
  }
}
