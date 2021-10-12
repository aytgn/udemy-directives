import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})

export class unlessDirective {
  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  @Input() set appUnless(conditon: boolean) { //execute whenever property changes
    if (!conditon) {
      this.vcRef.createEmbeddedView(this.tempRef);
    }
    else {
      this.vcRef.clear()
    }
  }
}
