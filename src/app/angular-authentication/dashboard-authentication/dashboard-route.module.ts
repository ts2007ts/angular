import { NgModule } from "@angular/core";
import { CanActivateAuthentication } from "../../angular-router-and-route-guards/auth.guard";
import { OverviewComponent } from "./overview/overview.component";
import { StatsComponent } from "./stats/stats.component";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'dashboard_', canActivate: [CanActivateAuthentication], children: [
      { path: 'overview_', component: OverviewComponent },
      { path: 'stats_', component: StatsComponent }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRouteModule {

}
