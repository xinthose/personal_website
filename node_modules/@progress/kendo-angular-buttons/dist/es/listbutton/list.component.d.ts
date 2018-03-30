import { EventEmitter } from '@angular/core';
import { ListItemModel } from './list-item-model';
import { ButtonItemTemplateDirective } from './button-item-template.directive';
/**
 * @hidden
 */
export declare class ListComponent {
    data: Array<ListItemModel>;
    textField: string;
    itemTemplate: ButtonItemTemplateDirective;
    onItemClick: EventEmitter<number>;
    onItemBlur: EventEmitter<any>;
    getText(dataItem: any): any;
    getIconClasses(dataItem: ListItemModel): any;
    onClick(index: number): void;
    onBlur(): void;
}
