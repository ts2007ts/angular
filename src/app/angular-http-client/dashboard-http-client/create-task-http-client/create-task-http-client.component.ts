import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-create-task-http-client',
  templateUrl: './create-task-http-client.component.html',
  styleUrl: './create-task-http-client.component.css'
})
export class CreateTaskHttpClientComponent {

  @Output()
  closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  emitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  @ViewChild('regForm') form: NgForm;
  formData: any = {};

  onCloseForm() {
    this.closeForm.emit(false);
  }

  onSubmit() {
    //console.log(this.form);
    this.formData = this.form.value;
    //console.log(this.formData);
    this.emitTaskData.emit(this.formData);
  }
}
