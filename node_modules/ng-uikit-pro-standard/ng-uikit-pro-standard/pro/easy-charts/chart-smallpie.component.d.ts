import { ElementRef, OnInit, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
export declare class EasyPieChartComponent implements OnInit, OnChanges {
    private _r;
    percent: any;
    options: any;
    element: any;
    pieChart: any;
    isBrowser: any;
    constructor(el: ElementRef, platformId: string, _r: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
