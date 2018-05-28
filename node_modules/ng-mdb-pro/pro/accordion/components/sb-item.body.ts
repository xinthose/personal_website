import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  exportAs: 'sbItemBody',
  selector: 'mdb-item-body',
  templateUrl: 'sb-item.body.html'
})
export class SBItemBodyComponent {

  public height = '0';

  @ViewChild('body') bodyEl: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggle(collapsed: boolean) {
    let height = '0';
    if (!collapsed) {
      this.renderer.setStyle(this.bodyEl.nativeElement, 'height', 'auto');
      height = this.bodyEl.nativeElement.offsetHeight + 'px';
      this.renderer.setStyle(this.bodyEl.nativeElement, 'height', '0');
    }
    setTimeout(() => this.renderer.setStyle(this.bodyEl.nativeElement, 'height', height), 50);
  }
}
