import { skip } from "rxjs/operators";
/**
 * Base class that acts as a component messages container.
 *
 * For internal use.
 * @hidden
 */
export class ComponentMessages {
    get override() {
        return false;
    }
    ngOnChanges(changes) {
        this.register(changes);
        if (Object.keys(changes).some(field => !changes[field].isFirstChange())) {
            this.service.notifyChanges();
        }
    }
    ngOnInit() {
        this.subscription = this.service.changes.pipe(skip(1)).subscribe(() => this.register(this));
    }
    register(changes) {
        const keys = Object.keys(changes);
        keys.forEach(key => this.service.register(key, this[key], this.override));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
