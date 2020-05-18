/* eslint-disable react-hooks/exhaustive-deps */
import { runIfFn, warn } from "@chakra-ui/utils";
import { useRef, useState, useEffect, useCallback, } from "react";
export function useControllableProp(propValue, stateValue) {
    var isControlled = useRef(propValue !== undefined).current;
    var value = isControlled && typeof propValue !== "undefined" ? propValue : stateValue;
    return [isControlled, value];
}
var defaultPropsMap = {
    value: "value",
    defaultValue: "defaultValue",
    onChange: "onChange",
};
/**
 * React hook for using controlling component state.
 * @param props
 */
export function useControllableState(props) {
    var valueProp = props.value, defaultValue = props.defaultValue, onChange = props.onChange, _a = props.shouldUpdate, shouldUpdate = _a === void 0 ? function () { return true; } : _a, _b = props.name, name = _b === void 0 ? "Component" : _b, _c = props.propsMap, propsMap = _c === void 0 ? defaultPropsMap : _c;
    var _d = useState(defaultValue), valueState = _d[0], setValue = _d[1];
    var isControlled = useRef(valueProp !== undefined).current;
    // don't switch from controlled to uncontrolled
    useEffect(function () {
        var nextIsControlled = valueProp !== undefined;
        var nextMode = nextIsControlled ? "a controlled" : "an uncontrolled";
        var mode = isControlled ? "a controlled" : "an uncontrolled";
        warn({
            condition: isControlled !== nextIsControlled,
            message: "Warning: " + name + " is changing from " + mode + " to " + nextMode + " component. " +
                "Components should not switch from controlled to uncontrolled (or vice versa). " +
                ("Use the '" + propsMap["value"] + "' with an '" + propsMap["onChange"] + "' handler. ") +
                ("If you want an uncontrolled component, remove the " + propsMap["value"] + " prop and use '" + propsMap["defaultValue"] + "' instead. \"") +
                "More info: https://fb.me/react-controlled-components",
        });
    }, [valueProp, isControlled, name]);
    var _defaultValue = useRef(defaultValue).current;
    useEffect(function () {
        warn({
            condition: _defaultValue !== defaultValue,
            message: "Warning: A component is changing the default value of an uncontrolled " + name + " after being initialized. " +
                ("To suppress this warning opt to use a controlled " + name + "."),
        });
    }, [JSON.stringify(defaultValue)]);
    var value = isControlled ? valueProp : valueState;
    var updateValue = useCallback(function (next) {
        var nextValue = runIfFn(next, value);
        var shouldUpdateState = shouldUpdate(value, nextValue);
        if (!shouldUpdateState)
            return;
        if (!isControlled) {
            setValue(next);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
    }, [onChange, shouldUpdate, isControlled, value]);
    return [value, updateValue];
}
//# sourceMappingURL=useControllable.js.map