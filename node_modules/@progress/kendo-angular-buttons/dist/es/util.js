/* tslint:disable:no-null-keyword */
/* tslint:disable:no-bitwise */
var resolvedPromise = Promise.resolve(null);
/**
 * @hidden
 */
export var isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 */
export var tick = function (f) { return (resolvedPromise.then(f)); };
