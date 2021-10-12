import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core"

@Directive({
  selector: "[better-highlight]"
})

export class BetterHighlight implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostBinding("style.backgroundColor") myBackgroundColor: string

  @HostListener("mouseover") myMouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue")
    this.myBackgroundColor = "red"
  }

  @HostListener("mouseleave") myMouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.myBackgroundColor = "transparent"
  }

}
