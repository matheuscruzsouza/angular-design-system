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
  OnChanges,
  ViewContainerRef,
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
export class WindowComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() width: number = 600;
  @Input() height: number = 600;
  @Input() left: number = 200;
  @Input() top: number = 200;
  @Input() stylesheet: string = "";
  @Input() title: string = "New window";
  @Input() data: any;

  @ViewChild(CdkPortal) portal: CdkPortal;

  externalWindow = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
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

      this.ngOnChanges();
    }
  }

  ngOnChanges(): void {
    if (this.portal) {
      const _injector: any = this.viewContainerRef.parentInjector;
      const _document = _injector._lView[0].ownerDocument;

      console.log(_document);

      _document.querySelectorAll("link, style").forEach((htmlElement) => {
        let add = true;
        Array.from(this.externalWindow.document.head.children).forEach(
          (node: Element) => {
            if (node.textContent == htmlElement.textContent) {
              add = false;
            }
          }
        );
        if (add) {
          this.externalWindow.document.head.appendChild(
            htmlElement.cloneNode(true)
          );
        }
      });

      setTimeout((_) => {
        _document.querySelectorAll("script").forEach((htmlElement) => {
          let add = true;
          Array.from(this.externalWindow.document.body.children).forEach(
            (node: HTMLScriptElement) => {
              if (node.src == htmlElement.src) {
                add = false;
              }
            }
          );
          if (add) {
            this.externalWindow.document.body.appendChild(
              htmlElement.cloneNode(true)
            );
          }
        });
      }, 200);
    }
  }

  ngOnDestroy(): void {
    if (this.externalWindow) {
      this.externalWindow.close();
    }
  }
}
