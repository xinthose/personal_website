import { AfterContentInit, AfterViewInit } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
export declare class SBItemComponent implements AfterViewInit, AfterContentInit {
    private squeezebox;
    collapsed: boolean;
    customClass: string;
    body: SBItemBodyComponent;
    constructor();
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    toggle(collapsed: boolean): void;
    applyToggle(collapsed: boolean): void;
}
