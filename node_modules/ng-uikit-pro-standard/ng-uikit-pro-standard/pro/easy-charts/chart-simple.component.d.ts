import { OnInit } from '@angular/core';
export declare class SimpleChartComponent implements OnInit {
    customText: string;
    percent: number;
    barColor: string;
    trackColor: string;
    scaleColor: string;
    scaleLength: number;
    lineCap: string;
    lineWidth: number;
    trackWidth: number;
    size: number;
    rotate: number;
    animate: {
        duration: string;
        enabled: boolean;
    };
    options: any;
    constructor();
    ngOnInit(): void;
}
