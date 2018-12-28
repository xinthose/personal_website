import { IMyDate } from '../interfaces/date.interface';
import { IMyDateRange } from '../interfaces/dateRange.interface';
import { IMyMonth } from '../interfaces/month.interface';
import { IMyMonthLabels } from '../interfaces/monthLabels.interface';
import { IMyMarkedDates } from '../interfaces/markedDates.interface';
import { IMyMarkedDate } from '../interfaces/markedDate.interface';
import { IMyDateFormat } from '../interfaces/my-date-format.interface';
export declare class UtilService {
    isDateValid(dateStr: string, dateFormat: string, minYear: number, maxYear: number, disableUntil: IMyDate, disableSince: IMyDate, disableWeekends: boolean, disableDays: Array<IMyDate>, disableDateRanges: Array<IMyDateRange>, monthLabels: IMyMonthLabels, enableDays: Array<IMyDate>): IMyDate;
    getDateValue(dateStr: string, dateFormat: string, delimeters: Array<string>): Array<IMyDateFormat>;
    getMonthNumberByMonthName(df: IMyDateFormat, monthLabels: IMyMonthLabels): number;
    getNumberByValue(df: IMyDateFormat): number;
    getDateFormatSeparator(dateFormat: string): string;
    getDateFormatDelimeters(dateFormat: string): Array<string> | any;
    isMonthLabelValid(monthLabel: string, monthLabels: IMyMonthLabels): number;
    isYearLabelValid(yearLabel: number, minYear: number, maxYear: number): number;
    parseDatePartNumber(dateFormat: string, dateString: string, datePart: string): number;
    parseDatePartMonthName(dateFormat: string, dateString: string, datePart: string, monthLabels: IMyMonthLabels): number;
    getDatePartIndex(dateFormat: string, datePart: string): number;
    parseDefaultMonth(monthString: string | any): IMyMonth;
    isDisabledDay(date: IMyDate, disableUntil: IMyDate, disableSince: IMyDate, disableWeekends: boolean, disableDays: Array<IMyDate>, disableDateRanges: Array<IMyDateRange>, enableDays: Array<IMyDate>): boolean;
    isMarkedDate(date: IMyDate, markedDates: Array<IMyMarkedDates>, markWeekends: IMyMarkedDate): IMyMarkedDate;
    getWeekNumber(date: IMyDate): number;
    isMonthDisabledByDisableUntil(date: IMyDate, disableUntil: IMyDate): boolean;
    isMonthDisabledByDisableSince(date: IMyDate, disableSince: IMyDate): boolean;
    isInitializedDate(date: IMyDate): boolean;
    getTimeInMilliseconds(date: IMyDate): number;
    getDayNumber(date: IMyDate): number;
}
