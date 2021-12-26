import { NgModule } from "@angular/core";
import { RowDirective } from "./row/row.directive";
import { ContainerDirective } from "./container/container.directive";

import {
  ColDirective, ColOffsetDirective,
} from "./col/col.directive";

@NgModule({
  declarations: [
    RowDirective,
    ContainerDirective,

    ColDirective,
    ColOffsetDirective,
  ],
  exports: [
    RowDirective,
    ContainerDirective,

    ColDirective,
    ColOffsetDirective,
  ],
})
export class LibLayoutModule {}
