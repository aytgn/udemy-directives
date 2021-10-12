import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[basic-highlight]'
})

export class BasicHighlight implements OnInit {
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "green"
  }

}
