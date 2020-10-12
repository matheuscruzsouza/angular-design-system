import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DocumentacaoComponent } from "./documentacao/documentacao.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ButtonModule } from "projects/components/src/lib/button/button.module";

import { MatIconModule } from "@angular/material/icon";
import { CarousselModule } from "projects/components/src/lib/caroussel/caroussel.module";
import { LibLayoutModule } from "projects/components/src/lib/layout/layout.module";

@NgModule({
  declarations: [AppComponent, DocumentacaoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarousselModule,
    LibLayoutModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
