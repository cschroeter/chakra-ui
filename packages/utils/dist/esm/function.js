import { isFunction } from "./assertion";
import memoizeOne from "memoize-one";
export function runIfFn(valueOrFn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return isFunction(valueOrFn) ? valueOrFn.apply(void 0, args) : valueOrFn;
}
export function callAllHandlers() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (event) {
        fns.some(function (fn) {
            fn && fn(event);
            return event && event.defaultPrevented;
        });
    };
}
export { memoizeOne };
export function once(fn) {
    var result;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (fn) {
            result = fn.apply(this, args);
            fn = null;
        }
        return result;
    };
}
export var noop = function () { };
//# sourceMappingURL=function.js.map