"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useControllableState = exports.useControllableProp = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
function useControllableProp(propValue, stateValue) {
    var isControlled = react_1.useRef(propValue !== undefined).current;
    var value = isControlled && typeof propValue !== "undefined" ? propValue : stateValue;
    return [isControlled, value];
}
exports.useControllableProp = useControllableProp;
var defaultPropsMap = {
    value: "value",
    defaultValue: "defaultValue",
    onChange: "onChange",
};
/**
 * React hook for using controlling component state.
 * @param props
 */
function useControllableState(props) {
    var valueProp = props.value, defaultValue = props.defaultValue, onChange = props.onChange, _a = props.shouldUpdate, shouldUpdate = _a === void 0 ? function () { return true; } : _a, _b = props.name, name = _b === void 0 ? "Component" : _b, _c = props.propsMap, propsMap = _c === void 0 ? defaultPropsMap : _c;
    var _d = react_1.useState(defaultValue), valueState = _d[0], setValue = _d[1];
    var isControlled = react_1.useRef(valueProp !== undefined).current;
    // don't switch from controlled to uncontrolled
    react_1.useEffect(function () {
        var nextIsControlled = valueProp !== undefined;
        var nextMode = nextIsControlled ? "a controlled" : "an uncontrolled";
        var mode = isControlled ? "a controlled" : "an uncontrolled";
        utils_1.warn({
            condition: isControlled !== nextIsControlled,
            message: "Warning: " + name + " is changing from " + mode + " to " + nextMode + " component. " +
                "Components should not switch from controlled to uncontrolled (or vice versa). " +
                ("Use the '" + propsMap["value"] + "' with an '" + propsMap["onChange"] + "' handler. ") +
                ("If you want an uncontrolled component, remove the " + propsMap["value"] + " prop and use '" + propsMap["defaultValue"] + "' instead. \"") +
                "More info: https://fb.me/react-controlled-components",
        });
    }, [valueProp, isControlled, name]);
    var _defaultValue = react_1.useRef(defaultValue).current;
    react_1.useEffect(function () {
        utils_1.warn({
            condition: _defaultValue !== defaultValue,
            message: "Warning: A component is changing the default value of an uncontrolled " + name + " after being initialized. " +
                ("To suppress this warning opt to use a controlled " + name + "."),
        });
    }, [JSON.stringify(defaultValue)]);
    var value = isControlled ? valueProp : valueState;
    var updateValue = react_1.useCallback(function (next) {
        var nextValue = utils_1.runIfFn(next, value);
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
exports.useControllableState = useControllableState;
//# sourceMappingURL=useControllable.js.map