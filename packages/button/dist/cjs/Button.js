"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var spinner_1 = require("@chakra-ui/spinner");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var ButtonGroup_1 = require("./ButtonGroup");
var StyledButton = system_1.chakra("button", {
    themeKey: "Button",
    baseStyle: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 250ms",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
    },
});
exports.Button = react_1.forwardRef(function (props, ref) {
    var _a;
    var group = ButtonGroup_1.useButtonGroup();
    var isDisabled = props.isDisabled, isLoading = props.isLoading, isActive = props.isActive, isFullWidth = props.isFullWidth, children = props.children, leftIcon = props.leftIcon, rightIcon = props.rightIcon, loadingText = props.loadingText, _b = props.iconSpacing, iconSpacing = _b === void 0 ? "0.5rem" : _b, _c = props.type, type = _c === void 0 ? "button" : _c, spinner = props.spinner, _d = props.variant, variant = _d === void 0 ? group === null || group === void 0 ? void 0 : group.variant : _d, _e = props.colorScheme, colorScheme = _e === void 0 ? group === null || group === void 0 ? void 0 : group.colorScheme : _e, _f = props.size, size = _f === void 0 ? group === null || group === void 0 ? void 0 : group.size : _f, className = props.className, rest = tslib_1.__rest(props, ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "variant", "colorScheme", "size", "className"]);
    var styles = system_1.useComponentStyle({
        themeKey: "Button",
        variant: variant,
        size: size,
        colorScheme: colorScheme,
    });
    /**
     * When button is used within ButtonGroup (i.e flushed with sibling buttons),
     * it's important to add a `zIndex` when it's focused to it doesn't look funky.
     *
     * So let's read the component styles and then add `zIndex` to it.
     */
    var focusSelector = system_1.pseudoSelectors["_focus"];
    var _focus = utils_1.merge((_a = styles === null || styles === void 0 ? void 0 : styles[focusSelector]) !== null && _a !== void 0 ? _a : {}, { zIndex: 1 });
    var _className = utils_1.cx("chakra-button", className);
    return (React.createElement(StyledButton, tslib_1.__assign({ disabled: isDisabled || isLoading, ref: ref, type: type, width: isFullWidth ? "100%" : undefined, "data-active": utils_1.dataAttr(isActive), "data-loading": utils_1.dataAttr(isLoading), variant: variant, colorScheme: colorScheme, size: size, className: _className }, (!!group && { _focus: _focus }), rest),
        leftIcon && !isLoading && (React.createElement(ButtonIcon, { ml: -1, mr: iconSpacing, children: leftIcon })),
        isLoading && (React.createElement(ButtonSpinner, { spacing: iconSpacing, label: loadingText, children: spinner })),
        isLoading
            ? loadingText || React.createElement(system_1.chakra.span, { opacity: 0, children: children })
            : children,
        rightIcon && !isLoading && (React.createElement(ButtonIcon, { ml: iconSpacing, mr: -1, children: rightIcon }))));
});
if (utils_1.__DEV__) {
    exports.Button.displayName = "Button";
}
var ButtonIcon = function (props) {
    var a11yProps = {
        "aria-hidden": true,
        focusable: false,
    };
    var children = react_1.isValidElement(props.children)
        ? react_1.cloneElement(props.children, a11yProps)
        : props.children;
    return (React.createElement(system_1.chakra.span, tslib_1.__assign({ className: "chakra-button__icon" }, props, { children: children })));
};
if (utils_1.__DEV__) {
    ButtonIcon.displayName = "ButtonIcon";
}
var ButtonSpinner = function (props) {
    var label = props.label, spacing = props.spacing, _a = props.children, children = _a === void 0 ? React.createElement(spinner_1.Spinner, { color: "currentColor", width: "1em", height: "1em" }) : _a, className = props.className, rest = tslib_1.__rest(props, ["label", "spacing", "children", "className"]);
    var _className = utils_1.cx("chakra-button__spinner", className);
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ fontSize: "1em", lineHeight: "normal", position: label ? "relative" : "absolute", mr: label ? spacing : 0, className: _className }, rest, { children: children })));
};
if (utils_1.__DEV__) {
    ButtonSpinner.displayName = "ButtonSpinner";
}
//# sourceMappingURL=Button.js.map