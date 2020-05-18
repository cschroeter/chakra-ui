"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var tslib_1 = require("tslib");
var checkbox_1 = require("@chakra-ui/checkbox");
var system_1 = require("@chakra-ui/system");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var utils_1 = require("@chakra-ui/utils");
var StyledSwitch = system_1.chakra("label", {
    baseStyle: {
        display: "inline-block",
        verticalAlign: "middle",
    },
});
/**
 * Switch Track - Theming
 *
 * To style the switch track globally, change the styles in
 * `theme.components.Switch` under the `Track` key
 */
var StyledTrack = system_1.chakra("div", {
    themeKey: "Switch.Track",
    baseStyle: {
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
    },
});
/**
 * Switch Thumb - Theming
 *
 * To style the element, change the styles in
 * `theme.components.Switch` under the `Thumb` key
 */
var StyledThumb = system_1.chakra("div", {
    themeKey: "Switch.Thumb",
});
exports.Switch = react_1.forwardRef(function (props, ref) {
    var colorScheme = props.colorScheme, size = props.size, variant = props.variant, className = props.className, rest = tslib_1.__rest(props, ["colorScheme", "size", "variant", "className"]);
    var _a = checkbox_1.useCheckbox(rest), state = _a.state, getInputProps = _a.getInputProps, getCheckboxProps = _a.getCheckboxProps, htmlProps = _a.htmlProps;
    var theming = { colorScheme: colorScheme, size: size, variant: variant };
    var input = getInputProps({ ref: ref });
    var checkbox = getCheckboxProps();
    return (React.createElement(StyledSwitch, tslib_1.__assign({ className: utils_1.cx("chakra-switch", className) }, htmlProps),
        React.createElement("input", tslib_1.__assign({ className: "chakra-switch__input" }, input)),
        React.createElement(StyledTrack, tslib_1.__assign({ className: "chakra-switch__track" }, theming, checkbox),
            React.createElement(StyledThumb, tslib_1.__assign({}, theming, { className: "chakra-switch__thumb", "data-checked": utils_1.dataAttr(state.isChecked), "data-hover": utils_1.dataAttr(state.isHovered) })))));
});
if (utils_1.__DEV__) {
    exports.Switch.displayName = "Switch";
}
//# sourceMappingURL=Switch.js.map