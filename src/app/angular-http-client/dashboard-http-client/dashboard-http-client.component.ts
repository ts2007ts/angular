import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-http-client',
  templateUrl: './dashboard-http-client.component.html',
  styleUrl: './dashboard-http-client.component.css'
})
export class DashboardHttpClientComponent {

  showCreateTaskForm: boolean = false;

  openCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  closeCreateTaskForm() {
    this.showCreateTaskForm = false;
  }
}
