import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { WindowComponent } from 'projects/components/src/lib/window/window/window.component';

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
  });

  @ViewChild(WindowComponent) janela: WindowComponent;

  valor = 0;
  secondaryWindow = false;

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
      this.secondaryWindow = !this.secondaryWindow;

      setTimeout(_ => {
        this.secondaryWindow = true;
        this.valor++;
      }, 200)
    } else {
      this.secondaryWindow = true;
      this.valor++;
    }

  }

  close() {
    this.secondaryWindow = false;
  }

  logWallace() {
    console.log("Wallace");

  }
}
