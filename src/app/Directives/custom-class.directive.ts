import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomClass]'
})
export class CustomClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appCustomClass(value: Object) {
    let entries = Object.entries(value);
    for (let item of entries) {
      //array de-structural syntax
      let [className, condition] = item;
      if (condition === true) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }

}
