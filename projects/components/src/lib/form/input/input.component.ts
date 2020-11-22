import { Component, Input, forwardRef, ViewChild } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControlDirective,
  FormControl,
  ControlContainer,
} from "@angular/forms";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "lib-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.sass"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  animations: [
    trigger("visibilityChanged", [
      state("true", style({ height: "*", display: "none" })),
      state("false", style({ height: "fit-content", display: "block" })),
      transition("*=>*", animate("200ms")),
    ]),
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() type: string = "text";
  @Input() placeholder: string;
  @Input() label: string;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  _id = "input-" + (Math.random() * 1000).toFixed(0);
  _error: string;
  protected _value = "";

  protected onChange: (_: any) => void = (_: any) => {};
  protected onTouched: () => void = () => {};

  get control() {
    return (
      this.formControl ||
      this.controlContainer.control.get(this.formControlName) ||
      null
    );
  }

  constructor(private controlContainer: ControlContainer) {}

  public get value() {
    return this._value;
  }

  public set value(v) {
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
  }

  clearValue() {
    this.value = "";
    this.updateChanges();
  }

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onBlur() {
    this.onChange(this._value);
    this.onTouched();
    this.onError();
  }

  onChanges(e) {
    this.value = e.target.value;
    this.onError();
  }

  onError() {
    let errors = this.control.errors;

    if (errors) {
      errors = Object.entries(errors).map((error) => {
        switch (error[0]) {
          case "required":
            return `${this.label || "Este campo"} é obrigatório!`;
          case "pattern":
            return `${
              this.label || "Este campo"
            } está com um padrão incorreto!`;
          case "email":
            return `${
              this.label || "Este campo"
            } está com um endereço de email invalido!`;
          case "minlength":
            return `${
              this.label || "Este campo"
            } está com o tamanho errado! Tamanho requerido: ${
              error[1].requiredLength
            }`;
          case "areEqual":
            return `${this.label || "Este campo"} deve ser igual!`;
          default:
            return `${this.label || "Este campo"}: ${error[0]}: ${error[1]}`;
        }
      });

      this._error = errors.join("\n");
    }
  }
}
