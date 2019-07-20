import { InjectionToken, OnDestroy } from '@angular/core';
import { MessageService } from './message.service';
import { Subject } from 'rxjs';
/**
 * Localization prefix for the component messages.
 *
 * For internal use.
 * @hidden
 */
export declare const L10N_PREFIX: InjectionToken<string>;
/**
 * Component localization service.
 *
 * For internal use.
 * @hidden
 */
export declare class LocalizationService implements OnDestroy {
    private prefix;
    private messageService;
    private _rtl;
    readonly changes: Subject<{
        rtl: boolean;
    }>;
    private subscription;
    private dictionary;
    constructor(prefix: string, messageService: MessageService, _rtl: boolean);
    readonly rtl: boolean;
    ngOnDestroy(): void;
    get(shortKey: string): string;
    register(shortKey: string, value: string, override?: boolean): void;
    notifyChanges(): void;
    private key;
    private defaultValue;
}
