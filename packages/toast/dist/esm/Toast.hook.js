import { __assign, __rest } from "tslib";
import { Alert, AlertDescription, AlertIcon, AlertTitle, } from "@chakra-ui/alert";
import { CloseButton } from "@chakra-ui/close-button";
import { chakra, ThemeProvider, useTheme } from "@chakra-ui/system";
import { isFunction, merge } from "@chakra-ui/utils";
import * as React from "react";
import { toast } from "./Toast.class";
var Toast = function (props) {
    var status = props.status, variant = props.variant, id = props.id, title = props.title, isClosable = props.isClosable, onClose = props.onClose, description = props.description;
    return (React.createElement(Alert, { status: status, variant: variant, id: id, textAlign: "left", boxShadow: "lg", borderRadius: "md", alignItems: "start", margin: 2, paddingRight: 8 },
        React.createElement(AlertIcon, null),
        React.createElement(chakra.div, { flex: "1" },
            title && React.createElement(AlertTitle, null, title),
            description && (React.createElement(AlertDescription, { marginTop: "px", lineHeight: "short" }, description))),
        isClosable && (React.createElement(CloseButton, { size: "sm", onClick: onClose, position: "absolute", right: "4px", top: "4px" }))));
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
export function useToast() {
    var theme = useTheme();
    function toastImpl(options) {
        var render = options.render;
        var Message = function (props) { return (React.createElement(ThemeProvider, { theme: theme }, isFunction(render) ? (render(props)) : (React.createElement(Toast, __assign({}, __assign(__assign({}, props), opts)))))); };
        var opts = merge(defaults, options);
        return toast.notify(Message, opts);
    }
    toastImpl.close = toast.close;
    toastImpl.closeAll = toast.closeAll;
    // toasts can only be updated if they have a valid id
    toastImpl.update = function (id, options) {
        var render = options.render, rest = __rest(options, ["render"]);
        if (!id)
            return;
        var opts = merge(defaults, rest);
        toast.update(id, __assign(__assign({}, opts), { message: function (props) { return (React.createElement(ThemeProvider, { theme: theme }, isFunction(render) ? (render(props)) : (React.createElement(Toast, __assign({}, __assign(__assign({}, props), opts)))))); } }));
    };
    toastImpl.isActive = toast.isActive;
    return toastImpl;
}
export default useToast;
//# sourceMappingURL=Toast.hook.js.map