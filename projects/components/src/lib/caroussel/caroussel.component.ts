import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Input,
} from "@angular/core";
import { SlideComponent } from "./slide/slide.component";
import {
  AnimationPlayer,
  AnimationBuilder,
  AnimationFactory,
  animate,
  style,
} from "@angular/animations";

@Component({
  selector: "caroussel[lib]",
  templateUrl: "./caroussel.component.html",
  styleUrls: ["./caroussel.component.css"],
})
export class CarousselComponent implements AfterViewInit {
  @ContentChildren(SlideComponent) items: QueryList<SlideComponent>;

  @ContentChildren(SlideComponent, { read: ElementRef })
  itemsElements: QueryList<ElementRef>;

  @ViewChild("carousel") carousel: ElementRef;

  @Input() timing = "250ms ease-in";
  @Input() showControls = true;

  player: AnimationPlayer;
  itemWidth: number;
  currentSlide = 0;

  carouselWrapperStyle: { width: string };

  private elements;

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;

    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`,
    };

    this.elements = this.itemsElements.toArray();
  }

  next() {
    let offset =
      this.currentSlide + 1 === this.items.length ? 0 : this.currentSlide + 1;

    this.setItem(this.elements[offset], offset);
  }

  prev() {
    let offset =
      this.currentSlide === 0
        ? this.elements.length - 1
        : this.currentSlide - 1;

    this.setItem(this.elements[offset], offset);
  }

  setItem(item, index) {
    this.currentSlide = index;
    const offset = item.nativeElement.offsetLeft;

    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
}
