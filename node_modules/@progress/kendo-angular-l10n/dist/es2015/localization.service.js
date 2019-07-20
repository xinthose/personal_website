import { Inject, Injectable, Optional, InjectionToken } from '@angular/core';
import { MessageService } from './message.service';
import { RTL } from './rtl';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
/**
 * Localization prefix for the component messages.
 *
 * For internal use.
 * @hidden
 */
export const L10N_PREFIX = new InjectionToken('Localization key prefix');
/**
 * Component localization service.
 *
 * For internal use.
 * @hidden
 */
export class LocalizationService {
    constructor(prefix, messageService, _rtl) {
        this.prefix = prefix;
        this.messageService = messageService;
        this._rtl = _rtl;
        this.changes = new BehaviorSubject({ rtl: this._rtl });
        this.dictionary = {};
        if (messageService) {
            this.subscription = messageService.changes
                .pipe(map(({ rtl }) => rtl !== undefined ? rtl : this._rtl), tap(rtl => this._rtl = rtl))
                .subscribe(rtl => {
                this.dictionary = {};
                this.changes.next({ rtl });
            });
        }
    }
    get rtl() {
        return this._rtl;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    get(shortKey) {
        const key = this.key(shortKey);
        return this.dictionary[key];
    }
    register(shortKey, value, override = false) {
        const key = this.key(shortKey);
        let message = value;
        if (!override) {
            if (this.dictionary.hasOwnProperty(key)) {
                return;
            }
            message = this.defaultValue(key, value);
        }
        this.dictionary[key] = message;
    }
    notifyChanges() {
        this.changes.next({ rtl: this.rtl });
    }
    key(shortKey) {
        return this.prefix + '.' + shortKey;
    }
    defaultValue(key, value) {
        if (!this.messageService) {
            return value;
        }
        const alt = this.messageService.get(key);
        return (alt === undefined) ? value : alt;
    }
}
LocalizationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LocalizationService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [L10N_PREFIX,] }] },
    { type: MessageService, decorators: [{ type: Optional }] },
    { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [RTL,] }] }
];
