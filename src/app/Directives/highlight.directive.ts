import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    //console.log('mouse enter event happen');
    this.renderer.addClass(this.element.nativeElement, 'app-highlight');
  }

  @HostListener('mouseout')
  onMouseOut() {
    //console.log('mouse out event happen');
    this.renderer.removeClass(this.element.nativeElement, 'app-highlight');

  }

}
