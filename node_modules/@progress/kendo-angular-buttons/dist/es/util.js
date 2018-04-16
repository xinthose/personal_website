/* tslint:disable:no-null-keyword */
/* tslint:disable:no-bitwise */
var resolvedPromise = Promise.resolve(null);
/**
 * @hidden
 */
export var isDocumentAvailable = function () {
    return typeof document !== 'undefined';
};
/**
 * @hidden
 */
export var isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 */
export var guid = function () {
    var id = "";
    var i;
    var random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
        }
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return id;
};
/**
 * @hidden
 */
export var tick = function (f) { return (resolvedPromise.then(f)); };
