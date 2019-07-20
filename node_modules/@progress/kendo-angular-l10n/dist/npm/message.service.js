"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
/* tslint:disable:max-line-length */
/**
 * A base class for a service that returns localized messages.
 *
 * For more information, refer to the section on [using the message service]({% slug messages_l10n %}#toc-using-the-message-service).
 */
var MessageService = /** @class */ (function () {
    function MessageService() {
        /**
         * @hidden
         */
        this.changes = new rxjs_1.Subject();
    }
    /**
     * Notifies the components that the messages were changed.
     *
     * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
     */
    MessageService.prototype.notify = function (rtl) {
        this.changes.next({ rtl: rtl });
    };
    /**
     * Returns a localized message for the supplied key.
     *
     * @param key - The message key. For example, `"kendo.grid.noRecords"`.
     * @return - The localized message for this key or `undefined` if not found.
     */
    MessageService.prototype.get = function (key) {
        return undefined;
    };
    MessageService.decorators = [
        { type: core_1.Injectable },
    ];
    return MessageService;
}());
exports.MessageService = MessageService;
