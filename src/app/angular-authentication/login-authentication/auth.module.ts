import { NgModule } from "@angular/core";
import { LoginAuthenticationComponent } from "./login-authentication.component";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [
    LoginAuthenticationComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LoginAuthenticationComponent
  ]
})

export class AuthModule {

}
