import { EventEmitter } from '@angular/core';
/**
 * @hidden
 */
export declare class FocusService {
    onFocus: EventEmitter<number>;
    focusedIndex: number;
    isFocused(index: number): boolean;
    focus(index: number): void;
    resetFocus(): void;
    focused: number;
}
