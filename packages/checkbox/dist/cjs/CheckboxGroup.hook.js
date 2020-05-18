"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckboxGroup = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 */
function useCheckboxGroup(props) {
    if (props === void 0) { props = {}; }
    var defaultValue = props.defaultValue, valueProp = props.value, onChangeProp = props.onChange, isNative = props.isNative;
    var _a = react_1.useState(defaultValue || []), valueState = _a[0], setValue = _a[1];
    var _b = hooks_1.useControllableProp(valueProp, valueState), isControlled = _b[0], value = _b[1];
    var updateValue = react_1.useCallback(function (nextState) {
        if (!isControlled) {
            setValue(nextState);
        }
        onChangeProp === null || onChangeProp === void 0 ? void 0 : onChangeProp(nextState);
    }, [isControlled, onChangeProp]);
    var onChange = react_1.useCallback(function (eventOrValue) {
        if (!value)
            return;
        var isChecked = utils_1.isInputEvent(eventOrValue)
            ? eventOrValue.target.checked
            : !value.includes(eventOrValue);
        var selectedValue = utils_1.isInputEvent(eventOrValue)
            ? eventOrValue.target.value
            : eventOrValue;
        var nextValue = isChecked
            ? utils_1.addItem(value, selectedValue)
            : utils_1.removeItem(value, selectedValue);
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
            return tslib_1.__assign(tslib_1.__assign({}, props), (_a = {}, _a[checkedKey] = value.includes(props.value), _a.onChange = onChange, _a));
        },
    };
}
exports.useCheckboxGroup = useCheckboxGroup;
//# sourceMappingURL=CheckboxGroup.hook.js.map