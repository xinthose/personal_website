"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
/**
 * @hidden
 */
var KendoButtonService = (function () {
    function KendoButtonService() {
        this.buttonClicked = new Subject_1.Subject();
        this.buttonClicked$ = this.buttonClicked.asObservable();
    }
    KendoButtonService.prototype.click = function (button) {
        this.buttonClicked.next(button);
    };
    return KendoButtonService;
}());
KendoButtonService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
KendoButtonService.ctorParameters = function () { return []; };
exports.KendoButtonService = KendoButtonService;
