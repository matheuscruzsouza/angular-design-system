import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  forwardRef,
  Optional,
  ContentChild,
} from "@angular/core";
import {
  FormControl,
  ControlValueAccessor,
  FormControlDirective,
  ControlContainer,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "lib-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.sass"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() labelKey = "label";
  @Input() idKey = "id";
  @Input() options = [];
  @Input() visibleOptions = 4;
  @Input() model;

  @Input() disabled: boolean;
  @Input() type: string = "text";
  @Input() placeholder: string;

  @Input() formControl: FormControl;
  @Input() formControlName: string;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @ContentChild(TemplateRef) optionTpl: TemplateRef<any>;

  _error: string;
  _isOpen: boolean;
  _visibleOptions = this.visibleOptions;

  private onChange: (_: any) => void = (_: any) => {};
  private onTouched: () => void = () => {};

  private view;
  private _value = "";
  private originalOptions: any[];
  private searchControl = new FormControl();

  @Output() closed = new EventEmitter();
  @Output() selectChange = new EventEmitter();

  constructor(
    private vcr: ViewContainerRef,
    @Optional()
    private controlContainer: ControlContainer
  ) {}

  get control() {
    return (
      this.formControl ||
      this.controlContainer.control.get(this.formControlName) ||
      null
    );
  }

  ngOnInit() {
    this.originalOptions = [...this.options];

    if (this.model !== undefined) {
      this.model = this.options.find(
        (currentOption) => currentOption[this.idKey] === this.model
      );
    }

    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((term) => this.search(term));
  }

  get label() {
    return this.model ? this.model[this.labelKey] : "Select...";
  }

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

  onFilter(event) {
    if (event.data != null) {
      this.options = this.originalOptions.filter((option) =>
        option[this.labelKey].includes(event.data)
      );

      requestAnimationFrame(
        () => (this._visibleOptions = this.options.length || 1)
      );
    }

    if (!event.data) {
      this.options = this.originalOptions;

      requestAnimationFrame(() => (this._visibleOptions = this.visibleOptions));
    }
  }

  search(value: string) {
    this.options = this.originalOptions.filter((option) =>
      option[this.labelKey].includes(value)
    );
    requestAnimationFrame(
      () => (this.visibleOptions = this.options.length || 1)
    );
  }

  select(option) {
    console.log(option);

    this.model = option;
    this.selectChange.emit(option[this.idKey]);
    this.close();
  }

  isActive(option) {
    if (!this.model) {
      return false;
    }

    return option[this.idKey] === this.model[this.idKey];
  }

  open(dropdownTpl: TemplateRef<any>, origin: HTMLElement) {
    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    const dropdown = this.view.rootNodes[0];

    console.log(this.optionTpl);

    document.body.appendChild(dropdown);
    dropdown.style.width = `${origin.offsetWidth}px`;
    dropdown.style.position = `relative`;
    dropdown.style.left = `calc(${origin.offsetLeft}px - 10px)`;

    this._isOpen = true;
  }

  close() {
    this.closed.emit();
    this.view.destroy();
    this.searchControl.patchValue("");
    this.view = null;
    this._isOpen = false;
  }
}
