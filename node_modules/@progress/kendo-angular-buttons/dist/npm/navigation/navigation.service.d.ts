import { EventEmitter } from '@angular/core';
import { NavigationAction } from './navigation-action';
import { NavigationConfig } from './navigation-config';
/**
 * @hidden
 */
export declare class NavigationService {
    navigate: EventEmitter<number>;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    enter: EventEmitter<any>;
    enterpress: EventEmitter<any>;
    enterup: EventEmitter<any>;
    tab: EventEmitter<any>;
    esc: EventEmitter<any>;
    useLeftRightArrows: boolean;
    constructor(config: NavigationConfig);
    process(args: any): NavigationAction;
    private isEnter(keyCode);
    private next(args);
}
