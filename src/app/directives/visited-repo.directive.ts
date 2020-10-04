import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVisitedRepo]'
})
export class VisitedRepoDirective {

    constructor(private elem:ElementRef) {}

    @HostListener("click") onClicks(){
      this.text("rgb(247, 84, 111")
    }
  
    private text(action:string){ 
      this.elem.nativeElement.style.color=action;
    }

}
