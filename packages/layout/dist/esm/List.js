import { __assign, __rest } from "tslib";
import { Icon } from "@chakra-ui/icon";
import { chakra } from "@chakra-ui/system";
import { getValidChildren, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { cloneElement, forwardRef } from "react";
/**
 * List is used to display list items, it renders a `<ul>` by default.
 *
 * @see Docs https://chakra-ui.com/list
 */
export var List = forwardRef(function (props, ref) {
    var children = props.children, _a = props.styleType, styleType = _a === void 0 ? "none" : _a, _b = props.stylePosition, stylePosition = _b === void 0 ? "inside" : _b, spacing = props.spacing, rest = __rest(props, ["children", "styleType", "stylePosition", "spacing"]);
    var validChildren = getValidChildren(children);
    return (React.createElement(chakra.ul, __assign({ ref: ref, listStyleType: styleType, listStylePosition: stylePosition }, rest), validChildren.map(function (child, index) {
        var isLast = index + 1 === validChildren.length;
        if (isLast)
            return child;
        return spacing ? cloneElement(child, { mb: spacing }) : child;
    })));
});
if (__DEV__) {
    List.displayName = "List";
}
/**
 * ListItem
 *
 * Used to render a list item
 */
export var ListItem = chakra.li;
if (__DEV__) {
    ListItem.displayName = "ListItem";
}
/**
 * ListIcon
 *
 * Used to render an icon beside the list item text
 */
export var ListIcon = chakra(Icon, {
    baseStyle: {
        marginRight: 2,
        display: "inline",
        verticalAlign: "text-bottom",
    },
});
if (__DEV__) {
    ListIcon.displayName = "ListIcon";
}
//# sourceMappingURL=List.js.map