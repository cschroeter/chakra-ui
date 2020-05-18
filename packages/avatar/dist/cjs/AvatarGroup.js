"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarGroup = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Avatar_1 = require("./Avatar");
var ExcessLabel = system_1.chakra("span", {
    themeKey: "Avatar.ExcessLabel",
    baseStyle: tslib_1.__assign(tslib_1.__assign({}, Avatar_1.baseStyle), { borderRadius: "full" }),
});
if (utils_1.__DEV__) {
    ExcessLabel.displayName = "ExcessLabel";
}
var StyledGroup = system_1.chakra("div", {
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
exports.AvatarGroup = react_1.forwardRef(function (props, ref) {
    var defaults = system_1.useThemeDefaultProps("Avatar");
    var children = props.children, borderColor = props.borderColor, max = props.max, _a = props.spacing, spacing = _a === void 0 ? -3 : _a, _b = props.size, size = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _b, className = props.className, rest = tslib_1.__rest(props, ["children", "borderColor", "max", "spacing", "size", "className"]);
    var validChildren = utils_1.getValidChildren(children);
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
        return react_1.cloneElement(child, {
            marginRight: isFirstAvatar ? 0 : spacing,
            size: size,
            borderColor: child.props.borderColor || borderColor,
            showBorder: true,
        });
    });
    var _className = utils_1.cx("chakra-avatar-group", className);
    return (React.createElement(StyledGroup, tslib_1.__assign({ ref: ref, role: "group", className: _className }, rest),
        excess && (React.createElement(ExcessLabel, { className: "chakra-avatar-group__excess", size: size, ml: spacing, children: "+" + excess })),
        clones));
});
if (utils_1.__DEV__) {
    exports.AvatarGroup.displayName = "AvatarGroup";
}
//# sourceMappingURL=AvatarGroup.js.map