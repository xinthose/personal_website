import { ButtonDirective } from '../button/button.directive';
import { Component, Input, ContentChildren, QueryList, HostBinding, HostListener, isDevMode, ElementRef } from '@angular/core';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { isChanged, Keys } from '@progress/kendo-angular-common';
import { KendoButtonService } from '../button/button.service';
import { isPresent } from '../util';
/**
 * @hidden
 */
var ariaChecked = 'aria-checked';
/**
 * @hidden
 */
var role = 'role';
/**
 * @hidden
 */
var tabindex = 'tabindex';
/**
 * Represents the Kendo UI ButtonGroup component for Angular.
 */
var ButtonGroupComponent = /** @class */ (function () {
    function ButtonGroupComponent(service, localization, element) {
        var _this = this;
        this.service = service;
        this.element = element;
        /**
         * By default, the selection mode of the ButtonGroup is set to `multiple`.
         */
        this.selection = 'multiple';
        /**
         * Changes the visual appearance by using alternative styling options
         * ([more information and examples]({% slug styling_buttongroup %})).
         * The `look` property of the ButtonGroup takes precedence over the `look` property
         * of the individual buttons that are part of the group.
         *
         * The available values are:
         * * `flat`
         * * `outline`
         */
        this.look = 'default';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        this.localizationChangeSubscription = localization.changes.subscribe(function (_a) {
            var rtl = _a.rtl;
            return _this.direction = rtl ? 'rtl' : 'ltr';
        });
    }
    Object.defineProperty(ButtonGroupComponent.prototype, "wrapperClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "stretchedClass", {
        get: function () {
            return !!this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "isFlat", {
        get: function () {
            return this.look === 'flat';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "isBare", {
        get: function () {
            return this.look === 'bare';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "isOutline", {
        get: function () {
            return this.look === 'outline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "getRole", {
        get: function () {
            return this.isSelectionSingle() ? 'radiogroup' : 'group';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "ariaDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "wrapperWidth", {
        get: function () {
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "wrapperTabIndex", {
        get: function () {
            return this.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    ButtonGroupComponent.prototype.keydown = function (event) {
        if (this.isSelectionSingle()) {
            this.navigateSelection(event);
        }
        else {
            this.navigateFocus(event);
        }
    };
    /**
     * @hidden
     */
    ButtonGroupComponent.prototype.focusout = function (event) {
        if (event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement) {
            this.defocus(this.buttons.toArray());
        }
    };
    ButtonGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.setButtonLook(this.look);
        this.subscription = this.service.buttonClicked$.subscribe(function (button) {
            var newSelectionValue;
            if (_this.isSelectionSingle()) {
                newSelectionValue = true;
                _this.deactivate(_this.buttons.filter(function (current) { return current !== button; }));
            }
            else {
                _this.defocus(_this.buttons.toArray());
                newSelectionValue = !button.selected;
            }
            if (button.togglable) {
                button.setSelected(newSelectionValue);
                button.setAttribute(ariaChecked, newSelectionValue.toString());
            }
            button.setAttribute(tabindex, "0");
        });
    };
    ButtonGroupComponent.prototype.ngOnChanges = function (change) {
        var _this = this;
        if (isChanged('disabled', change)) {
            this.buttons.forEach(function (button) {
                if (isPresent(_this.disabled)) {
                    button.disabled = _this.disabled;
                }
            });
        }
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var isRadioGroup = this.isSelectionSingle();
        var buttonsRole = isRadioGroup ? 'radio' : 'checkbox';
        var anyChecked = false;
        this.buttons.forEach(function (button) {
            if (button.togglable) {
                button.setAttribute(ariaChecked, button.selected.toString());
                button.setAttribute(role, buttonsRole);
            }
            // if (!isRadioGroup || button.selected) {
            //     button.setAttribute(tabindex, button.tabIndex.toString());
            // } else if (isRadioGroup && !button.selected) {
            //     button.setAttribute(tabindex, "-1");
            // }
            if (!button.selected) {
                button.setAttribute(tabindex, "-1");
            }
            else {
                button.setAttribute(tabindex, "0");
            }
            anyChecked = anyChecked || button.selected;
        });
        if (isRadioGroup && !anyChecked && this.buttons.length) {
            this.buttons.first.setAttribute(tabindex, "0");
            this.buttons.last.setAttribute(tabindex, "0");
        }
    };
    ButtonGroupComponent.prototype.ngAfterViewChecked = function () {
        if (this.buttons.length) {
            this.buttons.first.renderer.addClass(this.buttons.first.element, 'k-group-start');
            this.buttons.last.renderer.addClass(this.buttons.last.element, 'k-group-end');
        }
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.localizationChangeSubscription.unsubscribe();
    };
    ButtonGroupComponent.prototype.ngAfterContentChecked = function () {
        this.verifySettings();
    };
    ButtonGroupComponent.prototype.navigateSelection = function (event) {
        var selectedIndex = this.buttons.toArray().findIndex(function (current) { return current.selected; });
        var firstIndex = 0;
        var lastIndex = this.buttons.length - 1;
        if (selectedIndex !== undefined) {
            if (event.keyCode === Keys.ArrowRight && selectedIndex < lastIndex) {
                this.deactivate(this.buttons.filter(function (current) { return current.selected; }));
                this.activate(this.buttons.filter(function (_current, index) {
                    return index === selectedIndex + 1;
                }));
            }
            if (event.keyCode === Keys.ArrowLeft && selectedIndex > firstIndex) {
                this.deactivate(this.buttons.filter(function (current) { return current.selected; }));
                this.activate(this.buttons.filter(function (_current, index) {
                    return index === selectedIndex - 1;
                }));
            }
        }
    };
    ButtonGroupComponent.prototype.navigateFocus = function (event) {
        var focusedIndex = this.buttons.toArray().findIndex(function (current) { return current.element.tabIndex !== -1; });
        var firstIndex = 0;
        var lastIndex = this.buttons.length - 1;
        if (event.keyCode === Keys.ArrowRight && focusedIndex < lastIndex) {
            this.defocus(this.buttons.toArray());
            this.focus(this.buttons.filter(function (_current, index) {
                return index === focusedIndex + 1;
            }));
        }
        if (event.keyCode === Keys.ArrowLeft && focusedIndex > firstIndex) {
            this.defocus(this.buttons.toArray());
            this.focus(this.buttons.filter(function (_current, index) {
                return index === focusedIndex - 1;
            }));
        }
    };
    ButtonGroupComponent.prototype.deactivate = function (buttons) {
        buttons.forEach(function (button) {
            button.setSelected(false);
            button.setAttribute(ariaChecked, button.selected.toString());
            button.setAttribute(tabindex, "-1");
        });
    };
    ButtonGroupComponent.prototype.activate = function (buttons) {
        buttons.forEach(function (button) {
            button.setSelected(true);
            button.setAttribute(ariaChecked, button.selected.toString());
            button.setAttribute(tabindex, "0");
            button.focus();
        });
    };
    ButtonGroupComponent.prototype.defocus = function (buttons) {
        buttons.forEach(function (button) {
            button.setAttribute(tabindex, "-1");
        });
    };
    ButtonGroupComponent.prototype.focus = function (buttons) {
        buttons.forEach(function (button) {
            button.setAttribute(tabindex, "0");
            button.focus();
        });
    };
    ButtonGroupComponent.prototype.verifySettings = function () {
        if (isDevMode()) {
            if (this.isSelectionSingle() && this.buttons.filter(function (button) { return button.selected; }).length > 1) {
                throw new Error('Having multiple selected buttons with single selection mode is not supported');
            }
        }
    };
    ButtonGroupComponent.prototype.isSelectionSingle = function () {
        return this.selection === 'single';
    };
    ButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendoButtonGroup',
                    providers: [
                        KendoButtonService,
                        LocalizationService,
                        {
                            provide: L10N_PREFIX,
                            useValue: 'kendo.buttongroup'
                        }
                    ],
                    selector: 'kendo-buttongroup',
                    template: "\n        <ng-content select=\"[kendoButton]\"></ng-content>\n    "
                },] },
    ];
    /** @nocollapse */
    ButtonGroupComponent.ctorParameters = function () { return [
        { type: KendoButtonService },
        { type: LocalizationService },
        { type: ElementRef }
    ]; };
    ButtonGroupComponent.propDecorators = {
        disabled: [{ type: Input, args: ['disabled',] }],
        selection: [{ type: Input, args: ['selection',] }],
        width: [{ type: Input, args: ['width',] }],
        look: [{ type: Input }],
        tabIndex: [{ type: Input }],
        buttons: [{ type: ContentChildren, args: [ButtonDirective,] }],
        wrapperClass: [{ type: HostBinding, args: ['class.k-button-group',] }],
        disabledClass: [{ type: HostBinding, args: ['class.k-state-disabled',] }],
        stretchedClass: [{ type: HostBinding, args: ['class.k-button-group-stretched',] }],
        isFlat: [{ type: HostBinding, args: ['class.k-button-group-flat',] }],
        isBare: [{ type: HostBinding, args: ['class.k-button-group-bare',] }],
        isOutline: [{ type: HostBinding, args: ['class.k-button-group-outline',] }],
        getRole: [{ type: HostBinding, args: ['attr.role',] }],
        dir: [{ type: HostBinding, args: ['attr.dir',] }],
        ariaDisabled: [{ type: HostBinding, args: ['attr.aria-disalbed',] }],
        wrapperWidth: [{ type: HostBinding, args: ['style.width',] }],
        wrapperTabIndex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        keydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        focusout: [{ type: HostListener, args: ['focusout', ['$event'],] }]
    };
    return ButtonGroupComponent;
}());
export { ButtonGroupComponent };
