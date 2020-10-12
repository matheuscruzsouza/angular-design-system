import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ButtonDirective,
  ButtonRoundedDirective,
  ButtonSecondaryDirective,
  ButtonFlatDirective,
  ButtonSmallDirective,
  ButtonBiggerDirective,
  ButtonOutlineDirective,
} from "./button.directive";

@NgModule({
  declarations: [
    ButtonDirective,
    ButtonFlatDirective,
    ButtonSecondaryDirective,
    ButtonOutlineDirective,
    ButtonSmallDirective,
    ButtonBiggerDirective,
    ButtonRoundedDirective,
  ],
  imports: [CommonModule],
  exports: [
    ButtonDirective,
    ButtonFlatDirective,
    ButtonSecondaryDirective,
    ButtonOutlineDirective,
    ButtonSmallDirective,
    ButtonBiggerDirective,
    ButtonRoundedDirective,
  ],
})
export class ButtonModule {}
