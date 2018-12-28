import { ElementRef, Renderer2 } from '@angular/core';
import { IMyInputAutoFill } from '../interfaces/inputAutofill.interface';
export declare class InputAutoFillDirective {
    private el;
    private rndr;
    opts: IMyInputAutoFill;
    constructor(el: ElementRef, rndr: Renderer2);
    onKeyUp(evt: KeyboardEvent): void;
    private endsWith;
    private insertPos;
    private getPartLength;
    private isNumber;
    private isDay;
    private isMonth;
    private getInputValue;
    private setInputValue;
}
