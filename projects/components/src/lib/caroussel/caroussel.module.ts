import { NgModule, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarousselComponent } from "./caroussel.component";
import { SlideComponent } from "./slide/slide.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [CarousselComponent, SlideComponent],
  imports: [CommonModule, ButtonModule],
  exports: [CarousselComponent, SlideComponent],
})
export class CarousselModule {}
