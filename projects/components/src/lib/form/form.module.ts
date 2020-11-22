import { NgModule, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SelectComponent } from "./select/select.component";
import { MatIconModule } from "@angular/material/icon";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [InputComponent, SelectComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    ScrollingModule,
  ],
  exports: [InputComponent, SelectComponent],
})
export class LibFormModule {}
