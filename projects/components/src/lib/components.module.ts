import { NgModule } from "@angular/core";

import { ButtonModule } from "./button/button.module";
import { CarousselModule } from "./caroussel/caroussel.module";
import { LibLayoutModule } from "./layout/layout.module";
import { LibFormModule } from "./form/form.module";
import { WindowModule } from "./window/window.module";

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CarousselModule,
    LibLayoutModule,
    LibFormModule,
    WindowModule,
  ],
  exports: [],
})
export class ComponentsModule {}
