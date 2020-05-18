"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Checkbox_hook_1 = require("./Checkbox.hook");
var Checkbox_icon_1 = require("./Checkbox.icon");
var CheckboxGroup_1 = require("./CheckboxGroup");
/**
 * Checkbox - Theming
 *
 * To style the checkbox globally, change the styles in
 * `theme.components.Checkbox` under the `Control` key
 */
var StyledControl = system_1.chakra("div", {
    themeKey: "Checkbox.Control",
    baseStyle: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "top",
        userSelect: "none",
        flexShrink: 0,
        transition: "transform 240ms, opacity 240ms",
    },
});
var StyledLabel = system_1.chakra("div", {
    themeKey: "Checkbox.Label",
    baseStyle: {
        userSelect: "none",
    },
});
var StyledWrapper = system_1.chakra("label", {
    baseStyle: {
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "top",
        position: "relative",
    },
});
/**
 * Checkbox
 *
 * React component used in forms when a user needs to select
 * multiple values from several options.
 *
 * @see Docs https://chakra-ui.com/checkbox
 */
exports.Checkbox = React.forwardRef(function (props, ref) {
    var group = CheckboxGroup_1.useCheckboxGroupContext();
    var _a = props.iconSize, iconSize = _a === void 0 ? "0.625rem" : _a, _b = props.labelSpacing, labelSpacing = _b === void 0 ? "0.5rem" : _b, iconColor = props.iconColor, _c = props.variant, variant = _c === void 0 ? group === null || group === void 0 ? void 0 : group.variant : _c, _d = props.colorScheme, colorScheme = _d === void 0 ? group === null || group === void 0 ? void 0 : group.colorScheme : _d, _e = props.size, size = _e === void 0 ? group === null || group === void 0 ? void 0 : group.size : _e, className = props.className, children = props.children, checkboxProps = tslib_1.__rest(props, ["iconSize", "labelSpacing", "iconColor", "variant", "colorScheme", "size", "className", "children"]);
    var isChecked = props.isChecked;
    if ((group === null || group === void 0 ? void 0 : group.value) && props.value) {
        isChecked = group.value.includes(props.value);
    }
    var onChange = props.onChange;
    if ((group === null || group === void 0 ? void 0 : group.onChange) && props.value) {
        onChange = group.onChange;
    }
    var _f = Checkbox_hook_1.useCheckbox(tslib_1.__assign(tslib_1.__assign({}, checkboxProps), { isChecked: isChecked,
        onChange: onChange })), state = _f.state, getInputProps = _f.getInputProps, getCheckboxProps = _f.getCheckboxProps, getLabelProps = _f.getLabelProps, htmlProps = _f.htmlProps;
    var _className = utils_1.cx("chakra-checkbox", className);
    var theming = { variant: variant, size: size, colorScheme: colorScheme };
    return (React.createElement(StyledWrapper, tslib_1.__assign({}, htmlProps, { className: _className }),
        React.createElement("input", tslib_1.__assign({ className: "chakra-checkbox__input" }, getInputProps({ ref: ref }))),
        React.createElement(StyledControl, tslib_1.__assign({ className: "chakra-checkbox__control" }, theming, { verticalAlign: "top" }, getCheckboxProps()),
            React.createElement(Checkbox_icon_1.CheckboxIcon, { className: "chakra-checkbox__icon", transition: "transform 240ms, opacity 240ms", isChecked: state.isChecked, isIndeterminate: state.isIndeterminate, boxSize: iconSize, color: iconColor })),
        children && (React.createElement(StyledLabel, tslib_1.__assign({ className: "chakra-checkbox__label" }, theming, getLabelProps(), { marginLeft: labelSpacing, children: children })))));
});
if (utils_1.__DEV__) {
    exports.Checkbox.displayName = "Checkbox";
}
//# sourceMappingURL=Checkbox.js.map