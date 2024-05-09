import { NgModule } from "@angular/core";
import { LoaderComponent } from "./angular-authentication/Utility/loader/loader.component";
import { FormsModule } from "@angular/forms";
import { SnackbarComponent } from "./angular-authentication/Utility/snackbar/snackbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SnackbarComponent,
    FormsModule,
    CommonModule
  ]
})

export class SharedModule {

}
