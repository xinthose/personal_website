import { ElementRef, AfterContentInit, QueryList } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
export declare class SBItemBodyComponent implements AfterContentInit {
    customClass: string;
    routerLinks: QueryList<RouterLinkWithHref>;
    height: string;
    expandAnimationState: string;
    bodyEl: ElementRef;
    constructor();
    toggle(collapsed: boolean): void;
    openSidenavOnActiveLink(activeUrl: string): void;
    ngAfterContentInit(): void;
}
