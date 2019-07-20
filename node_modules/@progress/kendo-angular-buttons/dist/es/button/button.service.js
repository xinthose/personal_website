import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
/**
 * @hidden
 */
var KendoButtonService = /** @class */ (function () {
    function KendoButtonService() {
        this.buttonLookChange = new BehaviorSubject('default');
        this.buttonClicked = new Subject();
        this.buttonClicked$ = this.buttonClicked.asObservable();
    }
    KendoButtonService.prototype.click = function (button) {
        this.buttonClicked.next(button);
    };
    KendoButtonService.prototype.setButtonLook = function (look) {
        this.buttonLookChange.next(look);
    };
    KendoButtonService.decorators = [
        { type: Injectable },
    ];
    return KendoButtonService;
}());
export { KendoButtonService };
