import { NgModule } from "@angular/core";

import { ButtonModule } from "./button/button.module";
import { CarousselModule } from "./caroussel/caroussel.module";
import { LibLayoutModule } from "./layout/layout.module";
import { LibFormModule } from "./form/form.module";

@NgModule({
  declarations: [],
  imports: [ButtonModule, CarousselModule, LibLayoutModule, LibFormModule],
  exports: [],
})
export class ComponentsModule {}
