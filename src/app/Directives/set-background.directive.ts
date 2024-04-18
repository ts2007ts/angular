import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'black';
    // this.element.nativeElement.style.color = 'white';

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'black');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    //this.renderer.setAttribute(this.element.nativeElement, 'title', 'Custom Directive');
    // this.renderer.addClass(this.element.nativeElement, '');
    // this.renderer.removeClass(this.element.nativeElement, '');
  }

}
