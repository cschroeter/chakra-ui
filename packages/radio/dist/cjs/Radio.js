"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Radio_hook_1 = require("./Radio.hook");
var RadioGroup_1 = require("./RadioGroup");
var StyledControl = system_1.chakra("div", {
    themeKey: "Radio.Control",
    baseStyle: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
});
var StyledLabel = system_1.chakra("div", {
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
exports.Radio = React.forwardRef(function (props, ref) {
    var group = RadioGroup_1.useRadioGroupContext();
    var _a = props.labelSpacing, labelSpacing = _a === void 0 ? "0.5rem" : _a, _b = props.colorScheme, colorScheme = _b === void 0 ? group === null || group === void 0 ? void 0 : group.colorScheme : _b, _c = props.variant, variant = _c === void 0 ? group === null || group === void 0 ? void 0 : group.variant : _c, _d = props.size, size = _d === void 0 ? group === null || group === void 0 ? void 0 : group.size : _d, children = props.children, radioProps = tslib_1.__rest(props, ["labelSpacing", "colorScheme", "variant", "size", "children"]);
    var isChecked = props.isChecked;
    if ((group === null || group === void 0 ? void 0 : group.value) && props.value) {
        isChecked = group.value === props.value;
    }
    var onChange = props.onChange;
    if ((group === null || group === void 0 ? void 0 : group.onChange) && props.value) {
        onChange = group.onChange;
    }
    var theming = { variant: variant, colorScheme: colorScheme, size: size };
    var _e = Radio_hook_1.useRadio(tslib_1.__assign(tslib_1.__assign({}, radioProps), { isChecked: isChecked, onChange: onChange })), getInputProps = _e.getInputProps, getCheckboxProps = _e.getCheckboxProps, getLabelProps = _e.getLabelProps, rest = _e.htmlProps;
    var _f = utils_1.split(rest, system_1.layoutPropNames), layoutProps = _f[0], otherProps = _f[1];
    return (React.createElement(system_1.chakra.label, tslib_1.__assign({ className: "chakra-radio", display: "inline-flex", alignItems: "center", verticalAlign: "top" }, layoutProps),
        React.createElement("input", tslib_1.__assign({ className: "chakra-radio__input" }, getInputProps({ ref: ref }))),
        React.createElement(StyledControl, tslib_1.__assign({}, theming, getCheckboxProps(otherProps), { className: utils_1.cx("chakra-radio__control", props.className) })),
        children && (React.createElement(StyledLabel, tslib_1.__assign({ className: "chakra-radio__label" }, theming, getLabelProps(), { marginLeft: labelSpacing, children: children })))));
});
if (utils_1.__DEV__) {
    exports.Radio.displayName = "Radio";
}
//# sourceMappingURL=Radio.js.map