import { __assign, __rest } from "tslib";
import * as React from "react";
import { chakra } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/icon";
import { __DEV__ } from "@chakra-ui/utils";
/**
 * CloseButton - Theming
 *
 * To style the input globally, change the styles in
 * `theme.components.CloseButton`
 */
var StyledButton = chakra("button", {
    themeKey: "CloseButton",
    baseStyle: {
        outline: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
    attrs: {
        type: "button",
        "aria-label": "Close",
    },
});
/**
 * CloseIcon
 *
 * The icon for the close button.
 */
var CloseIcon = function (props) { return (React.createElement(Icon, __assign({ focusable: "false", "aria-hidden": true }, props),
    React.createElement("path", { fill: "currentColor", d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z" }))); };
/**
 * CloseButton
 *
 * A button with a close icon.
 *
 * It is used to handle the close functionality in feedback and overlay components
 * like Alerts, Toasts, Drawers and Modals.
 */
export var CloseButton = function (props) {
    var _a = props.children, children = _a === void 0 ? React.createElement(CloseIcon, { width: "1em", height: "1em" }) : _a, isDisabled = props.isDisabled, rest = __rest(props, ["children", "isDisabled"]);
    return (React.createElement(StyledButton, __assign({ disabled: isDisabled }, rest), children));
};
if (__DEV__) {
    CloseButton.displayName = "CloseButton";
}
//# sourceMappingURL=CloseButton.js.map