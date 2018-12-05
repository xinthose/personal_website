import { AfterViewInit, EventEmitter, OnChanges, OnInit, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { Option } from './option';
import { OptionList } from './option-list';
export declare class SelectDropdownComponent implements AfterViewInit, OnChanges, OnInit {
    private _elementRef;
    _renderer: Renderer2;
    private cdRef;
    filterEnabled: boolean;
    highlightColor: string;
    highlightTextColor: string;
    left: number;
    multiple: boolean;
    notFoundMsg: string;
    optionList: OptionList;
    top: number;
    width: number;
    placeholder: string;
    customClass: string;
    visibleOptions: number;
    dropdownHeight: number;
    dropdownMaxHeight: number;
    close: EventEmitter<boolean>;
    optionClicked: EventEmitter<Option>;
    singleFilterClick: EventEmitter<null>;
    singleFilterInput: EventEmitter<string>;
    singleFilterKeydown: EventEmitter<any>;
    filterInput: any;
    optionsList: any;
    dropdownContent: ElementRef;
    disabledColor: string;
    disabledTextColor: string;
    state: string;
    startHeight: any;
    endHeight: any;
    hasOptionsItems: boolean;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, cdRef: ChangeDetectorRef);
    /** Event handlers. **/
    onkeyup(): void;
    ngOnInit(): void;
    setDropdownHeight(): void;
    setVisibleOptionsNumber(): void;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    onSingleFilterClick(): void;
    onSingleFilterInput(event: any): void;
    onSingleFilterKeydown(event: any): void;
    onOptionsWheel(event: any): void;
    onOptionMouseover(option: Option): void;
    onOptionClick(option: Option): void;
    /** Initialization. **/
    private optionsReset;
    /** View. **/
    getOptionStyle(option: Option): any;
    clearFilterInput(): void;
    moveHighlightedIntoView(): void;
    private handleOptionsWheel;
}
