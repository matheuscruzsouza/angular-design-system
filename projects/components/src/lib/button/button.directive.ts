import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  OnInit,
  ElementRef,
  Renderer2,
} from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Directive({
  selector: "button[lib]",
  host: {
    "[style.min-width]": "'44px'",
    "[style.min-height]": "'44px'",
    "[style.padding]": "'15px 30px'",
    "[style.font]": "'15px Roboto'",
    "[style.font-weight]": "'500'",
    "[style.border]": "'1px solid'",
    "[style.display]": "'flex'",
    "[style.flex-direction]": "'row'",
    "[style.justify-content]": "'space-between'",
    "[style.align-items]": "'center'",
  },
})
export class ButtonDirective implements OnInit {
  @Input()
  color = "primary-color";

  @Input()
  text = "text-primary-color";

  @Input()
  border: string;

  @Input()
  hover: any = {
    color: "accent-color",
    text: "text-accent-color",
  };

  @HostBinding("class")
  @Input()
  class: string = "lib-component-button";

  @HostBinding("style.backgroundColor")
  buttonColor = `var(--${this.color})`;

  @HostBinding("style.color")
  buttonText = `var(--${this.text})`;

  @HostBinding("style.borderColor")
  buttonBorder = `var(--${this.border || this.color})`;

  @HostBinding("style.cursor")
  buttonDisabled = "pointer";

  @HostListener("mouseover")
  onMouseover() {
    if (!this.element.nativeElement.disabled) {
      this.setHoverStyle();
    }
  }

  @HostListener("mouseout")
  onMouseout() {
    this.setStyle();
  }

  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.element.nativeElement.style.width = "100%";
        } else {
          this.element.nativeElement.style.width = "auto";
        }
      });
  }

  ngOnInit(): void {
    this.setStyle();

    this.checkIcon();

    if (!this.element.nativeElement.style.borderRadius) {
      this.element.nativeElement.style.borderRadius = "5px";
    }
  }

  setStyle() {
    this.buttonColor = `var(--${this.color})`;
    this.buttonText = `var(--${this.text})`;
    this.buttonBorder = `var(--${this.border || this.color})`;
    this.buttonDisabled = this.element.nativeElement.disabled
      ? "not-allowed"
      : "pointer";
  }

  setHoverStyle() {
    this.buttonColor = `var(--${this.hover.color})`;
    this.buttonText = `var(--${this.hover.text})`;
    this.buttonBorder = `var(--${this.hover.border || this.hover.color})`;
  }

  checkIcon() {
    var arr = Array.from(this.element.nativeElement.children);

    arr.forEach((item: any, index: number) => {
      if (item.nodeName == "MAT-ICON") {
        const position =
          index == 0 ? "start" : index == arr.length - 1 ? "end" : "center";
        this.setIconStyle(item, position);
      }
    });
  }

  setIconStyle(icon: any, position: string) {
    const style = {
      width: "20px",
      height: "20px",
      fontSize: "20px",
    };

    switch (position) {
      case "start":
        style["marginLeft"] = "-10px";
        style["marginRight"] = "20px";
        break;

      case "end":
        style["marginLeft"] = "20px";
        style["marginRight"] = "-10px";
        break;
    }

    Object.keys(style).forEach((key) =>
      this.renderer.setStyle(icon, key, style[key])
    );
  }
}

@Directive({
  selector: "button[lib][secondary]",
})
export class ButtonSecondaryDirective extends ButtonDirective
  implements OnInit {
  @Input()
  color = "accent-color";

  @Input()
  text = "text-accent-color";

  @Input()
  border: string;

  @Input()
  hover: any = {
    color: "primary-color",
    text: "text-primary-color",
  };
}

@Directive({
  selector: "button[lib][flat]",
})
export class ButtonFlatDirective extends ButtonDirective implements OnInit {
  @Input()
  text = "text-accent-color";

  @Input()
  hover: any = {
    color: "primary-color",
    text: "text-primary-color",
  };

  setStyle() {
    this.buttonColor = `#00000005`;
    this.buttonText = `var(--${this.text})`;
    this.buttonBorder = `#00000005`;
  }
}

@Directive({
  selector: "button[lib][outline]",
})
export class ButtonOutlineDirective extends ButtonDirective implements OnInit {
  @Input()
  text = "primary-color";

  @Input()
  hover: any = {
    color: "primary-color",
    text: "text-primary-color",
  };

  setStyle() {
    this.buttonColor = `#00000005`;
    this.buttonText = `var(--${this.text})`;
    this.buttonBorder = `var(--${this.text})`;
  }
}

@Directive({
  selector: "button[lib][rounded]",
  host: {
    "[style.border-radius]": "'25px'",
  },
})
export class ButtonRoundedDirective {}

@Directive({
  selector: "button[lib][small]",
  host: {
    "[style.transform]": "'scale(0.8)'",
  },
})
export class ButtonSmallDirective {}

@Directive({
  selector: "button[lib][bigger]",
  host: {
    "[style.transform]": "'scale(1.2)'",
  },
})
export class ButtonBiggerDirective {}
