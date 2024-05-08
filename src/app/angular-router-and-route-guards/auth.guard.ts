import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CourseService } from "./Services/course.service";
import { AuthAuthenticationService } from "../angular-authentication/Services/auth-authentication.service";
import { Observable, map, take } from 'rxjs';

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


export const CanActivateAuthentication = (router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> | UrlTree => {
  const authAuthenticationService: AuthAuthenticationService = inject(AuthAuthenticationService);
  const route: Router = inject(Router);
  return authAuthenticationService.user
    .pipe(
      take(1),
      map(
        (user) => {
          const loggedIn = user ? true : false;

          if (loggedIn) {
            return true;
          } else {
            return route.createUrlTree(['/login_']);
          }
        }
      )
    );
}


