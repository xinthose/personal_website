import { Directive, ElementRef,  AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[mdbDpFocus]'
})

export class FocusDirective implements AfterViewInit {
  @Input() value: string;

  constructor(private el: ElementRef) {}

  // Focus to element: if value 0 = don't set focus, 1 = set only focus, 2 = set focus and set cursor position
  ngAfterViewInit() {
    // if (this.value === "0") {
      //     return;
      // }

    // this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    this.el.nativeElement.focus();

      // // Set cursor position at the end of text if input element
      // if (this.value === "2") {
        //     let len = this.el.nativeElement.value.length;
        //     this.el.nativeElement.setSelectionRange(len, len);
        // }
  }
}
