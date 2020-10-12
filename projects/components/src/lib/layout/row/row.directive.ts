import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[lib][row]",
  host: {
    "[style.display]": "'grid'",
    "[style.grid-template-columns]": "'repeat(12, 1fr)'",
    "[style.grid-gap]": "'20px'",
  },
})
export class RowDirective {
  constructor(protected element: ElementRef, protected renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, "lib-row");
  }
}
