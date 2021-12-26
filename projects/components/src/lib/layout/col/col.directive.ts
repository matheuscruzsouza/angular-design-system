import {
  Directive,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
  HostListener,
} from "@angular/core";
import {
  MediaMatcher,
} from "@angular/cdk/layout";

@Directive({
  selector:
    "[lib][col-xs-0],  [lib][col-sm-0],  [lib][col-md-0],  [lib][col-lg-0],  [lib][col-xl-0],"  +
    "[lib][col-xs-1],  [lib][col-sm-1],  [lib][col-md-1],  [lib][col-lg-1],  [lib][col-xl-1],"  +
    "[lib][col-xs-2],  [lib][col-sm-2],  [lib][col-md-2],  [lib][col-lg-2],  [lib][col-xl-2],"  +
    "[lib][col-xs-3],  [lib][col-sm-3],  [lib][col-md-3],  [lib][col-lg-3],  [lib][col-xl-3],"  +
    "[lib][col-xs-4],  [lib][col-sm-4],  [lib][col-md-4],  [lib][col-lg-4],  [lib][col-xl-4],"  +
    "[lib][col-xs-5],  [lib][col-sm-5],  [lib][col-md-5],  [lib][col-lg-5],  [lib][col-xl-5],"  +
    "[lib][col-xs-6],  [lib][col-sm-6],  [lib][col-md-6],  [lib][col-lg-6],  [lib][col-xl-6],"  +
    "[lib][col-xs-7],  [lib][col-sm-7],  [lib][col-md-7],  [lib][col-lg-7],  [lib][col-xl-7],"  +
    "[lib][col-xs-8],  [lib][col-sm-8],  [lib][col-md-8],  [lib][col-lg-8],  [lib][col-xl-8],"  +
    "[lib][col-xs-9],  [lib][col-sm-9],  [lib][col-md-9],  [lib][col-lg-9],  [lib][col-xl-9],"  +
    "[lib][col-xs-10], [lib][col-sm-10], [lib][col-md-10], [lib][col-lg-10], [lib][col-xl-10]," +
    "[lib][col-xs-11], [lib][col-sm-11], [lib][col-md-11], [lib][col-lg-11], [lib][col-xl-11]," +
    "[lib][col-xs-12], [lib][col-sm-12], [lib][col-md-12], [lib][col-lg-12], [lib][col-xl-12]",
})
export class ColDirective {
  private config;
  private configs = [];

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.configs.forEach((config) => {
      if (window.matchMedia(config?.query).matches) {
        this.renderer.addClass(this.element.nativeElement, config.class);
        this.element.nativeElement.style.gridColumnStart = config.gridColumn;
        this.element.nativeElement.style.display = config.display;
      }
    });
  }

  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected mediaMatcher: MediaMatcher,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    const directives = this.element.nativeElement.getAttributeNames();

    Object.values(directives).forEach((directive: string) => {
      if (directive.includes("col-")) {
        const options = directive.split("-");
        const media = options[1];
        const size = options[2];

        this.config = {
          xs: {
            query: "(min-width: 0px)",
            class: `col-xs-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumn: `span ${size}`,
          },
          sm: {
            query: "(min-width: 600px)",
            class: `col-sm-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumn: `span ${size}`,
          },
          md: {
            query: "(min-width: 768px)",
            class: `col-md-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumn: `span ${size}`,
          },
          lg: {
            query: "(min-width: 992px)",
            class: `col-lg-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumn: `span ${size}`,
          },
          xl: {
            query: "(min-width: 1200px)",
            class: `col-xl-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumn: `span ${size}`,
          },
        };

        this.configs.push(this.config[media]);

        window.onload = () => {
          window.dispatchEvent(new Event("resize"));
        };
      }
    });
  }
}

@Directive({
  selector:
    "[lib][offset-xs-0],  [lib][offset-sm-0],  [lib][offset-md-0],  [lib][offset-lg-0],  [lib][offset-xl-0],"  +
    "[lib][offset-xs-1],  [lib][offset-sm-1],  [lib][offset-md-1],  [lib][offset-lg-1],  [lib][offset-xl-1],"  +
    "[lib][offset-xs-2],  [lib][offset-sm-2],  [lib][offset-md-2],  [lib][offset-lg-2],  [lib][offset-xl-2],"  +
    "[lib][offset-xs-3],  [lib][offset-sm-3],  [lib][offset-md-3],  [lib][offset-lg-3],  [lib][offset-xl-3],"  +
    "[lib][offset-xs-4],  [lib][offset-sm-4],  [lib][offset-md-4],  [lib][offset-lg-4],  [lib][offset-xl-4],"  +
    "[lib][offset-xs-5],  [lib][offset-sm-5],  [lib][offset-md-5],  [lib][offset-lg-5],  [lib][offset-xl-5],"  +
    "[lib][offset-xs-6],  [lib][offset-sm-6],  [lib][offset-md-6],  [lib][offset-lg-6],  [lib][offset-xl-6],"  +
    "[lib][offset-xs-7],  [lib][offset-sm-7],  [lib][offset-md-7],  [lib][offset-lg-7],  [lib][offset-xl-7],"  +
    "[lib][offset-xs-8],  [lib][offset-sm-8],  [lib][offset-md-8],  [lib][offset-lg-8],  [lib][offset-xl-8],"  +
    "[lib][offset-xs-9],  [lib][offset-sm-9],  [lib][offset-md-9],  [lib][offset-lg-9],  [lib][offset-xl-9],"  +
    "[lib][offset-xs-10], [lib][offset-sm-10], [lib][offset-md-10], [lib][offset-lg-10], [lib][offset-xl-10]," +
    "[lib][offset-xs-11], [lib][offset-sm-11], [lib][offset-md-11], [lib][offset-lg-11], [lib][offset-xl-11]," +
    "[lib][offset-xs-12], [lib][offset-sm-12], [lib][offset-md-12], [lib][offset-lg-12], [lib][offset-xl-12]",
})
export class ColOffsetDirective {
  private config;
  private configs = [];

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.configs.forEach((config) => {
      if (window.matchMedia(config?.query).matches) {
        this.renderer.addClass(this.element.nativeElement, config.class);
        console.log(config);
        
        this.element.nativeElement.style.gridColumnEnd = config.gridColumnEnd;
        this.element.nativeElement.style.display = config.display;
      }
    });
  }

  constructor(
    protected element: ElementRef,
    protected renderer: Renderer2,
    protected mediaMatcher: MediaMatcher,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    const directives = this.element.nativeElement.getAttributeNames();

    Object.values(directives).forEach((directive: string) => {
      if (directive.includes("offset-")) {
        const options = directive.split("-");
        const media = options[1];
        const size = options[2];

        this.config = {
          xs: {
            query: "(min-width: 0px)",
            class: `offset-xs-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumnEnd: `${size == "0" ? "auto" : "-1"}`,
          },
          sm: {
            query: "(min-width: 600px)",
            class: `offset-sm-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumnEnd: `${size == "0" ? "auto" : "-1"}`,
          },
          md: {
            query: "(min-width: 768px)",
            class: `offset-md-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumnEnd: `${size == "0" ? "auto" : "-1"}`,
          },
          lg: {
            query: "(min-width: 992px)",
            class: `offset-lg-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumnEnd: `${size == "0" ? "auto" : "-1"}`,
          },
          xl: {
            query: "(min-width: 1200px)",
            class: `offset-xl-${size}`,
            display: `${size == "0" ? "none" : "block"}`,
            gridColumnEnd: `${size == "0" ? "auto" : "-1"}`,
          },
        };

        this.configs.push(this.config[media]);

        window.onload = () => {
          window.dispatchEvent(new Event("resize"));
        };
      }
    });
  }
}
