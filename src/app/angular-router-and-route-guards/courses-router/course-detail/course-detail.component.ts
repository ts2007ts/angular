import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {

  private _activeRoute: ActivatedRoute = inject(ActivatedRoute);
  selectedCourse: Course;
  courseId: number;
  courseService: CourseService = inject(CourseService);

  ngOnInit(): void {
    //this.courseId = this._activeRoute.snapshot.params['id'];
    //this.courseId = +this._activeRoute.snapshot.paramMap.get('id');
    //console.log(this.courseId);
    // this.selectedCourse = this.courseService.courses
    //   .find(course => course.id === this.courseId);

    this._activeRoute.paramMap.subscribe((value) => {
      //console.log(value.get('id'));
      this.courseId = +value.get('id');

      if (this.courseId > 8)
        this.courseId = 1;
      if (this.courseId < 1)
        this.courseId = 8;

      this.selectedCourse = this.courseService.courses
        .find(course => course.id === this.courseId);

    })
  }

}
