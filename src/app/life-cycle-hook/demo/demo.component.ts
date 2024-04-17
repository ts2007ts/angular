import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
  ContentChild, DoCheck, ElementRef, Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  title: string = 'demo-component';
  @Input() message: string;

  @ViewChild('temp')
  tempPara: ElementRef;

  @ContentChild('temp')
  paraContent: ElementRef;

  constructor() {
    console.log('Demo Component Constructor called!');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Hook Called! ');
    // console.log(this.message);
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit Hook Called! ');
    //console.log(this.tempPara.nativeElement.innerHTML);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Hook Called! ');
    // console.log('In ngDoCheck ', this.paraContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Hook Called! ');
    // console.log('In ngAfterContentInit ', this.paraContent.nativeElement);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Hook Called! ');
    //console.log('In ngAfterContentChecked ', this.paraContent.nativeElement);
    console.log('In ngAfterContentChecked ', this.tempPara);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Hook Called! ');
    //console.log('In ngAfterViewInit ', this.tempPara);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Hook Called! ');
    console.log('In ngAfterViewChecked ', this.tempPara.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Hook Called! ');
  }

}
