import { __assign, __rest } from "tslib";
import { useControllableProp, useId } from "@chakra-ui/hooks";
import { isInputEvent, mergeRefs } from "@chakra-ui/utils";
import { useCallback, useRef, useState } from "react";
/**
 * React hook to manage a group of radio inputs
 */
export function useRadioGroup(props) {
    if (props === void 0) { props = {}; }
    var onChangeProp = props.onChange, valueProp = props.value, defaultValue = props.defaultValue, nameProp = props.name, isNative = props.isNative, htmlProps = __rest(props, ["onChange", "value", "defaultValue", "name", "isNative"]);
    var _a = useState(defaultValue || ""), valueState = _a[0], setValue = _a[1];
    var _b = useControllableProp(valueProp, valueState), isControlled = _b[0], value = _b[1];
    var ref = useRef(null);
    var focus = useCallback(function () {
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
    var name = useId(nameProp, "radio");
    var onChange = useCallback(function (eventOrValue) {
        var nextValue = isInputEvent(eventOrValue)
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
            return (__assign(__assign({}, props), { ref: mergeRefs(props.ref, ref), role: "radiogroup" }));
        },
        getRadioProps: function (props) {
            var _a;
            if (props === void 0) { props = {}; }
            var checkedKey = isNative ? "checked" : "isChecked";
            return __assign(__assign({}, props), (_a = { name: name }, _a[checkedKey] = props.value === value, _a.onChange = onChange, _a));
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
//# sourceMappingURL=RadioGroup.hook.js.map