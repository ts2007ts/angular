import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-router',
  templateUrl: './courses-router.component.html',
  styleUrl: './courses-router.component.css'
})
export class CoursesRouterComponent implements OnInit {

  coursesService = inject(CourseService);
  activeRoute = inject(ActivatedRoute);
  AllCourses: Course[];

  private _activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchWord: string;

  ngOnInit(): void {
    //this.searchWord = this._activeRoute.snapshot.queryParams['search'];
    //this.searchWord = this._activeRoute.snapshot.queryParamMap.get('search');
    //console.log(this.searchWord);

    this._activeRoute.queryParamMap.subscribe((value) => {
      this.searchWord = value.get('search');

      if (this.searchWord === undefined || this.searchWord === '' || this.searchWord === null) {
        // this.coursesService.getAllCourses().subscribe((courses: Course[]) => {
        //   this.AllCourses = courses;
        // });
        this.AllCourses = this.activeRoute.snapshot.data['courses'];

      } else {
        this.AllCourses = this.coursesService.courses
          .filter(x => x.title.toLowerCase().includes(this.searchWord.toLowerCase()));
      }
    })


  }
}
