import { __assign, __makeTemplateObject, __rest } from "tslib";
import { chakra, keyframes } from "@chakra-ui/system";
import { __DEV__, cx } from "@chakra-ui/utils";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import * as React from "react";
import { forwardRef } from "react";
var spin = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {  transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"], ["\n  0% {  transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"
    /**
     * Spinner - Theming
     *
     * To style the spinner component globally, change the styles in
     * `theme.components.Spinner`
     */
])));
/**
 * Spinner - Theming
 *
 * To style the spinner component globally, change the styles in
 * `theme.components.Spinner`
 */
var StyledSpinner = chakra("div", {
    themeKey: "Spinner",
    baseStyle: {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "full",
    },
});
/**
 * Spinner
 *
 * React component used to indicate the loading state of a page or a component,
 *
 * It renders a `div` by default
 *
 * @see Docs https://chakra-ui.com/spinner
 */
export var Spinner = forwardRef(function (props, ref) {
    var _a = props.label, label = _a === void 0 ? "Loading..." : _a, _b = props.thickness, thickness = _b === void 0 ? "2px" : _b, _c = props.speed, speed = _c === void 0 ? "0.45s" : _c, color = props.color, _d = props.emptyColor, emptyColor = _d === void 0 ? "transparent" : _d, className = props.className, rest = __rest(props, ["label", "thickness", "speed", "color", "emptyColor", "className"]);
    var _className = cx("chakra-spinner", className);
    return (React.createElement(StyledSpinner, __assign({ ref: ref, borderWidth: thickness, borderBottomColor: emptyColor, borderLeftColor: emptyColor, color: color, animation: spin + " " + speed + " linear infinite", className: _className }, rest), label && React.createElement(VisuallyHidden, null, label)));
});
if (__DEV__) {
    Spinner.displayName = "Spinner";
}
var templateObject_1;
//# sourceMappingURL=Spinner.js.map