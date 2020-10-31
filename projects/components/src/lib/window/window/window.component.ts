import {
  Component,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import { CdkPortal, DomPortalHost } from "@angular/cdk/portal";

@Component({
  selector: "window",
  template: `
    <div #teste *cdkPortal>
      <ng-content></ng-content>
    </div>
  `,
})
export class WindowComponent implements AfterViewInit, OnDestroy {
  @ViewChild("teste") portal: CdkPortal;

  private externalWindow = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngAfterViewInit(): void {
    console.log(this.portal);

    if (this.portal) {
      this.externalWindow = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );

      const host = new DomPortalHost(
        this.externalWindow.document.body,
        this.componentFactoryResolver,
        this.applicationRef,
        this.injector
      );

      host.attach(this.portal);
    }
  }

  ngOnDestroy(): void {
    if (this.portal) {
      this.externalWindow.close();
    }
  }
}
