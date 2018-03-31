import { Injectable, EventEmitter } from '@angular/core';
/**
 * @hidden
 */
var FocusService = (function () {
    function FocusService() {
        this.onFocus = new EventEmitter();
    }
    FocusService.prototype.isFocused = function (index) {
        return index === this.focused;
    };
    FocusService.prototype.focus = function (index) {
        if (this.isFocused(index)) {
            return;
        }
        this.focused = index;
        this.onFocus.emit(index);
    };
    FocusService.prototype.resetFocus = function () {
        this.focused = -1;
    };
    Object.defineProperty(FocusService.prototype, "focused", {
        get: function () {
            return this.focusedIndex;
        },
        set: function (index) {
            this.focusedIndex = index;
            this.onFocus.emit(index);
        },
        enumerable: true,
        configurable: true
    });
    return FocusService;
}());
export { FocusService };
FocusService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FocusService.ctorParameters = function () { return []; };
