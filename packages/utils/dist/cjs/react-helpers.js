"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRefs = exports.assignRef = exports.getValidChildren = exports.createContext = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var assertion_1 = require("./assertion");
/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
function createContext(options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? true : _a, _b = options.errorMessage, errorMessage = _b === void 0 ? "useContext must be inside a Provider with a value" : _b, name = options.name;
    var Context = React.createContext(undefined);
    Context.displayName = name;
    function useContext() {
        var context = React.useContext(Context);
        if (!context && strict)
            throw new Error(errorMessage);
        return context;
    }
    return [Context.Provider, useContext, Context];
}
exports.createContext = createContext;
/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
function getValidChildren(children) {
    return React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
}
exports.getValidChildren = getValidChildren;
/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
function assignRef(ref, value) {
    if (ref == null)
        return;
    if (assertion_1.isFunction(ref)) {
        ref(value);
        return;
    }
    try {
        ;
        ref.current = value;
    }
    catch (error) {
        throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
    }
}
exports.assignRef = assignRef;
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
function mergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        refs.forEach(function (ref) { return assignRef(ref, value); });
    };
}
exports.mergeRefs = mergeRefs;
//# sourceMappingURL=react-helpers.js.map