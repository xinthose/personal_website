import { NgZone } from '@angular/core';
import { DOMService } from './dom.service';
/**
 * @hidden
 */
export declare class ResizeService {
    private _dom;
    private _zone;
    private subscription;
    constructor(_dom: DOMService, _zone: NgZone);
    subscribe(callback: Function): void;
    unsubscribe(): void;
    isUnsubscribed(): boolean;
}
