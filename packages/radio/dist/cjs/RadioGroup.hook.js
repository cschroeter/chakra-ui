"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRadioGroup = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
/**
 * React hook to manage a group of radio inputs
 */
function useRadioGroup(props) {
    if (props === void 0) { props = {}; }
    var onChangeProp = props.onChange, valueProp = props.value, defaultValue = props.defaultValue, nameProp = props.name, isNative = props.isNative, htmlProps = tslib_1.__rest(props, ["onChange", "value", "defaultValue", "name", "isNative"]);
    var _a = react_1.useState(defaultValue || ""), valueState = _a[0], setValue = _a[1];
    var _b = hooks_1.useControllableProp(valueProp, valueState), isControlled = _b[0], value = _b[1];
    var ref = react_1.useRef(null);
    var focus = react_1.useCallback(function () {
        var rootNode = ref.current;
        if (!rootNode)
            return;
        var query = "input:not(:disabled):checked";
        var firstEnabledAndCheckedInput = rootNode.querySelector(query);
        if (firstEnabledAndCheckedInput) {
            firstEnabledAndCheckedInput.focus();
            return;
        }
        query = "input:not(:disabled)";
        var firstEnabledInput = rootNode.querySelector(query);
        firstEnabledInput === null || firstEnabledInput === void 0 ? void 0 : firstEnabledInput.focus();
    }, []);
    /**
     * All radio options must use the same name
     */
    var name = hooks_1.useId(nameProp, "radio");
    var onChange = react_1.useCallback(function (eventOrValue) {
        var nextValue = utils_1.isInputEvent(eventOrValue)
            ? eventOrValue.target.value
            : eventOrValue;
        if (!isControlled) {
            setValue(nextValue);
        }
        onChangeProp === null || onChangeProp === void 0 ? void 0 : onChangeProp(nextValue);
    }, [onChangeProp, isControlled]);
    return {
        getRootProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(props.ref, ref), role: "radiogroup" }));
        },
        getRadioProps: function (props) {
            var _a;
            if (props === void 0) { props = {}; }
            var checkedKey = isNative ? "checked" : "isChecked";
            return tslib_1.__assign(tslib_1.__assign({}, props), (_a = { name: name }, _a[checkedKey] = props.value === value, _a.onChange = onChange, _a));
        },
        name: name,
        ref: ref,
        focus: focus,
        setValue: setValue,
        value: value,
        onChange: onChange,
        htmlProps: htmlProps,
    };
}
exports.useRadioGroup = useRadioGroup;
//# sourceMappingURL=RadioGroup.hook.js.map