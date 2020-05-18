import { __assign, __rest } from "tslib";
import { useCheckbox } from "@chakra-ui/checkbox";
import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { forwardRef } from "react";
import { __DEV__, cx, dataAttr } from "@chakra-ui/utils";
var StyledSwitch = chakra("label", {
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
var StyledTrack = chakra("div", {
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
var StyledThumb = chakra("div", {
    themeKey: "Switch.Thumb",
});
export var Switch = forwardRef(function (props, ref) {
    var colorScheme = props.colorScheme, size = props.size, variant = props.variant, className = props.className, rest = __rest(props, ["colorScheme", "size", "variant", "className"]);
    var _a = useCheckbox(rest), state = _a.state, getInputProps = _a.getInputProps, getCheckboxProps = _a.getCheckboxProps, htmlProps = _a.htmlProps;
    var theming = { colorScheme: colorScheme, size: size, variant: variant };
    var input = getInputProps({ ref: ref });
    var checkbox = getCheckboxProps();
    return (React.createElement(StyledSwitch, __assign({ className: cx("chakra-switch", className) }, htmlProps),
        React.createElement("input", __assign({ className: "chakra-switch__input" }, input)),
        React.createElement(StyledTrack, __assign({ className: "chakra-switch__track" }, theming, checkbox),
            React.createElement(StyledThumb, __assign({}, theming, { className: "chakra-switch__thumb", "data-checked": dataAttr(state.isChecked), "data-hover": dataAttr(state.isHovered) })))));
});
if (__DEV__) {
    Switch.displayName = "Switch";
}
//# sourceMappingURL=Switch.js.map