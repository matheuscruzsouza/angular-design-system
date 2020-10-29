import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [InputComponent],
})
export class LibFormModule {}
