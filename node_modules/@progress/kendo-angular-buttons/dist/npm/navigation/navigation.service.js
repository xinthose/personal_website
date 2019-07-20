"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var util_1 = require("./../util");
var key_events_1 = require("./key-events");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var navigation_action_1 = require("./navigation-action");
var navigation_config_1 = require("./navigation-config");
/**
 * @hidden
 */
var NavigationService = /** @class */ (function () {
    function NavigationService(config) {
        this.navigate = new core_1.EventEmitter();
        this.open = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.enter = new core_1.EventEmitter();
        this.enterpress = new core_1.EventEmitter();
        this.enterup = new core_1.EventEmitter();
        this.tab = new core_1.EventEmitter();
        this.esc = new core_1.EventEmitter();
        this.useLeftRightArrows = config.useLeftRightArrows;
    }
    NavigationService.prototype.process = function (args) {
        var keyCode = args.keyCode;
        var keyEvent = args.keyEvent;
        var index;
        var action = navigation_action_1.NavigationAction.Undefined;
        if (keyEvent === key_events_1.KeyEvents.keypress) {
            if (this.isEnter(keyCode)) {
                action = navigation_action_1.NavigationAction.EnterPress;
            }
        }
        else if (keyEvent === key_events_1.KeyEvents.keyup) {
            if (this.isEnter(keyCode)) {
                action = navigation_action_1.NavigationAction.EnterUp;
            }
        }
        else {
            if (args.altKey && keyCode === kendo_angular_common_1.Keys.ArrowDown) {
                action = navigation_action_1.NavigationAction.Open;
            }
            else if (args.altKey && keyCode === kendo_angular_common_1.Keys.ArrowUp) {
                action = navigation_action_1.NavigationAction.Close;
            }
            else if (this.isEnter(keyCode)) {
                action = navigation_action_1.NavigationAction.Enter;
            }
            else if (keyCode === kendo_angular_common_1.Keys.Escape) {
                action = navigation_action_1.NavigationAction.Esc;
            }
            else if (keyCode === kendo_angular_common_1.Keys.Tab) {
                action = navigation_action_1.NavigationAction.Tab;
            }
            else if (keyCode === kendo_angular_common_1.Keys.ArrowUp || (this.useLeftRightArrows && keyCode === kendo_angular_common_1.Keys.ArrowLeft)) {
                index = this.next({
                    current: args.current,
                    start: args.max,
                    end: args.min,
                    step: -1
                });
                action = navigation_action_1.NavigationAction.Navigate;
            }
            else if (keyCode === kendo_angular_common_1.Keys.ArrowDown || (this.useLeftRightArrows && keyCode === kendo_angular_common_1.Keys.ArrowRight)) {
                index = this.next({
                    current: args.current,
                    start: args.min,
                    end: args.max,
                    step: 1
                });
                action = navigation_action_1.NavigationAction.Navigate;
            }
        }
        if (action !== navigation_action_1.NavigationAction.Undefined) {
            this[navigation_action_1.NavigationAction[action].toLowerCase()].emit(index);
        }
        return action;
    };
    NavigationService.prototype.isEnter = function (keyCode) {
        return keyCode === kendo_angular_common_1.Keys.Enter || keyCode === kendo_angular_common_1.Keys.Space;
    };
    NavigationService.prototype.next = function (args) {
        if (!util_1.isPresent(args.current)) {
            return args.start;
        }
        else {
            return args.current !== args.end ? args.current + args.step : args.end;
        }
    };
    NavigationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [navigation_config_1.NAVIGATION_CONFIG,] }] }
    ]; };
    return NavigationService;
}());
exports.NavigationService = NavigationService;
