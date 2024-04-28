import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouterComponent } from './angular-router-and-route-guards/home-router/home-router.component';
import { AboutRouterComponent } from './angular-router-and-route-guards/about-router/about-router.component';
import { ContactRouterComponent } from './angular-router-and-route-guards/contact-router/contact-router.component';
import { CoursesRouterComponent } from './angular-router-and-route-guards/courses-router/courses-router.component';
import { NotFoundRouterComponent } from './angular-router-and-route-guards/not-found-router/not-found-router.component';
import { CourseDetailComponent } from './angular-router-and-route-guards/courses-router/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: HomeRouterComponent },
  { path: 'Home', component: HomeRouterComponent },
  { path: 'About', component: AboutRouterComponent },
  { path: 'Contact', component: ContactRouterComponent },
  { path: 'Courses', component: CoursesRouterComponent },
  { path: 'Courses/Course/:id', component: CourseDetailComponent },
  { path: '**', component: NotFoundRouterComponent } //Must be last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
