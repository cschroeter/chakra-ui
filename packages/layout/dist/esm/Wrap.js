import { __assign, __rest } from "tslib";
import { chakra, css, useTheme } from "@chakra-ui/system";
import { getValidChildren, mapResponsive, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
/**
 * Layout component used to stack elements that differ in length
 * and are liable to wrap.
 *
 * Common use cases:
 * - Buttons that appear together at the end of forms
 * - Lists of tags and chips
 *
 * @see Docs https://chakra-ui.com/wrap
 */
export var Wrap = forwardRef(function (props, ref) {
    var _a = props.spacing, spacing = _a === void 0 ? "0.5rem" : _a, children = props.children, justify = props.justify, direction = props.direction, rest = __rest(props, ["spacing", "children", "justify", "direction"]);
    var theme = useTheme();
    var liSpacing = mapResponsive(spacing, function (value) {
        var margin = css({ margin: value })(theme).margin;
        return "calc(" + margin + " / 2)";
    });
    var ulSpacing = mapResponsive(spacing, function (value) {
        var margin = css({ margin: value })(theme).margin;
        return "calc(" + margin + " / 2 * -1)";
    });
    var validChildren = getValidChildren(children);
    var clones = validChildren.map(function (child, index) { return (React.createElement(chakra.li, { key: index, margin: liSpacing, display: "inline-flex" }, child)); });
    return (React.createElement(chakra.div, __assign({ ref: ref }, rest),
        React.createElement(chakra.ul, { display: "flex", flexWrap: "wrap", justifyContent: justify, flexDirection: direction, listStyleType: "none", padding: "0", margin: ulSpacing, children: clones })));
});
if (__DEV__) {
    Wrap.displayName = "Wrap";
}
//# sourceMappingURL=Wrap.js.map