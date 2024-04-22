import { Component } from '@angular/core';

@Component({
  selector: 'app-service-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class ServiceHeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = 'admin';
  }
}
