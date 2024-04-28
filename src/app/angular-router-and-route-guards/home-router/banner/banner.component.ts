import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  searchWord: string;
  router: Router = inject(Router);

  search(value: string) {
    let search = value;
    this.router.navigate(['/Courses'], { queryParams: { search: search } });
  }

}
