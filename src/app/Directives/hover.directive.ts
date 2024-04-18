import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor')
  backgroundColor: string = '#28282B';

  @HostBinding('style.color')
  color: string = 'white';

  @HostBinding('style.border')
  border: string = 'none';


  @HostListener('mouseenter')
  onMouseEnter() {
    //console.log('mouse enter event happen');
    this.backgroundColor = 'white';
    this.color = '#28282B';
    this.border = '#28282B 3px solid';

  }

  @HostListener('mouseout')
  onMouseOut() {
    //console.log('mouse out event happen');
    this.backgroundColor = '#28282B';
    this.color = 'white';
    this.border = 'none';
  }



}
