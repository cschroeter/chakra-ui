import { __assign } from "tslib";
import { useControllableProp } from "@chakra-ui/hooks";
import { isInputEvent, addItem, removeItem, } from "@chakra-ui/utils";
import { useState, useCallback } from "react";
/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 */
export function useCheckboxGroup(props) {
    if (props === void 0) { props = {}; }
    var defaultValue = props.defaultValue, valueProp = props.value, onChangeProp = props.onChange, isNative = props.isNative;
    var _a = useState(defaultValue || []), valueState = _a[0], setValue = _a[1];
    var _b = useControllableProp(valueProp, valueState), isControlled = _b[0], value = _b[1];
    var updateValue = useCallback(function (nextState) {
        if (!isControlled) {
            setValue(nextState);
        }
        onChangeProp === null || onChangeProp === void 0 ? void 0 : onChangeProp(nextState);
    }, [isControlled, onChangeProp]);
    var onChange = useCallback(function (eventOrValue) {
        if (!value)
            return;
        var isChecked = isInputEvent(eventOrValue)
            ? eventOrValue.target.checked
            : !value.includes(eventOrValue);
        var selectedValue = isInputEvent(eventOrValue)
            ? eventOrValue.target.value
            : eventOrValue;
        var nextValue = isChecked
            ? addItem(value, selectedValue)
            : removeItem(value, selectedValue);
        updateValue(nextValue);
    }, [updateValue, value]);
    return {
        value: value,
        onChange: onChange,
        setValue: updateValue,
        getCheckboxProps: function (props) {
            var _a;
            if (props === void 0) { props = {}; }
            var checkedKey = isNative ? "checked" : "isChecked";
            return __assign(__assign({}, props), (_a = {}, _a[checkedKey] = value.includes(props.value), _a.onChange = onChange, _a));
        },
    };
}
//# sourceMappingURL=CheckboxGroup.hook.js.map