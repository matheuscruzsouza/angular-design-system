import {
  Component,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  AfterViewInit,
  Input,
  OnInit,
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
export class WindowComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() width: number = 600;
  @Input() height: number = 600;
  @Input() left: number = 200;
  @Input() top: number = 200;
  @Input() stylesheet: string = "";
  @Input() title: string = "New window";

  @ViewChild(CdkPortal) portal: CdkPortal;

  externalWindow = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    var _this = this;

    window.addEventListener("beforeunload", function () {
      _this.ngOnDestroy();
    });
  }

  ngAfterViewInit(): void {
    if (this.portal) {
      this.externalWindow = window.open(
        "",
        "",
        `width=${this.width},height=${this.height},left=${this.left},top=${this.top}`
      );

      const style = document.createElement("link");
      style.href = window.location.origin + this.stylesheet;
      style.rel = "stylesheet";
      style.type = "text/css";

      this.externalWindow.document.head.append(style);

      this.externalWindow.document.title = this.title;

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
    if (this.externalWindow) {
      this.externalWindow.close();
    }
  }
}
