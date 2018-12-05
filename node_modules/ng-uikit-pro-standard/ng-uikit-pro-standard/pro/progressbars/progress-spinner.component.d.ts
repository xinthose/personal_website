import { ElementRef, AfterViewInit } from '@angular/core';
export declare class ProgressSpinnerComponent implements AfterViewInit {
    el: ElementRef;
    addClass: String;
    isBrowser: boolean;
    spinnerType: string;
    spinnerColor: string;
    constructor(el: ElementRef, platformId: string);
    ngAfterViewInit(): void;
    spinerRun(): void;
}
