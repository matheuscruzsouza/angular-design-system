import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentacaoComponent } from "./documentacao/documentacao.component";

const routes: Routes = [{ path: "", component: DocumentacaoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
