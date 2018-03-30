import { Component, ElementRef, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
declare var EasyPieChart: any;

@Component({
  selector: 'mdb-easy-pie-chart',
  template: '<div>Loading</div>'
})
export class EasyPieChartComponent implements OnInit, OnChanges {
  @Input('percent') percent: any;
  @Input('options') options: any;
  element: any;
  pieChart: any;
  isBrowser: any = false;

  constructor(el: ElementRef, @Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.element = el;
    const options = {
      barColor: '#ef1e25',
      trackColor: '#f9f9f9',
      scaleColor: '#dfe0e0',
      scaleLength: 5,
      lineCap: 'round',
      lineWidth: 3,
      size: 110,
      rotate: 0,
      animate: {
        duration: 1000,
        enabled: true
      }
    };
    this.options = Object.assign(options, this.options);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.element.nativeElement.innerHTML = '';
      this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
      this.pieChart.update(this.percent);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['percent'].isFirstChange()) {
      this.pieChart.update(this.percent);
    }
  }
}
