import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //createTask: EventEmitter<string> = new EventEmitter<string>();

  taskSubject = new Subject<string>();

  onCreateTask(value: string) {
    //this.createTask.emit(value);
    this.taskSubject.next(value);
  }
}
