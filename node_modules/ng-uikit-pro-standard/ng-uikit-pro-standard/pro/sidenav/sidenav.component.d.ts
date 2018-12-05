import { ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
export declare class SidenavComponent implements AfterViewInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    windwosWidth: number;
    shown: boolean;
    isBrowser: any;
    class: string;
    fixed: boolean;
    sidenavBreakpoint: any;
    sideNav: ElementRef;
    overlay: any;
    constructor(platformId: string, el: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    windwosResize(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    showOverlay(): void;
    hideOverlay(): void;
    setShown(value: boolean): void;
    ngOnDestroy(): void;
}
