
import { Component, OnInit, inject } from '@angular/core';
import { CounterService } from '../Services/counter.service';


@Component({
  selector: 'app-dashboard-authentication',
  templateUrl: './dashboard-authentication.component.html',
  styleUrl: './dashboard-authentication.component.css'
})
export class DashboardAuthenticationComponent implements OnInit {

  counterService: CounterService = inject(CounterService);


  ngOnInit(): void {
    this.counterService.increment('Dashboard Authentication Component');
  }
}
