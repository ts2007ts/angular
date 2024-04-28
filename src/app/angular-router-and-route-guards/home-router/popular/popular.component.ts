import { Component, inject } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
  courseService = inject(CourseService);
  private _router: Router = inject(Router);
  popularCourses: Course[] = [];
  private _activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses() {
    //this._router.navigate(['Courses'], { relativeTo: this._activeRoute });
    this._router.navigateByUrl('Courses');
  }
}
