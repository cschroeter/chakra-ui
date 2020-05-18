"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = exports.once = exports.memoizeOne = exports.callAllHandlers = exports.runIfFn = void 0;
var tslib_1 = require("tslib");
var assertion_1 = require("./assertion");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
exports.memoizeOne = memoize_one_1.default;
function runIfFn(valueOrFn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return assertion_1.isFunction(valueOrFn) ? valueOrFn.apply(void 0, args) : valueOrFn;
}
exports.runIfFn = runIfFn;
function callAllHandlers() {
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
exports.callAllHandlers = callAllHandlers;
function once(fn) {
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
exports.once = once;
exports.noop = function () { };
//# sourceMappingURL=function.js.map