import { Component, inject } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }
}
