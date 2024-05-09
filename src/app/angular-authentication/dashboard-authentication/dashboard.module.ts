import { NgModule } from "@angular/core";
import { DashboardAuthenticationComponent } from "./dashboard-authentication.component";
import { CreateTaskAuthenticationComponent } from "./create-task-authentication/create-task-authentication.component";
import { TaskDetailsAuthenticationComponent } from "./task-details-authentication/task-details-authentication.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "../Utility/loader/loader.component";
import { SharedModule } from "../../shared.module";
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes } from "@angular/router";
import { StatsComponent } from './stats/stats.component';
import { CanActivateAuthentication } from "../../angular-router-and-route-guards/auth.guard";
import { DashboardRouteModule } from "./dashboard-route.module";

// const routes: Routes = [
//   {
//     path: 'dashboard_', canActivate: [CanActivateAuthentication], children: [
//       { path: 'overview_', component: OverviewComponent },
//       { path: 'stats_', component: StatsComponent }
//     ]
//   },
// ]

@NgModule({
  declarations: [
    DashboardAuthenticationComponent,
    CreateTaskAuthenticationComponent,
    TaskDetailsAuthenticationComponent,
    OverviewComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ],
  exports: [
    DashboardAuthenticationComponent,
    CreateTaskAuthenticationComponent,
    TaskDetailsAuthenticationComponent,
    SharedModule,
    DashboardRouteModule

  ]
})

export class DashboardModule {


}
