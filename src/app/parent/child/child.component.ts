import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('para')
  paragraphEl: ElementRef;

  @ContentChildren('para')
  paragraphEls: QueryList<ElementRef>;

  @ContentChild('test')
  testEl: TestComponent;

  @ContentChildren('test')
  testEls: QueryList<TestComponent>;

  // @ContentChild('TestComponent')
  // testEl : TestComponent;

  showRef() {
    console.log(this.paragraphEl.nativeElement);
    this.paragraphEls.forEach(element => {
      console.log(element.nativeElement);

    });
    console.log(this.testEl);
    this.testEls.forEach(element => {
      console.log(element);

    });
  }
}
