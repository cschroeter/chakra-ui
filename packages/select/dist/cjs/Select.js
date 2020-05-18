"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultIcon = exports.Select = exports.SelectField = void 0;
var tslib_1 = require("tslib");
var form_control_1 = require("@chakra-ui/form-control");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var StyledSelect = system_1.chakra("select", {
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
exports.SelectField = react_1.forwardRef(function (props, ref) {
    var children = props.children, placeholder = props.placeholder, rest = tslib_1.__rest(props, ["children", "placeholder"]);
    var fieldProps = form_control_1.useFormControl(props);
    return (React.createElement(StyledSelect, tslib_1.__assign({ ref: ref }, rest, fieldProps, { className: utils_1.cx("chakra-select", props.className) }),
        placeholder && React.createElement("option", { value: "" }, placeholder),
        children));
});
if (utils_1.__DEV__) {
    exports.SelectField.displayName = "SelectField";
}
/**
 * React component used to select one item from a list of options.
 */
exports.Select = react_1.forwardRef(function (props, ref) {
    var rootProps = props.rootProps, placeholder = props.placeholder, icon = props.icon, _a = props.iconSize, iconSize = _a === void 0 ? "1.25rem" : _a, iconColor = props.iconColor, color = props.color, isFullWidth = props.isFullWidth, rest = tslib_1.__rest(props, ["rootProps", "placeholder", "icon", "iconSize", "iconColor", "color", "isFullWidth"]);
    var opacity = props.isDisabled ? 0.5 : undefined;
    var _b = utils_1.split(rest, system_1.layoutPropNames), layoutProps = _b[0], otherProps = _b[1];
    var styles = system_1.useComponentStyle(tslib_1.__assign({ themeKey: "Select" }, props));
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ position: "relative", width: isFullWidth ? "100%" : "auto", color: color, className: "chakra-select__wrapper" }, layoutProps, rootProps),
        React.createElement(exports.SelectField, tslib_1.__assign({ ref: ref, placeholder: placeholder }, otherProps), props.children),
        React.createElement(SelectIcon, { opacity: opacity, iconSize: iconSize, iconColor: iconColor || (styles === null || styles === void 0 ? void 0 : styles.color), children: icon })));
});
if (utils_1.__DEV__) {
    exports.Select.displayName = "Select";
}
exports.DefaultIcon = function (props) { return (React.createElement("svg", tslib_1.__assign({ viewBox: "0 0 24 24" }, props, { className: utils_1.cx("chakra-select__icon", props.className) }),
    React.createElement("path", { fill: "currentColor", d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }))); };
var SelectIconWrapper = system_1.chakra("div", {
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
    var _a = props.children, children = _a === void 0 ? React.createElement(exports.DefaultIcon, null) : _a, _b = props.iconColor, iconColor = _b === void 0 ? "inherit" : _b, iconSize = props.iconSize, rest = tslib_1.__rest(props, ["children", "iconColor", "iconSize"]);
    var style = system_1.useCss({
        color: iconColor,
        width: iconSize,
        height: iconSize,
        fontSize: "1em",
    });
    var clone = react_1.cloneElement(children, {
        role: "presentation",
        focusable: false,
        "aria-hidden": true,
        style: style,
    });
    return (React.createElement(SelectIconWrapper, tslib_1.__assign({}, rest, { className: "chakra-select__icon-wrapper", children: clone })));
}
if (utils_1.__DEV__) {
    SelectIcon.displayName = "SelectIcon";
}
//# sourceMappingURL=Select.js.map