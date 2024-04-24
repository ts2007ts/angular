import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  subscribeService: SubscribeService = inject(SubscribeService);

  onSubscribe(value: string) {
    this.subscribeService.onSubscribe(value);
  }

}
