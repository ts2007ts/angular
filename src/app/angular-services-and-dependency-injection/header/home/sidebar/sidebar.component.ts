import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  subscribeService: SubscribeService = inject(SubscribeService);

  onSubscribe(value: string) {
    this.subscribeService.onSubscribe(value);
  }

}
