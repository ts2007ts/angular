import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent {

  @Input() deletedUser: User;

  @Output() onConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirmDelete(value: boolean) {
    this.onConfirmation.emit(value);
  }

}
