"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToast = void 0;
var tslib_1 = require("tslib");
var alert_1 = require("@chakra-ui/alert");
var close_button_1 = require("@chakra-ui/close-button");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Toast_class_1 = require("./Toast.class");
var Toast = function (props) {
    var status = props.status, variant = props.variant, id = props.id, title = props.title, isClosable = props.isClosable, onClose = props.onClose, description = props.description;
    return (React.createElement(alert_1.Alert, { status: status, variant: variant, id: id, textAlign: "left", boxShadow: "lg", borderRadius: "md", alignItems: "start", margin: 2, paddingRight: 8 },
        React.createElement(alert_1.AlertIcon, null),
        React.createElement(system_1.chakra.div, { flex: "1" },
            title && React.createElement(alert_1.AlertTitle, null, title),
            description && (React.createElement(alert_1.AlertDescription, { marginTop: "px", lineHeight: "short" }, description))),
        isClosable && (React.createElement(close_button_1.CloseButton, { size: "sm", onClick: onClose, position: "absolute", right: "4px", top: "4px" }))));
};
var defaults = {
    duration: 5000,
    position: "bottom",
    variant: "solid",
};
/**
 * React hook used to create a function that can be used
 * to show toasts in an application.
 */
function useToast() {
    var theme = system_1.useTheme();
    function toastImpl(options) {
        var render = options.render;
        var Message = function (props) { return (React.createElement(system_1.ThemeProvider, { theme: theme }, utils_1.isFunction(render) ? (render(props)) : (React.createElement(Toast, tslib_1.__assign({}, tslib_1.__assign(tslib_1.__assign({}, props), opts)))))); };
        var opts = utils_1.merge(defaults, options);
        return Toast_class_1.toast.notify(Message, opts);
    }
    toastImpl.close = Toast_class_1.toast.close;
    toastImpl.closeAll = Toast_class_1.toast.closeAll;
    // toasts can only be updated if they have a valid id
    toastImpl.update = function (id, options) {
        var render = options.render, rest = tslib_1.__rest(options, ["render"]);
        if (!id)
            return;
        var opts = utils_1.merge(defaults, rest);
        Toast_class_1.toast.update(id, tslib_1.__assign(tslib_1.__assign({}, opts), { message: function (props) { return (React.createElement(system_1.ThemeProvider, { theme: theme }, utils_1.isFunction(render) ? (render(props)) : (React.createElement(Toast, tslib_1.__assign({}, tslib_1.__assign(tslib_1.__assign({}, props), opts)))))); } }));
    };
    toastImpl.isActive = Toast_class_1.toast.isActive;
    return toastImpl;
}
exports.useToast = useToast;
exports.default = useToast;
//# sourceMappingURL=Toast.hook.js.map