import { Component, inject } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-service-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  //providers: [SubscribeService]
})
export class ServiceHeaderComponent {
  selectedTab: string = 'home';

  //constructor(private subscribeService: SubscribeService) {}

  subscribeService: SubscribeService = inject(SubscribeService);

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = 'admin';
  }

  onSubscribe(value: string) {
    this.subscribeService.onSubscribe(value);
  }
}
