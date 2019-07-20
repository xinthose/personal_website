"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var list_button_1 = require("./../listbutton/list-button");
var button_item_template_directive_1 = require("./../listbutton/button-item-template.directive");
var focus_service_1 = require("./../focusable/focus.service");
var navigation_service_1 = require("./../navigation/navigation.service");
var navigation_config_1 = require("./../navigation/navigation-config");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var util_1 = require("./../util");
var preventable_event_1 = require("../preventable-event");
var NAVIGATION_SETTINGS = {
    useLeftRightArrows: true
};
var ɵ0 = NAVIGATION_SETTINGS;
exports.ɵ0 = ɵ0;
var NAVIGATION_SETTINGS_PROVIDER = {
    provide: navigation_config_1.NAVIGATION_CONFIG,
    useValue: ɵ0
};
/**
 * Represents the Kendo UI SplitButton component for Angular.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="data" [icon]="'paste'"
 *      (itemClick)="onSplitButtonItemClick($event)"
 *      (buttonClick)="onSplitButtonClick()">Paste</kendo-splitbutton>
 * `
 * })
 *
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'Keep Text Only',
 *       icon: 'paste-plain-text',
 *       click: () => { console.log('Keep Text Only click handler'); }
 *   }, {
 *       text: 'Paste as HTML',
 *       icon: 'paste-as-html'
 *   }, {
 *       text: 'Paste Markdown',
 *       icon: 'paste-markdown'
 *   }, {
 *       text: 'Set Default Paste'
 *   }];
 *
 *   public onSplitButtonClick(dataItem: any): void {
 *       console.log('Paste');
 *   }
 *
 *   public onSplitButtonItemClick(dataItem: any): void {
 *       if (dataItem) {
 *           console.log(dataItem.text);
 *       }
 *   }
 * }
 * ```
 */
var SplitButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SplitButtonComponent, _super);
    function SplitButtonComponent(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization) {
        var _this = _super.call(this, focusService, navigationService, wrapperRef, zone, localization) || this;
        _this.popupService = popupService;
        _this.elRef = elRef;
        /**
         * Sets the text of the SplitButton.
         */
        _this.text = '';
        /**
         * Defines an icon to be rendered next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        _this.icon = '';
        /**
         * Defines an icon with a custom CSS class to be rendered next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        _this.iconClass = '';
        /**
         * Defines the location of an image to be displayed next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        _this.imageUrl = '';
        /**
         * Changes the visual appearance by using alternative styling options.
         *
         * The available values are:
         * * `flat`
         * * `outline`
         */
        _this.look = 'default';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        _this.tabIndex = 0;
        /**
         * Fires each time the user clicks the main button.
         *
         * @example
         * ```ts
         * _@Component({
         *    selector: 'my-app',
         *    template: `
         *        <kendo-splitbutton (buttonClick)="onSplitButtonClick()" [data]="data">
         *            Reply
         *        </kendo-splitbutton>
         *    `
         * })
         * class AppComponent {
         *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
         *
         *    public onSplitButtonClick(): void {
         *      console.log('SplitButton click');
         *    }
         * }
         * ```
         *
         */
        _this.buttonClick = new core_1.EventEmitter();
        /**
         * Fires each time the user clicks on the drop-down list. The event data contains the data item bound to the clicked list item.
         *
         * @example
         * ```ts
         * _@Component({
         *     selector: 'my-app',
         *    template: `
         *        <kendo-splitbutton (itemClick)="onSplitButtonItemClick($event)" [data]="data">
         *          Reply
         *      </kendo-splitbutton>
         *    `
         * })
         * class AppComponent {
         *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
         *
         *   public onSplitButtonItemClick(dataItem?: string): void {
         *        if (dataItem) {
         *            console.log(dataItem);
         *       }
         *    }
         * }
         * ```
         *
         */
        _this.itemClick = new core_1.EventEmitter();
        /**
         * Fires each time the SplitButton gets focused.
         */
        _this.onFocus = new core_1.EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the SplitButton gets blurred.
         */
        _this.onBlur = new core_1.EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         */
        _this.open = new core_1.EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open.
         */
        _this.close = new core_1.EventEmitter();
        _this.listId = kendo_angular_common_1.guid();
        _this.buttonText = '';
        _this._itemClick = _this.itemClick;
        _this._blur = _this.onBlur;
        return _this;
    }
    Object.defineProperty(SplitButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * When set to `true`, disables a SplitButton item
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "popupSettings", {
        get: function () {
            return this._popupSettings;
        },
        /**
         * Configures the popup of the SplitButton.
         *
         * The available options are:
         * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
         * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
         * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
         * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
         */
        set: function (settings) {
            this._popupSettings = Object.assign({ animate: true, popupClass: '' }, settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "data", {
        get: function () {
            if (!this._data) {
                this.data = [];
            }
            return this._data;
        },
        /**
         * Sets the data of the SplitButton.
         *
         * > The data has to be provided in an array-like list.
         */
        set: function (data) {
            this._data = data || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "openState", {
        /**
         * @hidden
         */
        get: function () {
            return this._open;
        },
        /**
         * @hidden
         */
        set: function (open) {
            if (this.disabled) {
                return;
            }
            var eventArgs = new preventable_event_1.PreventableEvent();
            if (open) {
                this.open.emit(eventArgs);
            }
            else {
                this.close.emit(eventArgs);
            }
            if (eventArgs.isDefaultPrevented()) {
                return;
            }
            this._toggle(open);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "active", {
        /**
         * @hidden
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "componentTabIndex", {
        /**
         * @hidden
         */
        get: function () {
            return this.disabled ? (-1) : this.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "isFocused", {
        get: function () {
            return this._isFocused && !this._disabled;
        },
        set: function (value) {
            this._isFocused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "widgetClasses", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "ariaLabel", {
        /**
         * @hidden
         */
        get: function () {
            return this.buttonText + " splitbutton";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.onButtonFocus = function () {
        if (!this.isFocused) {
            this._isFocused = true;
            this.onFocus.emit();
        }
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.onButtonClick = function () {
        this.buttonClick.emit();
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.keydown = function (event) {
        this.keyDownHandler(event);
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.keypress = function (event) {
        this.keyPressHandler(event);
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.keyup = function (event) {
        this.keyUpHandler(event);
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.ngAfterViewInit = function () {
        this.updateButtonText();
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('text')) {
            this.updateButtonText();
        }
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.togglePopupVisibility = function () {
        _super.prototype.togglePopupVisibility.call(this);
        if (kendo_angular_common_1.isDocumentAvailable()) {
            this.button.nativeElement.focus();
        }
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.wrapperContains = function (element) {
        return this.wrapper === element
            || this.wrapper.contains(element)
            || (this.popupRef && this.popupRef.popupElement.contains(element));
    };
    Object.defineProperty(SplitButtonComponent.prototype, "anchorAlign", {
        /**
         * @hidden
         */
        get: function () {
            var align = { horizontal: this.popupSettings.align || 'left', vertical: 'bottom' };
            if (this.direction === 'rtl' && !util_1.isPresent(this.popupSettings.align)) {
                align.horizontal = 'right';
            }
            return align;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "popupAlign", {
        /**
         * @hidden
         */
        get: function () {
            var align = { horizontal: this.popupSettings.align || 'left', vertical: 'top' };
            if (this.direction === 'rtl' && !util_1.isPresent(this.popupSettings.align)) {
                align.horizontal = 'right';
            }
            return align;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Focuses the SplitButton component.
     */
    SplitButtonComponent.prototype.focus = function () {
        if (kendo_angular_common_1.isDocumentAvailable()) {
            this.button.nativeElement.focus();
        }
    };
    /**
     * Blurs the SplitButton component.
     */
    SplitButtonComponent.prototype.blur = function () {
        if (kendo_angular_common_1.isDocumentAvailable()) {
            this.button.nativeElement.blur();
        }
    };
    SplitButtonComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.destroyPopup();
    };
    /**
     * Toggles the visibility of the popup.
     * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
     *
     * @param open - The state of the popup.
     */
    SplitButtonComponent.prototype.toggle = function (open) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        util_1.tick(function () { return (_this._toggle((open === undefined) ? !_this._open : open)); });
    };
    Object.defineProperty(SplitButtonComponent.prototype, "isOpen", {
        /**
         * Returns the current open state of the popup.
         */
        get: function () {
            return this.openState;
        },
        enumerable: true,
        configurable: true
    });
    SplitButtonComponent.prototype.enterHandler = function () {
        if (this.disabled) {
            return;
        }
        if (this.openState) {
            var focused = this.focusService.focused;
            if (util_1.isPresent(focused) && focused !== -1) {
                this.emitItemClickHandler(focused);
            }
        }
        else {
            this.buttonClick.emit();
        }
    };
    SplitButtonComponent.prototype.updateButtonText = function () {
        var _this = this;
        if (kendo_angular_common_1.isDocumentAvailable()) {
            var innerText_1 = this.wrapper.innerText.split('\n').join('').trim();
            //setTimout is needed because of `Expression has changed after it was checked.` error;
            setTimeout(function () { _this.buttonText = innerText_1; }, 0);
        }
    };
    Object.defineProperty(SplitButtonComponent.prototype, "appendTo", {
        get: function () {
            var appendTo = this.popupSettings.appendTo;
            if (!appendTo || appendTo === 'root') {
                return undefined;
            }
            return appendTo === 'component' ? this.containerRef : appendTo;
        },
        enumerable: true,
        configurable: true
    });
    SplitButtonComponent.prototype._toggle = function (open) {
        this._open = open;
        this.destroyPopup();
        if (this._open) {
            this.createPopup();
        }
    };
    SplitButtonComponent.prototype.createPopup = function () {
        var _this = this;
        this.popupRef = this.popupService.open({
            anchor: this.elRef,
            anchorAlign: this.anchorAlign,
            animate: this.popupSettings.animate,
            appendTo: this.appendTo,
            content: this.popupTemplate,
            popupAlign: this.popupAlign,
            popupClass: this.popupClasses
        });
        this.popupRef.popupAnchorViewportLeave.subscribe(function () { return _this.openState = false; });
        this.popupRef.popupOpen.subscribe(this.focusFirstItem.bind(this));
    };
    SplitButtonComponent.prototype.destroyPopup = function () {
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        }
    };
    SplitButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'kendoSplitButton',
                    providers: [
                        focus_service_1.FocusService,
                        navigation_service_1.NavigationService,
                        NAVIGATION_SETTINGS_PROVIDER,
                        kendo_angular_l10n_1.LocalizationService,
                        {
                            provide: kendo_angular_l10n_1.L10N_PREFIX,
                            useValue: 'kendo.splitbutton'
                        }
                    ],
                    selector: 'kendo-splitbutton',
                    template: "\n        <button kendoButton\n            #button\n            role=\"listbox\"\n            type=\"button\"\n            [look]=\"look\"\n            [tabindex]=\"componentTabIndex\"\n            [disabled]=\"disabled\"\n            [icon]=\"icon\"\n            [class.k-state-active]=\"active\"\n            [iconClass]=\"iconClass\"\n            [imageUrl]=\"imageUrl\"\n            (focus)=\"onButtonFocus()\"\n            (click)=\"onButtonClick()\"\n            [attr.aria-disabled]=\"disabled\"\n            [attr.aria-expanded]=\"openState\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-owns]=\"listId\"\n            [attr.aria-label]=\"ariaLabel\"\n            >\n            {{text}}<ng-content></ng-content>\n        </button>\n        <button kendoButton\n            type=\"button\"\n            [disabled]=\"disabled\"\n            [icon]=\"'arrow-s'\"\n            [look]=\"look\"\n            [tabindex]=\"-1\"\n            (click)=\"togglePopupVisibility()\">\n        </button>\n        <ng-template #popupTemplate>\n            <kendo-button-list\n                [id]=\"listId\"\n                [data]=\"data\"\n                [textField]=\"textField\"\n                [itemTemplate]=\"itemTemplate\"\n                (onItemBlur)=\"blurHandler()\"\n                (onItemClick)=\"onItemClick($event)\"\n                (keydown)=\"keyDownHandler($event)\"\n                (keypress)=\"keyPressHandler($event)\"\n                (keyup)=\"keyUpHandler($event)\"\n            >\n            </kendo-button-list>\n        </ng-template>\n        <ng-container #container></ng-container>\n    "
                },] },
    ];
    /** @nocollapse */
    SplitButtonComponent.ctorParameters = function () { return [
        { type: focus_service_1.FocusService },
        { type: navigation_service_1.NavigationService },
        { type: core_1.ElementRef },
        { type: core_1.NgZone },
        { type: kendo_angular_popup_1.PopupService },
        { type: core_1.ElementRef },
        { type: kendo_angular_l10n_1.LocalizationService }
    ]; };
    SplitButtonComponent.propDecorators = {
        text: [{ type: core_1.Input }],
        icon: [{ type: core_1.Input }],
        iconClass: [{ type: core_1.Input }],
        imageUrl: [{ type: core_1.Input }],
        look: [{ type: core_1.Input }],
        disabled: [{ type: core_1.Input }],
        popupSettings: [{ type: core_1.Input }],
        tabIndex: [{ type: core_1.Input }],
        textField: [{ type: core_1.Input }],
        data: [{ type: core_1.Input }],
        buttonClick: [{ type: core_1.Output }],
        itemClick: [{ type: core_1.Output }],
        onFocus: [{ type: core_1.Output, args: ['focus',] }],
        onBlur: [{ type: core_1.Output, args: ['blur',] }],
        open: [{ type: core_1.Output }],
        close: [{ type: core_1.Output }],
        itemTemplate: [{ type: core_1.ContentChild, args: [button_item_template_directive_1.ButtonItemTemplateDirective,] }],
        button: [{ type: core_1.ViewChild, args: ['button',] }],
        popupTemplate: [{ type: core_1.ViewChild, args: ['popupTemplate',] }],
        containerRef: [{ type: core_1.ViewChild, args: ['container', { read: core_1.ViewContainerRef },] }],
        isFocused: [{ type: core_1.HostBinding, args: ['class.k-state-focused',] }],
        widgetClasses: [{ type: core_1.HostBinding, args: ['class.k-widget',] }, { type: core_1.HostBinding, args: ['class.k-split-button',] }, { type: core_1.HostBinding, args: ['class.k-button-group',] }],
        dir: [{ type: core_1.HostBinding, args: ['attr.dir',] }],
        keydown: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }],
        keypress: [{ type: core_1.HostListener, args: ['keypress', ['$event'],] }],
        keyup: [{ type: core_1.HostListener, args: ['keyup', ['$event'],] }]
    };
    return SplitButtonComponent;
}(list_button_1.ListButton));
exports.SplitButtonComponent = SplitButtonComponent;
