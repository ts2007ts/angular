import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css'
})
export class ViewChildrenComponent {

  fullName: string = '';
  @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef>;

  show() {
    let name = ''
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value + ' '
    })
    this.fullName = name.trim();
  }
}
