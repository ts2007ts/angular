import { NgModule } from "@angular/core";
import { DashboardAuthenticationComponent } from "./dashboard-authentication.component";
import { CreateTaskAuthenticationComponent } from "./create-task-authentication/create-task-authentication.component";
import { TaskDetailsAuthenticationComponent } from "./task-details-authentication/task-details-authentication.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "../Utility/loader/loader.component";
import { SharedModule } from "../../shared.module";
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from "@angular/router";
import { StatsComponent } from './stats/stats.component';


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
    SharedModule

  ]
})

export class DashboardModule {


}
