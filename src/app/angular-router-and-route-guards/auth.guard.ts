import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";

export const CanActivate = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/Login']);
    return false;
  }
}

export const CanActivateChild = () => {
  CanActivate();
}

export const CanDeactivate = () => {

}

export const resolve = () => {
  const courseService: CourseService = inject(CourseService);
  return courseService.getAllCourses();
}


