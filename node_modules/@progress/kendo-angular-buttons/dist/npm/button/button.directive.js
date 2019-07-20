"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var button_service_1 = require("./button.service");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var operators_1 = require("rxjs/operators");
/**
 * Represents the Kendo UI Button component for Angular.
 */
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(element, renderer, service, localization, ngZone) {
        var _this = this;
        this.service = service;
        this.ngZone = ngZone;
        /**
         * Provides visual styling that indicates if the Button is active.
         * By default, `toggleable` is set to `false`.
         */
        this.toggleable = false;
        /**
         * Adds visual weight to the Button and makes it primary.
         */
        this.primary = false;
        /**
         * Changes the visual appearance by using alternative styling options
         * ([more information and examples]({% slug appearance_button %})).
         *
         * The available values are:
         * * `flat`
         * * `outline`
         */
        this.look = 'default';
        this.isDisabled = false;
        this.isIcon = false;
        this.isIconClass = false;
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * Fires each time the selected state of a toggleable button is changed.
         *
         * The event argument is the new selected state (boolean).
         */
        this.selectedChange = new core_1.EventEmitter();
        this.domEvents = [];
        this.direction = localization.rtl ? 'rtl' : 'ltr';
        this.localizationChangeSubscription = localization.changes
            .subscribe(function (_a) {
            var rtl = _a.rtl;
            return _this.direction = rtl ? 'rtl' : 'ltr';
        });
        this.element = element.nativeElement;
        this.renderer = renderer;
    }
    Object.defineProperty(ButtonDirective.prototype, "togglable", {
        /**
         * Backwards-compatible alias
         *
         * @hidden
         */
        get: function () {
            return this.toggleable;
        },
        /**
         * @hidden
         */
        set: function (value) {
            this.toggleable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "selected", {
        /**
         * Sets the selected state of the Button.
         */
        get: function () {
            return this._selected || false;
        },
        set: function (value) {
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        /**
         * Defines the name for an existing icon in a Kendo UI theme.
         * The icon is rendered inside the Button by a `span.k-icon` element.
         */
        set: function (icon) {
            var _this = this;
            if (icon) {
                this.iconSetter(icon, function () {
                    _this.isIcon = true;
                    var classes = 'k-icon k-i-' + icon;
                    _this.addIcon(classes);
                });
            }
            else {
                this.isIcon = false;
                this.updateIconNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "iconClass", {
        /**
         * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
         * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
         */
        set: function (iconClassName) {
            var _this = this;
            if (iconClassName) {
                this.iconSetter(iconClassName, function () {
                    _this.isIconClass = true;
                    _this.addIcon(iconClassName);
                });
            }
            else {
                this.isIconClass = false;
                this.updateIconNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "imageUrl", {
        /**
         * Defines a URL which is used for an `img` element inside the Button.
         * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
         */
        set: function (imageUrl) {
            if (imageUrl) {
                this.iconSetter(imageUrl, this.addImgIcon.bind(this));
            }
            else {
                this.removeImageNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "disabled", {
        /**
         * If set to `true`, it disables the Button.
         */
        set: function (disabled) {
            this.isDisabled = disabled;
            this.renderer.setProperty(this.element, 'disabled', disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classButton", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classPrimary", {
        get: function () {
            return this.primary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "isFlat", {
        get: function () {
            return this.look === 'flat';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "isBare", {
        get: function () {
            return this.look === 'bare';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "isOutline", {
        get: function () {
            return this.look === 'outline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classActive", {
        get: function () {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    ButtonDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.service) {
            this.buttonLookChangeSubscription = this.service.buttonLookChange
                .pipe(operators_1.filter(function (look) { return look !== 'default'; }))
                .subscribe(function (look) { return _this.look = look; });
        }
        if (!this.element.hasAttribute('role') && this.togglable) {
            this.toggleAriaCheckbox(this.toggleable);
        }
        this.ngZone.runOutsideAngular(function () {
            _this.domEvents.push(_this.renderer.listen(_this.element, 'click', _this._onButtonClick.bind(_this)));
        });
    };
    ButtonDirective.prototype.ngOnChanges = function (change) {
        if (kendo_angular_common_1.isChanged('togglable', change) || kendo_angular_common_1.isChanged('toggleable', change)) {
            this.toggleAriaCheckbox(this.toggleable);
        }
    };
    ButtonDirective.prototype.ngAfterViewChecked = function () {
        this.setIconTextClasses();
    };
    ButtonDirective.prototype.ngOnDestroy = function () {
        this.imageNode = null;
        this.iconNode = null;
        this.renderer = null;
        this.localizationChangeSubscription.unsubscribe();
        if (this.service && this.buttonLookChangeSubscription) {
            this.buttonLookChangeSubscription.unsubscribe();
        }
        clearTimeout(this.deferTimeout);
        this.domEvents.forEach(function (unbindHandler) { return unbindHandler(); });
    };
    /**
     * Focuses the Button component.
     */
    ButtonDirective.prototype.focus = function () {
        if (kendo_angular_common_1.isDocumentAvailable()) {
            this.element.focus();
        }
    };
    /**
     * Blurs the Button component.
     */
    ButtonDirective.prototype.blur = function () {
        if (kendo_angular_common_1.isDocumentAvailable()) {
            this.element.blur();
        }
    };
    /**
     * @hidden
     */
    ButtonDirective.prototype.setAttribute = function (attribute, value) {
        this.renderer.setAttribute(this.element, attribute, value);
    };
    /**
     * @hidden
     */
    ButtonDirective.prototype.removeAttribute = function (attribute) {
        this.renderer.removeAttribute(this.element, attribute);
    };
    /**
     * @hidden
     *
     * Internal setter that triggers selectedChange
     */
    ButtonDirective.prototype.setSelected = function (value) {
        var _this = this;
        var changed = this.selected !== value;
        this.selected = value;
        this.setAttribute('aria-checked', this.selected.toString());
        this.toggleClass('k-state-active', this.selected);
        if (changed && kendo_angular_common_1.hasObservers(this.selectedChange)) {
            this.ngZone.run(function () {
                _this.selectedChange.emit(value);
            });
        }
    };
    ButtonDirective.prototype.toggleAriaCheckbox = function (shouldSet) {
        if (!kendo_angular_common_1.isDocumentAvailable()) {
            return;
        }
        if (shouldSet) {
            this.setAttribute('role', 'checkbox');
            this.setAttribute('aria-checked', this.selected.toString());
        }
        else {
            this.removeAttribute('role');
            this.removeAttribute('aria-checked');
        }
    };
    ButtonDirective.prototype.hasText = function () {
        if (kendo_angular_common_1.isDocumentAvailable()) {
            return String(this.element.textContent).trim().length > 0;
        }
        else {
            return false;
        }
    };
    ButtonDirective.prototype.addImgIcon = function (imageUrl) {
        var renderer = this.renderer;
        if (this.imageNode) {
            renderer.setProperty(this.imageNode, 'src', imageUrl);
        }
        else if (kendo_angular_common_1.isDocumentAvailable()) {
            this.imageNode = renderer.createElement('img');
            renderer.setProperty(this.imageNode, 'src', imageUrl);
            renderer.setProperty(this.imageNode, 'className', 'k-image');
            renderer.setAttribute(this.imageNode, 'role', 'presentation');
            this.prependChild(this.imageNode);
        }
    };
    ButtonDirective.prototype.addIcon = function (classNames) {
        var renderer = this.renderer;
        if (this.iconNode) {
            renderer.setProperty(this.iconNode, 'className', classNames);
        }
        else if (kendo_angular_common_1.isDocumentAvailable()) {
            this.iconNode = renderer.createElement('span');
            renderer.setProperty(this.iconNode, 'className', classNames);
            renderer.setAttribute(this.iconNode, 'role', 'presentation');
            this.prependChild(this.iconNode);
        }
    };
    ButtonDirective.prototype.prependChild = function (node) {
        var _this = this;
        this.defer(function () {
            if (_this.renderer && node !== _this.element.firstChild) {
                _this.renderer.insertBefore(_this.element, node, _this.element.firstChild);
            }
        });
    };
    ButtonDirective.prototype.defer = function (callback) {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.deferTimeout = setTimeout(callback, 0);
        });
    };
    ButtonDirective.prototype.iconSetter = function (icon, insertIcon) {
        if (icon) {
            insertIcon(icon);
        }
        this.setIconTextClasses();
    };
    ButtonDirective.prototype.removeImageNode = function () {
        if (this.imageNode && this.renderer.parentNode(this.imageNode)) {
            this.renderer.removeChild(this.element, this.imageNode);
            this.imageNode = null;
        }
    };
    ButtonDirective.prototype.removeIconNode = function () {
        if (this.iconNode && this.renderer.parentNode(this.iconNode)) {
            this.renderer.removeChild(this.element, this.iconNode);
            this.iconNode = null;
        }
    };
    ButtonDirective.prototype.updateIconNode = function () {
        if (!this.isIcon && !this.isIconClass) {
            this.removeIconNode();
        }
    };
    ButtonDirective.prototype.setIconTextClasses = function () {
        var hasIcon = this.isIcon || this.isIconClass || this.imageNode;
        var hasText = this.hasText();
        this.toggleClass('k-button-icon', hasIcon && !hasText);
        this.toggleClass('k-button-icontext', hasIcon && hasText);
    };
    ButtonDirective.prototype.toggleClass = function (className, add) {
        if (add) {
            this.renderer.addClass(this.element, className);
        }
        else {
            this.renderer.removeClass(this.element, className);
        }
    };
    ButtonDirective.prototype._onButtonClick = function () {
        var _this = this;
        if (!this.toggleable) {
            return;
        }
        if (!this.disabled && this.service) {
            this.ngZone.run(function () {
                _this.service.click(_this);
            });
        }
        if (!this.service) {
            this.setSelected(!this.selected);
        }
    };
    ButtonDirective.decorators = [
        { type: core_1.Directive, args: [{
                    exportAs: 'kendoButton',
                    providers: [
                        kendo_angular_l10n_1.LocalizationService,
                        {
                            provide: kendo_angular_l10n_1.L10N_PREFIX,
                            useValue: 'kendo.button'
                        }
                    ],
                    selector: 'button[kendoButton]' // tslint:disable-line
                },] },
    ];
    /** @nocollapse */
    ButtonDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.Renderer2 },
        { type: button_service_1.KendoButtonService, decorators: [{ type: core_1.Optional }] },
        { type: kendo_angular_l10n_1.LocalizationService },
        { type: core_1.NgZone }
    ]; };
    ButtonDirective.propDecorators = {
        toggleable: [{ type: core_1.Input }],
        togglable: [{ type: core_1.Input }],
        primary: [{ type: core_1.Input }],
        look: [{ type: core_1.Input }],
        selected: [{ type: core_1.Input }],
        tabIndex: [{ type: core_1.Input }],
        icon: [{ type: core_1.Input }],
        iconClass: [{ type: core_1.Input }],
        imageUrl: [{ type: core_1.Input }],
        disabled: [{ type: core_1.Input }],
        selectedChange: [{ type: core_1.Output }],
        classButton: [{ type: core_1.HostBinding, args: ['class.k-button',] }],
        classDisabled: [{ type: core_1.HostBinding, args: ['class.k-state-disabled',] }],
        classPrimary: [{ type: core_1.HostBinding, args: ['class.k-primary',] }],
        isFlat: [{ type: core_1.HostBinding, args: ['class.k-flat',] }],
        isBare: [{ type: core_1.HostBinding, args: ['class.k-bare',] }],
        isOutline: [{ type: core_1.HostBinding, args: ['class.k-outline',] }],
        classActive: [{ type: core_1.HostBinding, args: ['class.k-state-active',] }],
        direction: [{ type: core_1.HostBinding, args: ['attr.dir',] }]
    };
    return ButtonDirective;
}());
exports.ButtonDirective = ButtonDirective;
