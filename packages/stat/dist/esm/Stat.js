import { __assign, __rest } from "tslib";
import * as React from "react";
import { forwardRef } from "react";
import { chakra, ThemingProvider, useThemingContext, useThemeDefaultProps, } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/icon";
import { __DEV__, cx } from "@chakra-ui/utils";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
/**
 * Learn the Semantic HTML for stats:
 * @see Post https://www.bitdegree.org/learn/html-dl
 */
var StyledLabel = chakra("dt", {
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
export var StatLabel = forwardRef(function (props, ref) {
    var className = props.className, rest = __rest(props, ["className"]);
    var theming = useThemingContext();
    var _className = cx("chakra-stat__label", className);
    return (React.createElement(StyledLabel, __assign({ ref: ref, className: _className }, theming, rest)));
});
if (__DEV__) {
    StatLabel.displayName = "StatLabel";
}
/**
 * StatHelpText
 *
 * Additional context and information about the stat.
 *
 * To style the StatHelpText globally, change the styles in
 * `theme.components.Stat.HelpText`
 */
var StyledHelpText = chakra("p", {
    themeKey: "Stat.HelpText",
});
export var StatHelpText = forwardRef(function (props, ref) {
    var className = props.className, rest = __rest(props, ["className"]);
    var theming = useThemingContext();
    var _className = cx("chakra-stat__help-text", className);
    return (React.createElement(StyledHelpText, __assign({ ref: ref, className: _className }, theming, rest)));
});
if (__DEV__) {
    StatHelpText.displayName = "StatHelpText";
}
/**
 * StatNumber
 *
 * Numerical value representation of the stat.
 *
 *To style the StatNumber globally, change the styles in
 * `theme.components.Stat.Number`
 */
export var StyledNumber = chakra("dd", {
    themeKey: "Stat.Number",
});
export var StatNumber = forwardRef(function (props, ref) {
    var className = props.className, rest = __rest(props, ["className"]);
    var theming = useThemingContext();
    var _className = cx("chakra-stat__number", className);
    return (React.createElement(StyledNumber, __assign({ ref: ref, className: _className }, theming, rest)));
});
if (__DEV__) {
    StatNumber.displayName = "StatNumber";
}
/**
 * StatDownArrow
 *
 * Indicator arrow to show a decrease in the stat.
 */
export var StatDownArrow = function (props) { return (React.createElement(Icon, __assign({ mr: 1, size: "14px", color: "red.400", verticalAlign: "middle" }, props),
    React.createElement("path", { fill: "currentColor", d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z" }))); };
if (__DEV__) {
    StatDownArrow.displayName = "StatDownArrow";
}
/**
 * StatUpArrow
 *
 * Indicator arrow to show an increase in the stat.
 */
export var StatUpArrow = function (props) { return (React.createElement(Icon, __assign({ mr: 1, size: "14px", color: "green.400", verticalAlign: "middle" }, props),
    React.createElement("path", { fill: "currentColor", d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z" }))); };
if (__DEV__) {
    StatUpArrow.displayName = "StatUpArrow";
}
/**
 * StatArrow
 *
 * Indicator arrow to show an increase or a decrease in the stat.
 */
export function StatArrow(props) {
    var type = props.type, ariaLabel = props["aria-label"], rest = __rest(props, ["type", "aria-label"]);
    var Icon = type === "increase" ? StatUpArrow : StatDownArrow;
    var defaultAriaLabel = type === "increase" ? "increased by" : "decreased by";
    var label = ariaLabel || defaultAriaLabel;
    return (React.createElement(React.Fragment, null,
        React.createElement(VisuallyHidden, { children: label }),
        React.createElement(Icon, __assign({ "aria-hidden": true }, rest))));
}
if (__DEV__) {
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
var StyledStat = chakra("div", {
    baseStyle: {
        flex: "1",
        paddingRight: 4,
    },
});
export var Stat = forwardRef(function (props, ref) {
    var defaults = useThemeDefaultProps("Stat");
    var _a = props.size, size = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _a, _b = props.variant, variant = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _b, _c = props.colorScheme, colorScheme = _c === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.colorScheme : _c, className = props.className, children = props.children, rest = __rest(props, ["size", "variant", "colorScheme", "className", "children"]);
    var theming = { size: size, variant: variant, colorScheme: colorScheme };
    var _className = cx("chakra-stat", className);
    return (React.createElement(ThemingProvider, { value: theming },
        React.createElement(StyledStat, __assign({ className: _className, ref: ref }, rest),
            React.createElement("dl", null, children))));
});
if (__DEV__) {
    Stat.displayName = "Stat";
}
/**
 * StatGroup
 *
 * The component to group multiple stats together
 */
export var StatGroup = chakra("div", {
    baseStyle: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    attrs: { role: "group" },
});
if (__DEV__) {
    StatGroup.displayName = "StatGroup";
}
//# sourceMappingURL=Stat.js.map