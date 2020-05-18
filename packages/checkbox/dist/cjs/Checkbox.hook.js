"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckbox = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var visually_hidden_1 = require("@chakra-ui/visually-hidden");
var React = tslib_1.__importStar(require("react"));
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
function useCheckbox(props) {
    if (props === void 0) { props = {}; }
    var defaultIsChecked = props.defaultIsChecked, checkedProp = props.isChecked, isFocusable = props.isFocusable, isDisabled = props.isDisabled, isReadOnly = props.isReadOnly, isRequired = props.isRequired, onChange = props.onChange, isIndeterminate = props.isIndeterminate, isInvalid = props.isInvalid, name = props.name, value = props.value, id = props.id, htmlProps = tslib_1.__rest(props, ["defaultIsChecked", "isChecked", "isFocusable", "isDisabled", "isReadOnly", "isRequired", "onChange", "isIndeterminate", "isInvalid", "name", "value", "id"]);
    var _a = hooks_1.useBoolean(), isFocused = _a[0], setFocused = _a[1];
    var _b = hooks_1.useBoolean(), isHovered = _b[0], setHovered = _b[1];
    var _c = hooks_1.useBoolean(), isActive = _c[0], setActive = _c[1];
    var ref = React.useRef(null);
    var _d = React.useState(!!defaultIsChecked), checkedState = _d[0], setCheckedState = _d[1];
    var _e = hooks_1.useControllableProp(checkedProp, checkedState), isControlled = _e[0], isChecked = _e[1];
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
    hooks_1.useSafeLayoutEffect(function () {
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
            return (tslib_1.__assign(tslib_1.__assign({}, props), { "data-active": utils_1.dataAttr(isActive), "data-hover": utils_1.dataAttr(isHovered), "data-checked": utils_1.dataAttr(isChecked), "data-focus": utils_1.dataAttr(isFocused), "data-indeterminate": utils_1.dataAttr(isIndeterminate), "data-disabled": utils_1.dataAttr(isDisabled), "data-invalid": utils_1.dataAttr(isInvalid), "data-readonly": utils_1.dataAttr(isReadOnly), "aria-hidden": true, onMouseDown: utils_1.callAllHandlers(props.onMouseDown, setActive.on), onMouseUp: utils_1.callAllHandlers(props.onMouseUp, setActive.off), onMouseEnter: utils_1.callAllHandlers(props.onMouseEnter, setHovered.on), onMouseLeave: utils_1.callAllHandlers(props.onMouseLeave, setHovered.off), style: tslib_1.__assign({ touchAction: "none" }, props.style) }));
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(ref, props.ref), type: "checkbox", name: name,
                value: value,
                id: id, onChange: utils_1.callAllHandlers(props.onChange, handleChange), onBlur: utils_1.callAllHandlers(props.onBlur, setFocused.off), onFocus: utils_1.callAllHandlers(props.onFocus, setFocused.on), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, handleKeyDown), onKeyUp: utils_1.callAllHandlers(props.onKeyUp, handleKeyUp), required: isRequired, checked: isChecked, disabled: trulyDisabled, readOnly: isReadOnly, "aria-invalid": isInvalid, "aria-disabled": isDisabled, style: visually_hidden_1.visuallyHiddenStyle }));
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
            return tslib_1.__assign(tslib_1.__assign({}, props), { style: tslib_1.__assign(tslib_1.__assign({}, props.style), { touchAction: "none" }), onMouseDown: utils_1.callAllHandlers(props.onMouseDown, stop), onTouchStart: utils_1.callAllHandlers(props.onTouchState, stop), "data-disabled": utils_1.dataAttr(isDisabled), " data-checked": utils_1.dataAttr(isChecked), "data-invalid": utils_1.dataAttr(isInvalid) });
        },
        htmlProps: htmlProps,
    };
}
exports.useCheckbox = useCheckbox;
//# sourceMappingURL=Checkbox.hook.js.map