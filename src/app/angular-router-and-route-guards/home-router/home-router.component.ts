import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-router',
  templateUrl: './home-router.component.html',
  styleUrl: './home-router.component.css'
})
export class HomeRouterComponent implements AfterViewInit {

  activateRoute: ActivatedRoute = inject(ActivatedRoute);

  ngAfterViewInit(): void {
    this.activateRoute.fragment.subscribe({
      next: (data) => {
        //console.log(data);
        if (data) {
          //this.jumpToSection(data);
        }
      }
    });
  }

  jumpToSection(fragment) {
    //console.log(document.getElementById(fragment));
    document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' });
  }
}
