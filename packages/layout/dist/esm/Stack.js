import { __assign, __rest } from "tslib";
import { chakra, css } from "@chakra-ui/system";
import { getValidChildren, mapResponsive, __DEV__, cx, } from "@chakra-ui/utils";
import * as React from "react";
export var StackDivider = chakra("hr", {
    baseStyle: { border: 0, alignSelf: "stretch" },
});
/**
 * Stacks help you easily create flexible and automatically distributed layouts
 *
 * You can stack elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 *
 * It uses `display: flex` internally and renders a `div`.
 *
 * @see Docs https://chakra-ui.com/stack
 *
 */
export var Stack = React.forwardRef(function (props, ref) {
    var _a;
    var _b = props.direction, direction = _b === void 0 ? "column" : _b, _c = props.align, align = _c === void 0 ? "flex-start" : _c, justify = props.justify, _d = props.spacing, spacing = _d === void 0 ? "0.5rem" : _d, wrap = props.wrap, children = props.children, divider = props.divider, className = props.className, rest = __rest(props
    /**
     * If we ever run into SSR issues with this, check this post to find a fix for it:
     * @see https://medium.com/@emmenko/patching-lobotomized-owl-selector-for-emotion-ssr-5a582a3c424c
     */
    , ["direction", "align", "justify", "spacing", "wrap", "children", "divider", "className"]);
    /**
     * If we ever run into SSR issues with this, check this post to find a fix for it:
     * @see https://medium.com/@emmenko/patching-lobotomized-owl-selector-for-emotion-ssr-5a582a3c424c
     */
    var selector = "> * + *";
    var styles = (_a = {
            flexDirection: direction
        },
        _a[selector] = mapResponsive(direction, function (value) {
            var _a;
            return (_a = {},
                _a[value === "column" ? "marginTop" : "marginLeft"] = spacing,
                _a[value === "column" ? "marginLeft" : "marginTop"] = 0,
                _a);
        }),
        _a);
    var validChildren = getValidChildren(children);
    var dividerStyles = mapResponsive(direction, function (value) {
        if (value === "row") {
            return {
                marginX: spacing,
                marginY: 0,
                borderLeft: "1px solid",
                borderBottom: 0,
                width: "auto",
            };
        }
        return {
            marginX: 0,
            marginY: spacing,
            borderLeft: 0,
            borderBottom: "1px solid",
            width: "100%",
        };
    });
    var hasDivider = !!divider;
    var clones = validChildren.map(function (child, index) {
        if (!hasDivider)
            return child;
        var isLast = index + 1 === validChildren.length;
        if (!isLast) {
            return (React.createElement(React.Fragment, { key: index },
                child,
                React.cloneElement(divider, {
                    css: css({ "&": dividerStyles }),
                })));
        }
        return child;
    });
    var sx = function (theme) {
        var _a;
        if (hasDivider)
            return undefined;
        return css((_a = {}, _a[selector] = styles[selector], _a))(theme);
    };
    var _className = cx("chakra-stack", className);
    return (React.createElement(chakra.div, __assign({ ref: ref, display: "flex", alignItems: align, justifyContent: justify, flexDirection: styles.flexDirection, flexWrap: wrap, className: _className, sx: sx }, rest), clones));
});
if (__DEV__) {
    Stack.displayName = "Stack";
}
//# sourceMappingURL=Stack.js.map