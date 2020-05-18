import { __assign, __rest } from "tslib";
import { Spinner } from "@chakra-ui/spinner";
import { chakra, useComponentStyle, pseudoSelectors, } from "@chakra-ui/system";
import { dataAttr, __DEV__, merge, cx } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef, cloneElement, isValidElement, } from "react";
import { useButtonGroup } from "./ButtonGroup";
var StyledButton = chakra("button", {
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
export var Button = forwardRef(function (props, ref) {
    var _a;
    var group = useButtonGroup();
    var isDisabled = props.isDisabled, isLoading = props.isLoading, isActive = props.isActive, isFullWidth = props.isFullWidth, children = props.children, leftIcon = props.leftIcon, rightIcon = props.rightIcon, loadingText = props.loadingText, _b = props.iconSpacing, iconSpacing = _b === void 0 ? "0.5rem" : _b, _c = props.type, type = _c === void 0 ? "button" : _c, spinner = props.spinner, _d = props.variant, variant = _d === void 0 ? group === null || group === void 0 ? void 0 : group.variant : _d, _e = props.colorScheme, colorScheme = _e === void 0 ? group === null || group === void 0 ? void 0 : group.colorScheme : _e, _f = props.size, size = _f === void 0 ? group === null || group === void 0 ? void 0 : group.size : _f, className = props.className, rest = __rest(props, ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "variant", "colorScheme", "size", "className"]);
    var styles = useComponentStyle({
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
    var focusSelector = pseudoSelectors["_focus"];
    var _focus = merge((_a = styles === null || styles === void 0 ? void 0 : styles[focusSelector]) !== null && _a !== void 0 ? _a : {}, { zIndex: 1 });
    var _className = cx("chakra-button", className);
    return (React.createElement(StyledButton, __assign({ disabled: isDisabled || isLoading, ref: ref, type: type, width: isFullWidth ? "100%" : undefined, "data-active": dataAttr(isActive), "data-loading": dataAttr(isLoading), variant: variant, colorScheme: colorScheme, size: size, className: _className }, (!!group && { _focus: _focus }), rest),
        leftIcon && !isLoading && (React.createElement(ButtonIcon, { ml: -1, mr: iconSpacing, children: leftIcon })),
        isLoading && (React.createElement(ButtonSpinner, { spacing: iconSpacing, label: loadingText, children: spinner })),
        isLoading
            ? loadingText || React.createElement(chakra.span, { opacity: 0, children: children })
            : children,
        rightIcon && !isLoading && (React.createElement(ButtonIcon, { ml: iconSpacing, mr: -1, children: rightIcon }))));
});
if (__DEV__) {
    Button.displayName = "Button";
}
var ButtonIcon = function (props) {
    var a11yProps = {
        "aria-hidden": true,
        focusable: false,
    };
    var children = isValidElement(props.children)
        ? cloneElement(props.children, a11yProps)
        : props.children;
    return (React.createElement(chakra.span, __assign({ className: "chakra-button__icon" }, props, { children: children })));
};
if (__DEV__) {
    ButtonIcon.displayName = "ButtonIcon";
}
var ButtonSpinner = function (props) {
    var label = props.label, spacing = props.spacing, _a = props.children, children = _a === void 0 ? React.createElement(Spinner, { color: "currentColor", width: "1em", height: "1em" }) : _a, className = props.className, rest = __rest(props, ["label", "spacing", "children", "className"]);
    var _className = cx("chakra-button__spinner", className);
    return (React.createElement(chakra.div, __assign({ fontSize: "1em", lineHeight: "normal", position: label ? "relative" : "absolute", mr: label ? spacing : 0, className: _className }, rest, { children: children })));
};
if (__DEV__) {
    ButtonSpinner.displayName = "ButtonSpinner";
}
//# sourceMappingURL=Button.js.map