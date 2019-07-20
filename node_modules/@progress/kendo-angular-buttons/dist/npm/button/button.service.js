"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
/**
 * @hidden
 */
var KendoButtonService = /** @class */ (function () {
    function KendoButtonService() {
        this.buttonLookChange = new rxjs_1.BehaviorSubject('default');
        this.buttonClicked = new rxjs_1.Subject();
        this.buttonClicked$ = this.buttonClicked.asObservable();
    }
    KendoButtonService.prototype.click = function (button) {
        this.buttonClicked.next(button);
    };
    KendoButtonService.prototype.setButtonLook = function (look) {
        this.buttonLookChange.next(look);
    };
    KendoButtonService.decorators = [
        { type: core_1.Injectable },
    ];
    return KendoButtonService;
}());
exports.KendoButtonService = KendoButtonService;
