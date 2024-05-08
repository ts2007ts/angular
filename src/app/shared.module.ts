import { NgModule } from "@angular/core";
import { LoaderComponent } from "./angular-authentication/Utility/loader/loader.component";
import { FormsModule } from "@angular/forms";
import { SnackbarComponent } from "./angular-authentication/Utility/snackbar/snackbar.component";

@NgModule({
  declarations: [
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    LoaderComponent,
    SnackbarComponent,
    FormsModule
  ]
})

export class SharedModule {

}
