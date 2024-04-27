import { Component, inject } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';

@Component({
  selector: 'app-courses-router',
  templateUrl: './courses-router.component.html',
  styleUrl: './courses-router.component.css'
})
export class CoursesRouterComponent {

  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
}
