import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
  selector: "[lib][container]",
  host: {
    "[style.margin-left]": "'auto'",
    "[style.margin-right]": "'auto'",
    "[style.padding-left]": "'15px'",
    "[style.padding-right]": "'15px'",
  },
})
export class ContainerDirective implements OnInit {
  constructor(protected element: ElementRef, protected renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, "lib-container");
  }
}
