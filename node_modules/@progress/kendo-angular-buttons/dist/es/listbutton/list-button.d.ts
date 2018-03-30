import { EventEmitter, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { PopupSettings } from './popup-settings';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import { Subscription } from 'rxjs/Subscription';
import { FocusService } from './../focusable/focus.service';
import { KeyEvents } from './../navigation/key-events';
import { NavigationService } from './../navigation/navigation.service';
/**
 * @hidden
 */
export declare class ListButton implements OnDestroy {
    protected focusService: FocusService;
    protected navigationService: NavigationService;
    protected wrapperRef: ElementRef;
    private _zone;
    protected _data: any;
    protected _open: boolean;
    protected _disabled: boolean;
    protected _active: boolean;
    protected _popupSettings: PopupSettings;
    protected listId: string;
    protected _isFocused: boolean;
    protected _itemClick: EventEmitter<any>;
    protected _blur: EventEmitter<any>;
    protected wrapper: HTMLElement;
    protected button: ElementRef;
    protected focusSubscription: Subscription;
    protected navigationSubscription: Subscription;
    protected enterPressSubscription: Subscription;
    protected enterUpSubscription: Subscription;
    protected openSubscription: Subscription;
    protected closeSubscription: Subscription;
    protected componentBlurredSubscription: Subscription;
    protected documentClick: Observable<{}>;
    protected wrapperBlurred: EventEmitter<any>;
    constructor(focusService: FocusService, navigationService: NavigationService, wrapperRef: ElementRef, _zone: NgZone);
    readonly popupClasses: string;
    openState: boolean;
    /**
     * @hidden
     */
    togglePopupVisibility(): void;
    /**
     * @hidden
     */
    onItemClick(index: number): void;
    ngOnDestroy(): void;
    protected subscribeEvents(): void;
    protected subscribeListItemFocusEvent(): void;
    protected subscribeComponentBlurredEvent(): void;
    protected subscribeNavigationEvents(): void;
    protected enterHanlder(): void;
    protected unsubscribeEvents(): void;
    protected unsubscribe(subscription: Subscription): void;
    protected keyDownHandler(event: any): void;
    protected keyPressHandler(event: any): void;
    protected keyUpHandler(event: any): void;
    /**
     * @hidden
     */
    keyHandler(event: any, keyEvent?: KeyEvents): void;
    protected emitItemClickHandler(index: number): void;
    protected focusFirstItem(): void;
    protected focusWrapper(): void;
    /**
     * @hidden
     */
    blurHandler(): void;
    protected wrapperContains(element: any): boolean;
    protected blurWrapper(): void;
}
