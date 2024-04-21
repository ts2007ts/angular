import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  // @Input('appSetBackground') backColor: string = 'black';
  // @Input() backColor: string = 'black';
  // @Input() textColor: string = 'white';

  @Input('appSetBackground') changeTextAndBackColor: {
    backColor: string,
    textColor: string,
  }


  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'black';
    // this.element.nativeElement.style.color = 'white';

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor);
    //this.renderer.setAttribute(this.element.nativeElement, 'title', 'Custom Directive');
    // this.renderer.addClass(this.element.nativeElement, '');
    // this.renderer.removeClass(this.element.nativeElement, '');
  }

}
