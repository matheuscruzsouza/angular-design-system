import {
  Component,
  OnInit,
  HostBinding,
  Input,
} from "@angular/core";
import { SafeStyle, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "slide[lib]",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.css"],
})
export class SlideComponent implements OnInit {
  @Input()
  background: string;

  @Input()
  attachment: string;

  @Input()
  width: string = "100";

  @Input()
  height: string = "100";

  @HostBinding("style.background-image")
  bgImage: SafeStyle;

  @HostBinding("style.background-attachment")
  bgAttachment: SafeStyle;

  @HostBinding("style.height")
  slideHeight: string = this.height;

  @HostBinding("style.width")
  slideWidth: string = this.width;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.background) {
      this.bgImage = this.sanitizer.bypassSecurityTrustStyle(
        `url(${this.background})`
      );
    }

    this.bgAttachment = this.sanitizer.bypassSecurityTrustStyle(
      `${this.attachment || "scroll"}`
    );

    this.slideHeight = this.height;
  }
}
