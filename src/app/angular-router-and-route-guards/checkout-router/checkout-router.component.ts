import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout-router',
  templateUrl: './checkout-router.component.html',
  styleUrl: './checkout-router.component.css'
})
export class CheckoutRouterComponent implements OnInit {

  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  course: any;

  ngOnInit(): void {
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data;
    // })

    //this.course = this.router.getCurrentNavigation().extras.state;
    this.course = history.state;
  }
}
