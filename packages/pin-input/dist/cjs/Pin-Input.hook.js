"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePinInputField = exports.usePinInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var descendant_1 = require("@chakra-ui/descendant");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
function toArray(value) {
    return value === null || value === void 0 ? void 0 : value.split("");
}
function usePinInput(props) {
    if (props === void 0) { props = {}; }
    var autoFocus = props.autoFocus, value = props.value, defaultValue = props.defaultValue, onChange = props.onChange, onComplete = props.onComplete, _a = props.placeholder, placeholder = _a === void 0 ? "○" : _a;
    var domContext = descendant_1.useDescendants();
    var descendants = domContext.descendants;
    var _b = react_1.useState(true), moveFocus = _b[0], setMoveFocus = _b[1];
    var _c = hooks_1.useControllableState({
        defaultValue: toArray(defaultValue) || [],
        value: toArray(value),
        onChange: function (values) { return onChange === null || onChange === void 0 ? void 0 : onChange(values.join("")); },
    }), values = _c[0], setValues = _c[1];
    react_1.useEffect(function () {
        var _a;
        if (autoFocus) {
            var firstInput = descendants[0];
            (_a = firstInput === null || firstInput === void 0 ? void 0 : firstInput.element) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [descendants, autoFocus]);
    var focusNext = react_1.useCallback(function (index) {
        var _a;
        if (!moveFocus)
            return;
        var nextInput = descendants[index + 1];
        (_a = nextInput === null || nextInput === void 0 ? void 0 : nextInput.element) === null || _a === void 0 ? void 0 : _a.focus();
    }, [descendants, moveFocus]);
    var setValue = react_1.useCallback(function (value, index) {
        var nextValues = tslib_1.__spreadArrays(values);
        nextValues[index] = value;
        setValues(nextValues);
        // if we're at the last input, call onComplete (no need to move focus)
        if (index === descendants.length - 1) {
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(nextValues.join(""));
        }
        else {
            focusNext(index);
        }
    }, [values, setValues, focusNext, onComplete, descendants.length]);
    var clear = React.useCallback(function () {
        var _a;
        var values = Array(descendants.length).fill("");
        setValues(values);
        var firstInput = descendants[0];
        (_a = firstInput.element) === null || _a === void 0 ? void 0 : _a.focus();
    }, [descendants, setValues]);
    return {
        domContext: domContext,
        setValue: setValue,
        values: values,
        setValues: setValues,
        setMoveFocus: setMoveFocus,
        clear: clear,
        onComplete: onComplete,
        placeholder: placeholder,
    };
}
exports.usePinInput = usePinInput;
function usePinInputField(props) {
    var context = props.context, forwardedRef = props.ref, htmlProps = tslib_1.__rest(props, ["context", "ref"]);
    var ref = React.useRef(null);
    var setValue = context.setValue, values = context.values, setMoveFocus = context.setMoveFocus, setValues = context.setValues, domContext = context.domContext, placeholder = context.placeholder;
    var descendants = domContext.descendants;
    var index = descendant_1.useDescendant({
        context: domContext,
        element: ref.current,
    });
    var getNextValue = React.useCallback(function (currentValue, eventValue) {
        var nextValue = eventValue;
        if (currentValue && currentValue.length > 0) {
            if (currentValue[0] === eventValue[0]) {
                nextValue = eventValue[1];
            }
            else if (currentValue[0] === eventValue[1]) {
                nextValue = eventValue[0];
            }
        }
        return nextValue;
    }, []);
    var onChange = react_1.useCallback(function (event) {
        var eventValue = event.target.value;
        var currentValue = values[index];
        var nextValue = getNextValue(currentValue, eventValue);
        // if the value was removed using backspace
        if (nextValue === "") {
            setValue("", index);
            return;
        }
        // in the case of an autocomplete or copy and paste
        if (eventValue.length > 2) {
            // see if we can use the string to fill out our values
            if (eventValue.match(/^[0-9]+$/)) {
                var length_1 = descendants.length;
                // ensure the value matches the number of inputs
                var nextValue_1 = eventValue.split("").filter(function (_, i) { return i < length_1; });
                setValues(nextValue_1);
            }
            return;
        }
        // only set if the new value is a number
        if (nextValue.match(/^[0-9]$/)) {
            setValue(nextValue, index);
        }
        setMoveFocus(true);
    }, [
        values,
        index,
        getNextValue,
        setMoveFocus,
        setValue,
        descendants.length,
        setValues,
    ]);
    var onKeyDown = react_1.useCallback(function (event) {
        var _a;
        if (event.key === "Backspace") {
            //@ts-ignore
            if (event.target.value === "") {
                if (descendants[index - 1]) {
                    setValue("", index - 1);
                    var prevInput = descendants[index - 1];
                    (_a = prevInput.element) === null || _a === void 0 ? void 0 : _a.focus();
                    setMoveFocus(true);
                }
            }
            else {
                setMoveFocus(false);
            }
        }
    }, [descendants, index, setValue, setMoveFocus]);
    var _a = react_1.useState(false), hasFocus = _a[0], setHasFocus = _a[1];
    var onFocus = react_1.useCallback(function () {
        setHasFocus(true);
    }, []);
    var onBlur = react_1.useCallback(function () {
        setHasFocus(false);
    }, []);
    var value = values[index] || "";
    return tslib_1.__assign(tslib_1.__assign({}, htmlProps), { ref: utils_1.mergeRefs(ref, forwardedRef), onChange: utils_1.callAllHandlers(htmlProps.onChange, onChange), onKeyDown: utils_1.callAllHandlers(htmlProps.onKeyDown, onKeyDown), onFocus: utils_1.callAllHandlers(htmlProps.onFocus, onFocus), onBlur: utils_1.callAllHandlers(htmlProps.onBlur, onBlur), value: value, inputMode: "numeric", "aria-label": "Please enter your pin code", autoComplete: "not-allowed", placeholder: hasFocus ? "" : placeholder });
}
exports.usePinInputField = usePinInputField;
//# sourceMappingURL=Pin-Input.hook.js.map