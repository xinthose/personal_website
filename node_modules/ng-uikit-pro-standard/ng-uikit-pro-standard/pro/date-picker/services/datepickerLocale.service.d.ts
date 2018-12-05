import { IMyLocales, IMyOptions } from '../interfaces/index';
export declare class LocaleService {
    locales: IMyLocales;
    getLocaleOptions(locale: string): IMyOptions;
}
