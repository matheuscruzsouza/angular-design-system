import { NgModule } from "@angular/core";

import { ButtonModule } from "./button/button.module";
import { CarousselModule } from "./caroussel/caroussel.module";
import { LibLayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [],
  imports: [ButtonModule, CarousselModule, LibLayoutModule],
  exports: [],
})
export class ComponentsModule {}
