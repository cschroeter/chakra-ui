"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertIcon = exports.AlertDescription = exports.AlertTitle = exports.Alert = exports.ALERT_STATUSES = void 0;
var tslib_1 = require("tslib");
var icons_1 = require("@chakra-ui/icons");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
exports.ALERT_STATUSES = {
    info: { icon: icons_1.InfoIcon, color: "blue" },
    warning: { icon: icons_1.WarningTwoIcon, color: "orange" },
    success: { icon: icons_1.CheckCircleIcon, color: "green" },
    error: { icon: icons_1.WarningIcon, color: "red" },
};
var _a = utils_1.createContext({
    name: "AlertContext",
}), AlertContextProvider = _a[0], useAlertContext = _a[1];
var StyledAlert = system_1.chakra("div", {
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
exports.Alert = react_1.forwardRef(function (props, ref) {
    var defaults = system_1.useThemeDefaultProps("Alert");
    var _a = props.status, status = _a === void 0 ? "info" : _a, _b = props.variant, variant = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _b, className = props.className, rest = tslib_1.__rest(props, ["status", "variant", "className"]);
    var colorScheme = exports.ALERT_STATUSES[status]["color"];
    var context = { status: status, variant: variant };
    var _className = utils_1.cx("chakra-alert", className);
    return (React.createElement(AlertContextProvider, { value: context },
        React.createElement(StyledAlert, tslib_1.__assign({ ref: ref, variant: variant, colorScheme: colorScheme, className: _className }, rest))));
});
exports.AlertTitle = system_1.chakra("div", {
    themeKey: "Alert.Title",
    baseStyle: {
        fontWeight: "bold",
        lineHeight: "normal",
    },
    attrs: function (props) { return ({
        className: utils_1.cx("chakra-alert__title", props.className),
    }); },
});
/**
 * AlertDescription
 *
 * The description of the alert to be announced by screen
 * readers.
 */
exports.AlertDescription = system_1.chakra("div", {
    themeKey: "Alert.Description",
    baseStyle: {
        display: "inline-block",
    },
    attrs: function (props) { return ({
        className: utils_1.cx("chakra-alert__description", props.className),
    }); },
});
var StyledWrapper = system_1.chakra("span", { themeKey: "Alert.Icon" });
/**
 * AlertIcon
 *
 * The visual icon for the alert that changes based on the `status` prop.
 */
exports.AlertIcon = function (props) {
    var _a = useAlertContext(), status = _a.status, variant = _a.variant;
    var _b = exports.ALERT_STATUSES[status], Icon = _b.icon, colorScheme = _b.color;
    var _className = utils_1.cx("chakra-alert__icon");
    return (React.createElement(StyledWrapper, tslib_1.__assign({ display: "inherit", variant: variant, colorScheme: colorScheme }, props, { className: _className }),
        React.createElement(Icon, { boxSize: "100%" })));
};
//# sourceMappingURL=Alert.js.map