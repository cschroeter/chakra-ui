import { __assign, __rest } from "tslib";
import { useBoolean, useControllableProp, useSafeLayoutEffect, } from "@chakra-ui/hooks";
import { callAllHandlers, dataAttr, mergeRefs } from "@chakra-ui/utils";
import { visuallyHiddenStyle } from "@chakra-ui/visually-hidden";
import * as React from "react";
/**
 * useCheckbox
 *
 * React hook that provides all the state and focus management logic
 * for a checkbox.
 *
 * It is consumed by the `Checkbox` component
 *
 * @see Docs https://chakra-ui.com/useCheckbox
 */
export function useCheckbox(props) {
    if (props === void 0) { props = {}; }
    var defaultIsChecked = props.defaultIsChecked, checkedProp = props.isChecked, isFocusable = props.isFocusable, isDisabled = props.isDisabled, isReadOnly = props.isReadOnly, isRequired = props.isRequired, onChange = props.onChange, isIndeterminate = props.isIndeterminate, isInvalid = props.isInvalid, name = props.name, value = props.value, id = props.id, htmlProps = __rest(props, ["defaultIsChecked", "isChecked", "isFocusable", "isDisabled", "isReadOnly", "isRequired", "onChange", "isIndeterminate", "isInvalid", "name", "value", "id"]);
    var _a = useBoolean(), isFocused = _a[0], setFocused = _a[1];
    var _b = useBoolean(), isHovered = _b[0], setHovered = _b[1];
    var _c = useBoolean(), isActive = _c[0], setActive = _c[1];
    var ref = React.useRef(null);
    var _d = React.useState(!!defaultIsChecked), checkedState = _d[0], setCheckedState = _d[1];
    var _e = useControllableProp(checkedProp, checkedState), isControlled = _e[0], isChecked = _e[1];
    var handleChange = React.useCallback(function (event) {
        if (isReadOnly || isDisabled) {
            event.preventDefault();
            return;
        }
        if (!isControlled) {
            if (isChecked) {
                setCheckedState(event.target.checked);
            }
            else {
                setCheckedState(isIndeterminate ? true : event.target.checked);
            }
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [
        isReadOnly,
        isDisabled,
        isChecked,
        isControlled,
        isIndeterminate,
        onChange,
    ]);
    useSafeLayoutEffect(function () {
        if (ref.current) {
            ref.current.indeterminate = Boolean(isIndeterminate);
        }
    }, [isIndeterminate]);
    var trulyDisabled = isDisabled && !isFocusable;
    var handleKeyDown = React.useCallback(function (event) {
        if (event.key === " ") {
            setActive.on();
        }
    }, [setActive]);
    var handleKeyUp = React.useCallback(function (event) {
        if (event.key === " ") {
            setActive.off();
        }
    }, [setActive]);
    return {
        state: {
            isInvalid: isInvalid,
            isFocused: isFocused,
            isChecked: isChecked,
            isActive: isActive,
            isHovered: isHovered,
            isIndeterminate: isIndeterminate,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired,
        },
        getCheckboxProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { "data-active": dataAttr(isActive), "data-hover": dataAttr(isHovered), "data-checked": dataAttr(isChecked), "data-focus": dataAttr(isFocused), "data-indeterminate": dataAttr(isIndeterminate), "data-disabled": dataAttr(isDisabled), "data-invalid": dataAttr(isInvalid), "data-readonly": dataAttr(isReadOnly), "aria-hidden": true, onMouseDown: callAllHandlers(props.onMouseDown, setActive.on), onMouseUp: callAllHandlers(props.onMouseUp, setActive.off), onMouseEnter: callAllHandlers(props.onMouseEnter, setHovered.on), onMouseLeave: callAllHandlers(props.onMouseLeave, setHovered.off), style: __assign({ touchAction: "none" }, props.style) }));
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(ref, props.ref), type: "checkbox", name: name,
                value: value,
                id: id, onChange: callAllHandlers(props.onChange, handleChange), onBlur: callAllHandlers(props.onBlur, setFocused.off), onFocus: callAllHandlers(props.onFocus, setFocused.on), onKeyDown: callAllHandlers(props.onKeyDown, handleKeyDown), onKeyUp: callAllHandlers(props.onKeyUp, handleKeyUp), required: isRequired, checked: isChecked, disabled: trulyDisabled, readOnly: isReadOnly, "aria-invalid": isInvalid, "aria-disabled": isDisabled, style: visuallyHiddenStyle }));
        },
        getLabelProps: function (props) {
            if (props === void 0) { props = {}; }
            /**
             * Prevent `onBlur` being fired when the checkbox label is touched
             */
            var stop = function (event) {
                event.preventDefault();
                event.stopPropagation();
            };
            return __assign(__assign({}, props), { style: __assign(__assign({}, props.style), { touchAction: "none" }), onMouseDown: callAllHandlers(props.onMouseDown, stop), onTouchStart: callAllHandlers(props.onTouchState, stop), "data-disabled": dataAttr(isDisabled), " data-checked": dataAttr(isChecked), "data-invalid": dataAttr(isInvalid) });
        },
        htmlProps: htmlProps,
    };
}
//# sourceMappingURL=Checkbox.hook.js.map