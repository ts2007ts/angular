import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-angular-router-and-route-guards',
  templateUrl: './angular-router-and-route-guards.component.html',
  styleUrl: './angular-router-and-route-guards.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngularRouterAndRouteGuardsComponent implements OnInit {

  showLoader: boolean = false;
  router: Router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.showLoader = false;
      }
    })
  }
}
