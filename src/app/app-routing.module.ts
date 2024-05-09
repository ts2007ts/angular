import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouterComponent } from './angular-router-and-route-guards/home-router/home-router.component';
import { AboutRouterComponent } from './angular-router-and-route-guards/about-router/about-router.component';
import { ContactRouterComponent } from './angular-router-and-route-guards/contact-router/contact-router.component';
import { CoursesRouterComponent } from './angular-router-and-route-guards/courses-router/courses-router.component';
import { NotFoundRouterComponent } from './angular-router-and-route-guards/not-found-router/not-found-router.component';
import { CourseDetailComponent } from './angular-router-and-route-guards/courses-router/course-detail/course-detail.component';
import { PopularComponent } from './angular-router-and-route-guards/home-router/popular/popular.component';
import { LoginRouterComponent } from './angular-router-and-route-guards/login-router/login-router.component';
import { CheckoutRouterComponent } from './angular-router-and-route-guards/checkout-router/checkout-router.component';
import { CanActivate, CanActivateChild, CanDeactivate, resolve, CanActivateAuthentication } from './angular-router-and-route-guards/auth.guard';
import { HomeAuthenticationComponent } from './angular-authentication/home-authentication/home-authentication.component';
import { LoginAuthenticationComponent } from './angular-authentication/login-authentication/login-authentication.component';
import { DashboardAuthenticationComponent } from './angular-authentication/dashboard-authentication/dashboard-authentication.component';
import { OverviewComponent } from './angular-authentication/dashboard-authentication/overview/overview.component';
import { StatsComponent } from './angular-authentication/dashboard-authentication/stats/stats.component';

const routes: Routes = [
  // { path: '', component: HomeRouterComponent },
  { path: 'Home', component: HomeRouterComponent },
  { path: 'About', component: AboutRouterComponent },
  { path: 'Contact', component: ContactRouterComponent, canDeactivate: [(comp: ContactRouterComponent) => { return comp.canExit() }] },
  { path: 'Courses', component: CoursesRouterComponent, resolve: { courses: resolve } },
  {
    path: 'Courses', canActivateChild: [CanActivateChild], children: [
      { path: 'Course/:id', component: CourseDetailComponent },
      { path: 'Popular', component: PopularComponent },
      { path: 'Checkout', component: CheckoutRouterComponent, canActivate: [CanActivate] }
    ]
  },
  { path: 'Login', component: LoginRouterComponent },
  //{ path: 'Courses/Course/:id', component: CourseDetailComponent },

  // routing for authentication component
  { path: 'home_', component: HomeAuthenticationComponent },
  { path: 'login_', component: LoginAuthenticationComponent },
  {
    path: 'dashboard_', canActivate: [CanActivateAuthentication], children: [
      { path: 'overview_', component: OverviewComponent },
      { path: 'stats_', component: StatsComponent }
    ]
  },
  // routing for authentication component


  { path: '**', component: NotFoundRouterComponent } //Must be last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
