import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { WindowComponent } from "projects/components/src/lib/window/window/window.component";

@Component({
  selector: "app-documentacao",
  templateUrl: "./documentacao.component.html",
  styleUrls: ["./documentacao.component.sass"],
})
export class DocumentacaoComponent implements OnInit {
  form = this.formBuilder.group({
    teste: new FormControl("", {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: "blur",
    }),
    email: new FormControl("", {
      validators: [Validators.required, Validators.email],
      updateOn: "blur",
    }),
    select: new FormControl(""),
  });

  @ViewChild(WindowComponent) janela: WindowComponent;

  valor = 3;
  secondaryWindow = false;
  options = [
    { label: "A" },
    { label: "B" },
    { label: "C" },
    { label: "D" },
    { label: "E" },
    { label: "F" },
    { label: "G" },
    { label: "H" },
    { label: "I" },
    { label: "J" },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  isDisabled() {
    alert("Sim");
  }

  submit() {
    console.log(this.form.valid);
  }

  open() {
    if (this.janela) {
      this.secondaryWindow = false;
    }

    setTimeout((_) => {
      this.valor++;
      this.secondaryWindow = true;
    }, 200);
  }

  close() {
    this.secondaryWindow = false;
  }

  logWallace() {
    console.log("Wallace");

  }
}
