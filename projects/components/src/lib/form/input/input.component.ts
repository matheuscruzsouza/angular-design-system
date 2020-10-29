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

  protected _id = "input-" + (Math.random() * 1000).toFixed(0);
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
  }

  onChanges(e) {
    this.value = e.target.value;
    console.log(this.control);
  }
}
