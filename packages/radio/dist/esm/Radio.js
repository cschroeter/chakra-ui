import { __assign, __rest } from "tslib";
import { chakra, layoutPropNames, } from "@chakra-ui/system";
import { cx, split, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useRadio } from "./Radio.hook";
import { useRadioGroupContext } from "./RadioGroup";
var StyledControl = chakra("div", {
    themeKey: "Radio.Control",
    baseStyle: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
});
var StyledLabel = chakra("div", {
    themeKey: "Radio.Label",
    baseStyle: {
        userSelect: "none",
    },
});
/**
 * Radio
 *
 * Radio component is used in forms when a user needs to select a single value from
 * several options.
 *
 * @see Docs https://chakra-ui.com/radio
 */
export var Radio = React.forwardRef(function (props, ref) {
    var group = useRadioGroupContext();
    var _a = props.labelSpacing, labelSpacing = _a === void 0 ? "0.5rem" : _a, _b = props.colorScheme, colorScheme = _b === void 0 ? group === null || group === void 0 ? void 0 : group.colorScheme : _b, _c = props.variant, variant = _c === void 0 ? group === null || group === void 0 ? void 0 : group.variant : _c, _d = props.size, size = _d === void 0 ? group === null || group === void 0 ? void 0 : group.size : _d, children = props.children, radioProps = __rest(props, ["labelSpacing", "colorScheme", "variant", "size", "children"]);
    var isChecked = props.isChecked;
    if ((group === null || group === void 0 ? void 0 : group.value) && props.value) {
        isChecked = group.value === props.value;
    }
    var onChange = props.onChange;
    if ((group === null || group === void 0 ? void 0 : group.onChange) && props.value) {
        onChange = group.onChange;
    }
    var theming = { variant: variant, colorScheme: colorScheme, size: size };
    var _e = useRadio(__assign(__assign({}, radioProps), { isChecked: isChecked, onChange: onChange })), getInputProps = _e.getInputProps, getCheckboxProps = _e.getCheckboxProps, getLabelProps = _e.getLabelProps, rest = _e.htmlProps;
    var _f = split(rest, layoutPropNames), layoutProps = _f[0], otherProps = _f[1];
    return (React.createElement(chakra.label, __assign({ className: "chakra-radio", display: "inline-flex", alignItems: "center", verticalAlign: "top" }, layoutProps),
        React.createElement("input", __assign({ className: "chakra-radio__input" }, getInputProps({ ref: ref }))),
        React.createElement(StyledControl, __assign({}, theming, getCheckboxProps(otherProps), { className: cx("chakra-radio__control", props.className) })),
        children && (React.createElement(StyledLabel, __assign({ className: "chakra-radio__label" }, theming, getLabelProps(), { marginLeft: labelSpacing, children: children })))));
});
if (__DEV__) {
    Radio.displayName = "Radio";
}
//# sourceMappingURL=Radio.js.map