import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Models/Task';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-task-http-client',
  templateUrl: './create-task-http-client.component.html',
  styleUrl: './create-task-http-client.component.css'
})
export class CreateTaskHttpClientComponent implements AfterViewInit {

  @Output()
  closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  emitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  @Input()
  isEditMode: boolean = false;

  @Input()
  selectedTask: Task;

  @ViewChild('regForm') form: NgForm;
  formData: any = {};

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.form.form.patchValue(this.selectedTask);
    }, 0)
  }

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
