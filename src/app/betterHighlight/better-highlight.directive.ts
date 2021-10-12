import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from "@angular/core"

@Directive({
  selector: "[better-highlight]"
})

export class BetterHighlight implements OnInit {
  @Input() defaultColor: string = "transparent"
  @Input("better-highlight") highlightColor: string = "blue"

  @HostBinding("style.backgroundColor") myBackgroundColor: string ="transparent"
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener("mouseover") myMouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue")
    this.myBackgroundColor = this.highlightColor
  }

  @HostListener("mouseleave") myMouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.myBackgroundColor = this.defaultColor
  }

}
