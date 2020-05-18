"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIcon = exports.ListItem = exports.List = void 0;
var tslib_1 = require("tslib");
var icon_1 = require("@chakra-ui/icon");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
/**
 * List is used to display list items, it renders a `<ul>` by default.
 *
 * @see Docs https://chakra-ui.com/list
 */
exports.List = react_1.forwardRef(function (props, ref) {
    var children = props.children, _a = props.styleType, styleType = _a === void 0 ? "none" : _a, _b = props.stylePosition, stylePosition = _b === void 0 ? "inside" : _b, spacing = props.spacing, rest = tslib_1.__rest(props, ["children", "styleType", "stylePosition", "spacing"]);
    var validChildren = utils_1.getValidChildren(children);
    return (React.createElement(system_1.chakra.ul, tslib_1.__assign({ ref: ref, listStyleType: styleType, listStylePosition: stylePosition }, rest), validChildren.map(function (child, index) {
        var isLast = index + 1 === validChildren.length;
        if (isLast)
            return child;
        return spacing ? react_1.cloneElement(child, { mb: spacing }) : child;
    })));
});
if (utils_1.__DEV__) {
    exports.List.displayName = "List";
}
/**
 * ListItem
 *
 * Used to render a list item
 */
exports.ListItem = system_1.chakra.li;
if (utils_1.__DEV__) {
    exports.ListItem.displayName = "ListItem";
}
/**
 * ListIcon
 *
 * Used to render an icon beside the list item text
 */
exports.ListIcon = system_1.chakra(icon_1.Icon, {
    baseStyle: {
        marginRight: 2,
        display: "inline",
        verticalAlign: "text-bottom",
    },
});
if (utils_1.__DEV__) {
    exports.ListIcon.displayName = "ListIcon";
}
//# sourceMappingURL=List.js.map