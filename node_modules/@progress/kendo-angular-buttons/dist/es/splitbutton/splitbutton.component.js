import * as tslib_1 from "tslib";
/* tslint:disable:no-access-missing-member */
import { Component, ElementRef, TemplateRef, Input, Output, HostBinding, HostListener, EventEmitter, ContentChild, ViewChild, ViewContainerRef, NgZone } from '@angular/core';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { PopupService } from '@progress/kendo-angular-popup';
import { ListButton } from './../listbutton/list-button';
import { ButtonItemTemplateDirective } from './../listbutton/button-item-template.directive';
import { FocusService } from './../focusable/focus.service';
import { NavigationService } from './../navigation/navigation.service';
import { NAVIGATION_CONFIG } from './../navigation/navigation-config';
import { isDocumentAvailable, guid } from '@progress/kendo-angular-common';
import { isPresent, tick } from './../util';
import { PreventableEvent } from '../preventable-event';
var NAVIGATION_SETTINGS = {
    useLeftRightArrows: true
};
var ɵ0 = NAVIGATION_SETTINGS;
var NAVIGATION_SETTINGS_PROVIDER = {
    provide: NAVIGATION_CONFIG,
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
        _this.buttonClick = new EventEmitter();
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
        _this.itemClick = new EventEmitter();
        /**
         * Fires each time the SplitButton gets focused.
         */
        _this.onFocus = new EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the SplitButton gets blurred.
         */
        _this.onBlur = new EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         */
        _this.open = new EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open.
         */
        _this.close = new EventEmitter();
        _this.listId = guid();
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
            var eventArgs = new PreventableEvent();
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
        if (isDocumentAvailable()) {
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
            if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
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
            if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
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
        if (isDocumentAvailable()) {
            this.button.nativeElement.focus();
        }
    };
    /**
     * Blurs the SplitButton component.
     */
    SplitButtonComponent.prototype.blur = function () {
        if (isDocumentAvailable()) {
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
        tick(function () { return (_this._toggle((open === undefined) ? !_this._open : open)); });
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
            if (isPresent(focused) && focused !== -1) {
                this.emitItemClickHandler(focused);
            }
        }
        else {
            this.buttonClick.emit();
        }
    };
    SplitButtonComponent.prototype.updateButtonText = function () {
        var _this = this;
        if (isDocumentAvailable()) {
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
        { type: Component, args: [{
                    exportAs: 'kendoSplitButton',
                    providers: [
                        FocusService,
                        NavigationService,
                        NAVIGATION_SETTINGS_PROVIDER,
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.splitbutton'
                        }
                    ],
                    selector: 'kendo-splitbutton',
                    template: "\n        <button kendoButton\n            #button\n            role=\"listbox\"\n            type=\"button\"\n            [look]=\"look\"\n            [tabindex]=\"componentTabIndex\"\n            [disabled]=\"disabled\"\n            [icon]=\"icon\"\n            [class.k-state-active]=\"active\"\n            [iconClass]=\"iconClass\"\n            [imageUrl]=\"imageUrl\"\n            (focus)=\"onButtonFocus()\"\n            (click)=\"onButtonClick()\"\n            [attr.aria-disabled]=\"disabled\"\n            [attr.aria-expanded]=\"openState\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.aria-owns]=\"listId\"\n            [attr.aria-label]=\"ariaLabel\"\n            >\n            {{text}}<ng-content></ng-content>\n        </button>\n        <button kendoButton\n            type=\"button\"\n            [disabled]=\"disabled\"\n            [icon]=\"'arrow-s'\"\n            [look]=\"look\"\n            [tabindex]=\"-1\"\n            (click)=\"togglePopupVisibility()\">\n        </button>\n        <ng-template #popupTemplate>\n            <kendo-button-list\n                [id]=\"listId\"\n                [data]=\"data\"\n                [textField]=\"textField\"\n                [itemTemplate]=\"itemTemplate\"\n                (onItemBlur)=\"blurHandler()\"\n                (onItemClick)=\"onItemClick($event)\"\n                (keydown)=\"keyDownHandler($event)\"\n                (keypress)=\"keyPressHandler($event)\"\n                (keyup)=\"keyUpHandler($event)\"\n            >\n            </kendo-button-list>\n        </ng-template>\n        <ng-container #container></ng-container>\n    "
                },] },
    ];
    /** @nocollapse */
    SplitButtonComponent.ctorParameters = function () { return [
        { type: FocusService },
        { type: NavigationService },
        { type: ElementRef },
        { type: NgZone },
        { type: PopupService },
        { type: ElementRef },
        { type: LocalizationService }
    ]; };
    SplitButtonComponent.propDecorators = {
        text: [{ type: Input }],
        icon: [{ type: Input }],
        iconClass: [{ type: Input }],
        imageUrl: [{ type: Input }],
        look: [{ type: Input }],
        disabled: [{ type: Input }],
        popupSettings: [{ type: Input }],
        tabIndex: [{ type: Input }],
        textField: [{ type: Input }],
        data: [{ type: Input }],
        buttonClick: [{ type: Output }],
        itemClick: [{ type: Output }],
        onFocus: [{ type: Output, args: ['focus',] }],
        onBlur: [{ type: Output, args: ['blur',] }],
        open: [{ type: Output }],
        close: [{ type: Output }],
        itemTemplate: [{ type: ContentChild, args: [ButtonItemTemplateDirective,] }],
        button: [{ type: ViewChild, args: ['button',] }],
        popupTemplate: [{ type: ViewChild, args: ['popupTemplate',] }],
        containerRef: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
        isFocused: [{ type: HostBinding, args: ['class.k-state-focused',] }],
        widgetClasses: [{ type: HostBinding, args: ['class.k-widget',] }, { type: HostBinding, args: ['class.k-split-button',] }, { type: HostBinding, args: ['class.k-button-group',] }],
        dir: [{ type: HostBinding, args: ['attr.dir',] }],
        keydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        keypress: [{ type: HostListener, args: ['keypress', ['$event'],] }],
        keyup: [{ type: HostListener, args: ['keyup', ['$event'],] }]
    };
    return SplitButtonComponent;
}(ListButton));
export { SplitButtonComponent };
export { ɵ0 };
