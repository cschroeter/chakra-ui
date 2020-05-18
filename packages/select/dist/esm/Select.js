import { __assign, __rest } from "tslib";
import { useFormControl } from "@chakra-ui/form-control";
import { chakra, layoutPropNames, useComponentStyle, useCss, } from "@chakra-ui/system";
import { split, __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
import { cloneElement, forwardRef } from "react";
var StyledSelect = chakra("select", {
    themeKey: "Select",
    baseStyle: {
        appearance: "none",
        width: "100%",
        paddingBottom: "1px",
        paddingRight: "2rem",
    },
    shouldForwardProp: function (prop) {
        return !["focusBorderColor", "errorBorderColor"].includes(prop);
    },
});
/**
 * The native `select` element enhanced for accessibility and validation.
 */
export var SelectField = forwardRef(function (props, ref) {
    var children = props.children, placeholder = props.placeholder, rest = __rest(props, ["children", "placeholder"]);
    var fieldProps = useFormControl(props);
    return (React.createElement(StyledSelect, __assign({ ref: ref }, rest, fieldProps, { className: cx("chakra-select", props.className) }),
        placeholder && React.createElement("option", { value: "" }, placeholder),
        children));
});
if (__DEV__) {
    SelectField.displayName = "SelectField";
}
/**
 * React component used to select one item from a list of options.
 */
export var Select = forwardRef(function (props, ref) {
    var rootProps = props.rootProps, placeholder = props.placeholder, icon = props.icon, _a = props.iconSize, iconSize = _a === void 0 ? "1.25rem" : _a, iconColor = props.iconColor, color = props.color, isFullWidth = props.isFullWidth, rest = __rest(props, ["rootProps", "placeholder", "icon", "iconSize", "iconColor", "color", "isFullWidth"]);
    var opacity = props.isDisabled ? 0.5 : undefined;
    var _b = split(rest, layoutPropNames), layoutProps = _b[0], otherProps = _b[1];
    var styles = useComponentStyle(__assign({ themeKey: "Select" }, props));
    return (React.createElement(chakra.div, __assign({ position: "relative", width: isFullWidth ? "100%" : "auto", color: color, className: "chakra-select__wrapper" }, layoutProps, rootProps),
        React.createElement(SelectField, __assign({ ref: ref, placeholder: placeholder }, otherProps), props.children),
        React.createElement(SelectIcon, { opacity: opacity, iconSize: iconSize, iconColor: iconColor || (styles === null || styles === void 0 ? void 0 : styles.color), children: icon })));
});
if (__DEV__) {
    Select.displayName = "Select";
}
export var DefaultIcon = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 24 24" }, props, { className: cx("chakra-select__icon", props.className) }),
    React.createElement("path", { fill: "currentColor", d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }))); };
var SelectIconWrapper = chakra("div", {
    baseStyle: {
        position: "absolute",
        display: "inline-flex",
        width: "1.5rem",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        right: "0.5rem",
        pointerEvents: "none",
        zIndex: 2,
        top: "50%",
        transform: "translateY(-50%)",
    },
});
function SelectIcon(props) {
    var _a = props.children, children = _a === void 0 ? React.createElement(DefaultIcon, null) : _a, _b = props.iconColor, iconColor = _b === void 0 ? "inherit" : _b, iconSize = props.iconSize, rest = __rest(props, ["children", "iconColor", "iconSize"]);
    var style = useCss({
        color: iconColor,
        width: iconSize,
        height: iconSize,
        fontSize: "1em",
    });
    var clone = cloneElement(children, {
        role: "presentation",
        focusable: false,
        "aria-hidden": true,
        style: style,
    });
    return (React.createElement(SelectIconWrapper, __assign({}, rest, { className: "chakra-select__icon-wrapper", children: clone })));
}
if (__DEV__) {
    SelectIcon.displayName = "SelectIcon";
}
//# sourceMappingURL=Select.js.map