import { ElementRef, Renderer2 } from '@angular/core';
export declare class CardRevealComponent {
    private _r;
    cardReveal: ElementRef;
    cardFront: ElementRef;
    cardOverflow: ElementRef;
    socials: any;
    show: boolean;
    constructor(_r: Renderer2);
    toggle(): void;
}
