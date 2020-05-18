import * as React from "react";
import { isFunction } from "./assertion";
/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext(options) {
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
/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(children) {
    return React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
}
/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
export function assignRef(ref, value) {
    if (ref == null)
        return;
    if (isFunction(ref)) {
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
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
export function mergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        refs.forEach(function (ref) { return assignRef(ref, value); });
    };
}
//# sourceMappingURL=react-helpers.js.map