
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
  encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.ShadowDom
  //we use shadow dom incase we have general style and we don't need to apply it to
  // this specific component
})
export class ViewEncapsulationComponent {

}
