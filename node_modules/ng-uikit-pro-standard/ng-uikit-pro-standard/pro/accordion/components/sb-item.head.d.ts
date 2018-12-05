import { SBItemComponent } from './sb-item';
export declare class SBItemHeadComponent {
    private sbItem;
    isDisabled: boolean;
    customClass: string;
    indicator: boolean;
    constructor(sbItem: SBItemComponent);
    toggleClick(event: any): void;
}
