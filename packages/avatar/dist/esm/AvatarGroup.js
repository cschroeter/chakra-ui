import { __assign, __rest } from "tslib";
import { chakra, useThemeDefaultProps, } from "@chakra-ui/system";
import { getValidChildren, cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef, cloneElement } from "react";
import { baseStyle } from "./Avatar";
var ExcessLabel = chakra("span", {
    themeKey: "Avatar.ExcessLabel",
    baseStyle: __assign(__assign({}, baseStyle), { borderRadius: "full" }),
});
if (__DEV__) {
    ExcessLabel.displayName = "ExcessLabel";
}
var StyledGroup = chakra("div", {
    baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row-reverse",
    },
});
/**
 * AvatarGroup
 *
 * React component to displays a number of avatars grouped together in a stack.
 */
export var AvatarGroup = forwardRef(function (props, ref) {
    var defaults = useThemeDefaultProps("Avatar");
    var children = props.children, borderColor = props.borderColor, max = props.max, _a = props.spacing, spacing = _a === void 0 ? -3 : _a, _b = props.size, size = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _b, className = props.className, rest = __rest(props, ["children", "borderColor", "max", "spacing", "size", "className"]);
    var validChildren = getValidChildren(children);
    /**
     * get the avatars within the max
     */
    var childrenWithinMax = max ? validChildren.slice(0, max) : validChildren;
    /**
     * get the remaining avatar count
     */
    var excess = max && validChildren.length - max;
    /**
     * Reversing the children is a great way to avoid using zIndex
     * to overlap the avatars
     */
    var reversedChildren = childrenWithinMax.reverse();
    var clones = reversedChildren.map(function (child, index) {
        var isFirstAvatar = index === 0;
        return cloneElement(child, {
            marginRight: isFirstAvatar ? 0 : spacing,
            size: size,
            borderColor: child.props.borderColor || borderColor,
            showBorder: true,
        });
    });
    var _className = cx("chakra-avatar-group", className);
    return (React.createElement(StyledGroup, __assign({ ref: ref, role: "group", className: _className }, rest),
        excess && (React.createElement(ExcessLabel, { className: "chakra-avatar-group__excess", size: size, ml: spacing, children: "+" + excess })),
        clones));
});
if (__DEV__) {
    AvatarGroup.displayName = "AvatarGroup";
}
//# sourceMappingURL=AvatarGroup.js.map