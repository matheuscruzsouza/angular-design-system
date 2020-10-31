import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WindowComponent } from "./window/window.component";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [WindowComponent],
  imports: [CommonModule, PortalModule],
  exports: [WindowComponent],
})
export class WindowModule {}
