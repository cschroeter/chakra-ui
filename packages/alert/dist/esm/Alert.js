import { __assign, __rest } from "tslib";
import { CheckCircleIcon, InfoIcon, WarningIcon, WarningTwoIcon, } from "@chakra-ui/icons";
import { chakra, useThemeDefaultProps } from "@chakra-ui/system";
import { createContext, cx } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
export var ALERT_STATUSES = {
    info: { icon: InfoIcon, color: "blue" },
    warning: { icon: WarningTwoIcon, color: "orange" },
    success: { icon: CheckCircleIcon, color: "green" },
    error: { icon: WarningIcon, color: "red" },
};
var _a = createContext({
    name: "AlertContext",
}), AlertContextProvider = _a[0], useAlertContext = _a[1];
var StyledAlert = chakra("div", {
    themeKey: "Alert.Root",
    baseStyle: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
    },
    attrs: {
        role: "alert",
    },
});
/**
 * Alert
 *
 * React component used to communicate the state or status of a
 * page, feature or action
 */
export var Alert = forwardRef(function (props, ref) {
    var defaults = useThemeDefaultProps("Alert");
    var _a = props.status, status = _a === void 0 ? "info" : _a, _b = props.variant, variant = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _b, className = props.className, rest = __rest(props, ["status", "variant", "className"]);
    var colorScheme = ALERT_STATUSES[status]["color"];
    var context = { status: status, variant: variant };
    var _className = cx("chakra-alert", className);
    return (React.createElement(AlertContextProvider, { value: context },
        React.createElement(StyledAlert, __assign({ ref: ref, variant: variant, colorScheme: colorScheme, className: _className }, rest))));
});
export var AlertTitle = chakra("div", {
    themeKey: "Alert.Title",
    baseStyle: {
        fontWeight: "bold",
        lineHeight: "normal",
    },
    attrs: function (props) { return ({
        className: cx("chakra-alert__title", props.className),
    }); },
});
/**
 * AlertDescription
 *
 * The description of the alert to be announced by screen
 * readers.
 */
export var AlertDescription = chakra("div", {
    themeKey: "Alert.Description",
    baseStyle: {
        display: "inline-block",
    },
    attrs: function (props) { return ({
        className: cx("chakra-alert__description", props.className),
    }); },
});
var StyledWrapper = chakra("span", { themeKey: "Alert.Icon" });
/**
 * AlertIcon
 *
 * The visual icon for the alert that changes based on the `status` prop.
 */
export var AlertIcon = function (props) {
    var _a = useAlertContext(), status = _a.status, variant = _a.variant;
    var _b = ALERT_STATUSES[status], Icon = _b.icon, colorScheme = _b.color;
    var _className = cx("chakra-alert__icon");
    return (React.createElement(StyledWrapper, __assign({ display: "inherit", variant: variant, colorScheme: colorScheme }, props, { className: _className }),
        React.createElement(Icon, { boxSize: "100%" })));
};
//# sourceMappingURL=Alert.js.map