import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorAuthenticationService } from "./angular-authentication/Services/auth-interceptor-authentication.service";
import { LoggingInterceptorAuthenticationService } from "./angular-authentication/Services/logging-interceptor-authentication.service";


@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorAuthenticationService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorAuthenticationService, multi: true }
  ]
})

export class CoreModule {

}
