import {
  Component,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  AfterViewInit,
  Input,
} from "@angular/core";
import { CdkPortal, DomPortalOutlet } from "@angular/cdk/portal";

@Component({
  selector: "window",
  template: `
    <ng-template cdkPortal>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class WindowComponent implements AfterViewInit, OnDestroy {
  @Input() width: number = 600;
  @Input() height: number = 600;
  @Input() left: number = 200;
  @Input() top: number = 200;

  @ViewChild(CdkPortal) portal: CdkPortal;

  externalWindow = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngAfterViewInit(): void {
    if (this.portal) {
      this.externalWindow = window.open(
        "",
        "",
        `width=${this.width},height=${this.height},left=${this.left},top=${this.top},location=no,close=no,titlebar=no`
      );

      const host = new DomPortalOutlet(
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
