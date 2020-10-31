import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

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
    this.secondaryWindow = true;
  }

  close() {
    this.secondaryWindow = false;
  }
}
