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
import { LibFormModule } from "projects/components/src/lib/form/form.module";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { WindowModule } from "projects/components/src/lib/window/window.module";

import { NgxTextEditorModule } from "@matheuscruzsouza/ngx-text-editor";

@NgModule({
  declarations: [AppComponent, DocumentacaoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarousselModule,
    LibLayoutModule,
    LibFormModule,
    MatIconModule,
    ReactiveFormsModule,
    WindowModule,
    NgxTextEditorModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
