import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set style(value: Object) {
    let entries = Object.entries(value);
    for (let item of entries) {
      //array de-structural syntax
      let [styleName, styleValue] = item;
      this.renderer.setStyle(this.element.nativeElement, styleName, styleValue);
    }
  }
}
