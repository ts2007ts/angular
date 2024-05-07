import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../Models/Task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-task-authentication',
  templateUrl: './create-task-authentication.component.html',
  styleUrl: './create-task-authentication.component.css'
})
export class CreateTaskAuthenticationComponent {

  @Input() isEditMode: boolean = false;

  @Input() selectedTask: Task;

  @ViewChild('taskForm') taskForm: NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  ngAfterViewInit() {
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectedTask);
    }, 0);

  }

  OnCloseForm() {
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm) {
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }
}
