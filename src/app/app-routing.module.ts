import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentacaoComponent } from "./documentacao/documentacao.component";
import { ImageEditorComponent } from "./image-editor/image-editor.component";

const routes: Routes = [
  { path: "", component: DocumentacaoComponent },
  { path: "image-editor", component: ImageEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
