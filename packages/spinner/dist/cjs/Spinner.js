"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var visually_hidden_1 = require("@chakra-ui/visually-hidden");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var spin = system_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  0% {  transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"], ["\n  0% {  transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"
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
var StyledSpinner = system_1.chakra("div", {
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
exports.Spinner = react_1.forwardRef(function (props, ref) {
    var _a = props.label, label = _a === void 0 ? "Loading..." : _a, _b = props.thickness, thickness = _b === void 0 ? "2px" : _b, _c = props.speed, speed = _c === void 0 ? "0.45s" : _c, color = props.color, _d = props.emptyColor, emptyColor = _d === void 0 ? "transparent" : _d, className = props.className, rest = tslib_1.__rest(props, ["label", "thickness", "speed", "color", "emptyColor", "className"]);
    var _className = utils_1.cx("chakra-spinner", className);
    return (React.createElement(StyledSpinner, tslib_1.__assign({ ref: ref, borderWidth: thickness, borderBottomColor: emptyColor, borderLeftColor: emptyColor, color: color, animation: spin + " " + speed + " linear infinite", className: _className }, rest), label && React.createElement(visually_hidden_1.VisuallyHidden, null, label)));
});
if (utils_1.__DEV__) {
    exports.Spinner.displayName = "Spinner";
}
var templateObject_1;
//# sourceMappingURL=Spinner.js.map