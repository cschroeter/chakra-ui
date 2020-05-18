"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatGroup = exports.Stat = exports.StatArrow = exports.StatUpArrow = exports.StatDownArrow = exports.StatNumber = exports.StyledNumber = exports.StatHelpText = exports.StatLabel = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var system_1 = require("@chakra-ui/system");
var icon_1 = require("@chakra-ui/icon");
var utils_1 = require("@chakra-ui/utils");
var visually_hidden_1 = require("@chakra-ui/visually-hidden");
/**
 * Learn the Semantic HTML for stats:
 * @see Post https://www.bitdegree.org/learn/html-dl
 */
var StyledLabel = system_1.chakra("dt", {
    themeKey: "Stat.Label",
});
/**
 * StatLabel - Theming
 *
 * The label for the stat card. This is usually the heading for the card.
 *
 * To style the StatLabel globally, change the styles in
 * `theme.components.Stat` under the `Label` key.
 */
exports.StatLabel = react_1.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var theming = system_1.useThemingContext();
    var _className = utils_1.cx("chakra-stat__label", className);
    return (React.createElement(StyledLabel, tslib_1.__assign({ ref: ref, className: _className }, theming, rest)));
});
if (utils_1.__DEV__) {
    exports.StatLabel.displayName = "StatLabel";
}
/**
 * StatHelpText
 *
 * Additional context and information about the stat.
 *
 * To style the StatHelpText globally, change the styles in
 * `theme.components.Stat.HelpText`
 */
var StyledHelpText = system_1.chakra("p", {
    themeKey: "Stat.HelpText",
});
exports.StatHelpText = react_1.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var theming = system_1.useThemingContext();
    var _className = utils_1.cx("chakra-stat__help-text", className);
    return (React.createElement(StyledHelpText, tslib_1.__assign({ ref: ref, className: _className }, theming, rest)));
});
if (utils_1.__DEV__) {
    exports.StatHelpText.displayName = "StatHelpText";
}
/**
 * StatNumber
 *
 * Numerical value representation of the stat.
 *
 *To style the StatNumber globally, change the styles in
 * `theme.components.Stat.Number`
 */
exports.StyledNumber = system_1.chakra("dd", {
    themeKey: "Stat.Number",
});
exports.StatNumber = react_1.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var theming = system_1.useThemingContext();
    var _className = utils_1.cx("chakra-stat__number", className);
    return (React.createElement(exports.StyledNumber, tslib_1.__assign({ ref: ref, className: _className }, theming, rest)));
});
if (utils_1.__DEV__) {
    exports.StatNumber.displayName = "StatNumber";
}
/**
 * StatDownArrow
 *
 * Indicator arrow to show a decrease in the stat.
 */
exports.StatDownArrow = function (props) { return (React.createElement(icon_1.Icon, tslib_1.__assign({ mr: 1, size: "14px", color: "red.400", verticalAlign: "middle" }, props),
    React.createElement("path", { fill: "currentColor", d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z" }))); };
if (utils_1.__DEV__) {
    exports.StatDownArrow.displayName = "StatDownArrow";
}
/**
 * StatUpArrow
 *
 * Indicator arrow to show an increase in the stat.
 */
exports.StatUpArrow = function (props) { return (React.createElement(icon_1.Icon, tslib_1.__assign({ mr: 1, size: "14px", color: "green.400", verticalAlign: "middle" }, props),
    React.createElement("path", { fill: "currentColor", d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z" }))); };
if (utils_1.__DEV__) {
    exports.StatUpArrow.displayName = "StatUpArrow";
}
/**
 * StatArrow
 *
 * Indicator arrow to show an increase or a decrease in the stat.
 */
function StatArrow(props) {
    var type = props.type, ariaLabel = props["aria-label"], rest = tslib_1.__rest(props, ["type", "aria-label"]);
    var Icon = type === "increase" ? exports.StatUpArrow : exports.StatDownArrow;
    var defaultAriaLabel = type === "increase" ? "increased by" : "decreased by";
    var label = ariaLabel || defaultAriaLabel;
    return (React.createElement(React.Fragment, null,
        React.createElement(visually_hidden_1.VisuallyHidden, { children: label }),
        React.createElement(Icon, tslib_1.__assign({ "aria-hidden": true }, rest))));
}
exports.StatArrow = StatArrow;
if (utils_1.__DEV__) {
    StatArrow.displayName = "StatArrow";
}
/**
 * Stat
 *
 * A component to display statistic numbers.
 *
 * To style the Stat globally, change the styles in
 * `theme.components.Stat.Root`
 */
var StyledStat = system_1.chakra("div", {
    baseStyle: {
        flex: "1",
        paddingRight: 4,
    },
});
exports.Stat = react_1.forwardRef(function (props, ref) {
    var defaults = system_1.useThemeDefaultProps("Stat");
    var _a = props.size, size = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _a, _b = props.variant, variant = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _b, _c = props.colorScheme, colorScheme = _c === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.colorScheme : _c, className = props.className, children = props.children, rest = tslib_1.__rest(props, ["size", "variant", "colorScheme", "className", "children"]);
    var theming = { size: size, variant: variant, colorScheme: colorScheme };
    var _className = utils_1.cx("chakra-stat", className);
    return (React.createElement(system_1.ThemingProvider, { value: theming },
        React.createElement(StyledStat, tslib_1.__assign({ className: _className, ref: ref }, rest),
            React.createElement("dl", null, children))));
});
if (utils_1.__DEV__) {
    exports.Stat.displayName = "Stat";
}
/**
 * StatGroup
 *
 * The component to group multiple stats together
 */
exports.StatGroup = system_1.chakra("div", {
    baseStyle: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    attrs: { role: "group" },
});
if (utils_1.__DEV__) {
    exports.StatGroup.displayName = "StatGroup";
}
//# sourceMappingURL=Stat.js.map