import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Directive({
  selector: "[lib][col-xs-0]",
})
export class ColXS0Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-0");

          this.element.nativeElement.style.display = "none";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-1]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS1Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-1");

          this.element.nativeElement.style.gridColumn = "span 1";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-2]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS2Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-2");

          this.element.nativeElement.style.gridColumn = "span 2";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-3]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS3Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-3");

          this.element.nativeElement.style.gridColumn = "span 3";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-4]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS4Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-4");

          this.element.nativeElement.style.gridColumn = "span 4";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-5]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS5Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-5");

          this.element.nativeElement.style.gridColumn = "span 5";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-6]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS6Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-6");

          this.element.nativeElement.style.gridColumn = "span 6";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-7]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS7Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-7");

          this.element.nativeElement.style.gridColumn = "span 7";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-8]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS8Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-8");

          this.element.nativeElement.style.gridColumn = "span 8";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-9]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS9Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-9");

          this.element.nativeElement.style.gridColumn = "span 9";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-10]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS10Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-10");

          this.element.nativeElement.style.gridColumn = "span 10";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-11]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS11Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-11");

          this.element.nativeElement.style.gridColumn = "span 11";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xs-12]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXS12Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xs-12");

          this.element.nativeElement.style.gridColumn = "span 12";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-0]",
})
export class ColSM0Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-0");

          this.element.nativeElement.style.display = "none";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-1]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM1Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-1");

          this.element.nativeElement.style.gridColumn = "span 1";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-2]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM2Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-2");

          this.element.nativeElement.style.gridColumn = "span 2";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-3]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM3Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-3");

          this.element.nativeElement.style.gridColumn = "span 3";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-4]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM4Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-4");

          this.element.nativeElement.style.gridColumn = "span 4";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-5]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM5Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-5");

          this.element.nativeElement.style.gridColumn = "span 5";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-6]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM6Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-6");

          this.element.nativeElement.style.gridColumn = "span 6";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-7]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM7Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-7");

          this.element.nativeElement.style.gridColumn = "span 7";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-8]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM8Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-8");

          this.element.nativeElement.style.gridColumn = "span 8";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-9]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM9Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-9");

          this.element.nativeElement.style.gridColumn = "span 9";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-10]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM10Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-10");

          this.element.nativeElement.style.gridColumn = "span 10";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-11]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM11Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-11");

          this.element.nativeElement.style.gridColumn = "span 11";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-sm-12]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColSM12Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-sm-12");

          this.element.nativeElement.style.gridColumn = "span 12";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-0]",
})
export class ColMD0Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-0");

          this.element.nativeElement.style.display = "none";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-1]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD1Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-1");

          this.element.nativeElement.style.gridColumn = "span 1";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-2]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD2Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-2");

          this.element.nativeElement.style.gridColumn = "span 2";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-3]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD3Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-3");

          this.element.nativeElement.style.gridColumn = "span 3";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-4]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD4Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-4");

          this.element.nativeElement.style.gridColumn = "span 4";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-5]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD5Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-5");

          this.element.nativeElement.style.gridColumn = "span 5";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-6]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD6Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-6");

          this.element.nativeElement.style.gridColumn = "span 6";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-7]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD7Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-7");

          this.element.nativeElement.style.gridColumn = "span 7";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-8]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD8Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-8");

          this.element.nativeElement.style.gridColumn = "span 8";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-9]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD9Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-9");

          this.element.nativeElement.style.gridColumn = "span 9";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-10]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD10Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-10");

          this.element.nativeElement.style.gridColumn = "span 10";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-11]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD11Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-11");

          this.element.nativeElement.style.gridColumn = "span 11";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-md-12]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColMD12Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-md-12");

          this.element.nativeElement.style.gridColumn = "span 12";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-0]",
})
export class ColLG0Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-0");

          this.element.nativeElement.style.display = "none";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-1]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG1Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-1");

          this.element.nativeElement.style.gridColumn = "span 1";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-2]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG2Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-2");

          this.element.nativeElement.style.gridColumn = "span 2";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-3]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG3Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-3");

          this.element.nativeElement.style.gridColumn = "span 3";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-4]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG4Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-4");

          this.element.nativeElement.style.gridColumn = "span 4";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-5]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG5Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-5");

          this.element.nativeElement.style.gridColumn = "span 5";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-6]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG6Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-6");

          this.element.nativeElement.style.gridColumn = "span 6";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-7]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG7Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-7");

          this.element.nativeElement.style.gridColumn = "span 7";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-8]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG8Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-8");

          this.element.nativeElement.style.gridColumn = "span 8";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-9]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG9Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-9");

          this.element.nativeElement.style.gridColumn = "span 9";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-10]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG10Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-10");

          this.element.nativeElement.style.gridColumn = "span 10";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-11]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG11Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-11");

          this.element.nativeElement.style.gridColumn = "span 11";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-lg-12]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColLG12Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Large])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-lg-12");

          this.element.nativeElement.style.gridColumn = "span 12";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-0]",
})
export class ColXL0Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-0");

          this.element.nativeElement.style.display = "none";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-1]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL1Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-1");

          this.element.nativeElement.style.gridColumn = "span 1";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-2]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL2Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-2");

          this.element.nativeElement.style.gridColumn = "span 2";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-3]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL3Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-3");

          this.element.nativeElement.style.gridColumn = "span 3";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-4]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL4Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-4");

          this.element.nativeElement.style.gridColumn = "span 4";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-5]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL5Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-5");

          this.element.nativeElement.style.gridColumn = "span 5";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-6]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL6Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-6");

          this.element.nativeElement.style.gridColumn = "span 6";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-7]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL7Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-7");

          this.element.nativeElement.style.gridColumn = "span 7";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-8]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL8Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-8");

          this.element.nativeElement.style.gridColumn = "span 8";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-9]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL9Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-9");

          this.element.nativeElement.style.gridColumn = "span 9";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-10]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL10Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-10");

          this.element.nativeElement.style.gridColumn = "span 10";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-11]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL11Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-11");

          this.element.nativeElement.style.gridColumn = "span 11";
        }
      });
  }
}

@Directive({
  selector: "[lib][col-xl-12]",
  host: {
    "[style.display]": "'block'",
  },
})
export class ColXL12Directive {
  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.addClass(this.element.nativeElement, "lib-col-xl-12");

          this.element.nativeElement.style.gridColumn = "span 12";
        }
      });
  }
}
