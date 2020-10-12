import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-documentacao",
  templateUrl: "./documentacao.component.html",
  styleUrls: ["./documentacao.component.sass"],
})
export class DocumentacaoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isDisabled() {
    alert("Sim");
  }
}
