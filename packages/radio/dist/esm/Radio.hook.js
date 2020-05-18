import { __assign, __rest } from "tslib";
import { useBoolean, useControllableProp } from "@chakra-ui/hooks";
import { dataAttr, ariaAttr, callAllHandlers, mergeRefs, } from "@chakra-ui/utils";
import { visuallyHiddenStyle } from "@chakra-ui/visually-hidden";
import { useCallback, useRef, useState, } from "react";
export function useRadio(props) {
    if (props === void 0) { props = {}; }
    var defaultIsChecked = props.defaultIsChecked, isCheckedProp = props.isChecked, isFocusable = props.isFocusable, isDisabled = props.isDisabled, isReadOnly = props.isReadOnly, isRequired = props.isRequired, onChange = props.onChange, isInvalid = props.isInvalid, name = props.name, value = props.value, id = props.id, htmlProps = __rest(props, ["defaultIsChecked", "isChecked", "isFocusable", "isDisabled", "isReadOnly", "isRequired", "onChange", "isInvalid", "name", "value", "id"]);
    var _a = useBoolean(), isFocused = _a[0], setFocused = _a[1];
    var _b = useBoolean(), isHovered = _b[0], setHovering = _b[1];
    var _c = useBoolean(), isActive = _c[0], setActive = _c[1];
    var ref = useRef(null);
    var _d = useState(Boolean(defaultIsChecked)), isCheckedState = _d[0], setChecked = _d[1];
    var _e = useControllableProp(isCheckedProp, isCheckedState), isControlled = _e[0], isChecked = _e[1];
    var handleChange = function (event) {
        if (isReadOnly || isDisabled) {
            event.preventDefault();
            return;
        }
        if (!isControlled) {
            setChecked(event.target.checked);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    var trulyDisabled = isDisabled && !isFocusable;
    var onKeyDown = useCallback(function (event) {
        if (event.key === " ") {
            setActive.on();
        }
    }, [setActive]);
    var onKeyUp = useCallback(function (event) {
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
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired,
        },
        getCheckboxProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { "data-active": dataAttr(isActive), "data-hover": dataAttr(isHovered), "data-disabled": dataAttr(isDisabled), "data-invalid": dataAttr(isInvalid), "data-checked": dataAttr(isChecked), "data-focus": dataAttr(isFocused), "data-readonly": dataAttr(isReadOnly), "aria-hidden": true, onMouseDown: callAllHandlers(props.onMouseDown, setActive.on), onMouseUp: callAllHandlers(props.onMouseUp, setActive.off), onMouseEnter: callAllHandlers(props.onMouseEnter, setHovering.on), onMouseLeave: callAllHandlers(props.onMouseLeave, setHovering.off) }));
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(props.ref, ref), type: "radio", name: name,
                value: value,
                id: id, onChange: callAllHandlers(props.onChange, handleChange), onBlur: callAllHandlers(props.onBlur, setFocused.off), onFocus: callAllHandlers(props.onFocus, setFocused.on), onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown), onKeyUp: callAllHandlers(props.onKeyUp, onKeyUp), "aria-required": ariaAttr(isRequired), checked: isChecked, disabled: trulyDisabled, readOnly: isReadOnly, "aria-invalid": ariaAttr(isInvalid), "aria-disabled": ariaAttr(isDisabled), style: visuallyHiddenStyle }));
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
//# sourceMappingURL=Radio.hook.js.map