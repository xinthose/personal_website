import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ButtonDirective } from "./button.directive";
/**
 * @hidden
 */
export declare class KendoButtonService {
    buttonClicked: Subject<ButtonDirective>;
    buttonClicked$: Observable<ButtonDirective>;
    click(button: ButtonDirective): void;
}
