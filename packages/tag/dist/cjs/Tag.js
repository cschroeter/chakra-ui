"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCloseButton = exports.TagRightIcon = exports.TagLeftIcon = exports.TagLabel = exports.Tag = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var system_1 = require("@chakra-ui/system");
var icon_1 = require("@chakra-ui/icon");
var utils_1 = require("@chakra-ui/utils");
/**
 * The tag component is used to label or categorize UI elements.
 *
 * To style the tag globally, change the styles in `theme.components.Tag`
 *
 * @see Docs https://chakra-ui/tag
 */
exports.Tag = system_1.chakra("span", {
    themeKey: "Tag",
    baseStyle: {
        display: "inline-flex",
        verticalAlign: "top",
        alignItems: "center",
        maxWidth: "100%",
        fontWeight: "medium",
        lineHeight: "1.2",
    },
});
if (utils_1.__DEV__) {
    exports.Tag.displayName = "Tag";
}
exports.TagLabel = system_1.chakra("span", {
    baseStyle: { lineHeight: 1.2 },
});
exports.TagLabel.defaultProps = {
    isTruncated: true,
};
if (utils_1.__DEV__) {
    exports.TagLabel.displayName = "TagLabel";
}
exports.TagLeftIcon = function (props) { return (React.createElement(icon_1.Icon, tslib_1.__assign({ verticalAlign: "top", marginRight: "0.5rem" }, props))); };
if (utils_1.__DEV__) {
    exports.TagLeftIcon.displayName = "TagLeftIcon";
}
exports.TagRightIcon = function (props) { return (React.createElement(icon_1.Icon, tslib_1.__assign({ verticalAlign: "top", marginLeft: "0.5rem" }, props))); };
if (utils_1.__DEV__) {
    exports.TagRightIcon.displayName = "TagRightIcon";
}
var TagCloseIcon = function (props) { return (React.createElement(icon_1.Icon, tslib_1.__assign({ focusable: "false", verticalAlign: "inherit", role: "presentation", boxSize: "100%", viewBox: "0 0 512 512" }, props),
    React.createElement("path", { fill: "currentColor", d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" }))); };
if (utils_1.__DEV__) {
    TagCloseIcon.displayName = "TagCloseIcon";
}
var StyledButton = system_1.chakra("button", {
    baseStyle: {
        fontSize: "1em",
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "sm",
        marginLeft: "0.375rem",
        marginRight: "-1",
        display: "flex",
        alignItems: "center",
        transition: "all 0.2s",
        opacity: 0.5,
        _disabled: { opacity: 0.4 },
        outline: "0",
        _focus: {
            boxShadow: "outline",
            bg: "rgba(0, 0, 0, 0.14)",
        },
        _hover: { opacity: 0.8 },
        _active: { opacity: 1 },
    },
});
/**
 * TagCloseButton
 *
 * The tag close button. This is used to close "remove" the tag
 *
 * @see Docs https://chakra-ui/tag
 */
exports.TagCloseButton = function (props) {
    var isDisabled = props.isDisabled, _a = props.children, children = _a === void 0 ? React.createElement(TagCloseIcon, null) : _a, rest = tslib_1.__rest(props, ["isDisabled", "children"]);
    return React.createElement(StyledButton, tslib_1.__assign({ disabled: isDisabled, children: children }, rest));
};
if (utils_1.__DEV__) {
    exports.TagCloseButton.displayName = "TagCloseButton";
}
//# sourceMappingURL=Tag.js.map