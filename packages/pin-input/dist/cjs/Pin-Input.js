"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinInputField = exports.PinInput = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Pin_Input_hook_1 = require("./Pin-Input.hook");
var _a = utils_1.createContext({
    strict: true,
    name: "PinInputContext",
    errorMessage: "Chakra UI: PinInputField can only be used within PinInput component",
}), PinInputCtxProvider = _a[0], usePinInputContext = _a[1];
function PinInput(props) {
    var children = props.children, isDisabled = props.isDisabled, isInvalid = props.isInvalid, size = props.size, variant = props.variant, colorScheme = props.colorScheme;
    var context = tslib_1.__assign(tslib_1.__assign({}, Pin_Input_hook_1.usePinInput(props)), { isDisabled: isDisabled,
        isInvalid: isInvalid,
        size: size,
        variant: variant,
        colorScheme: colorScheme });
    return React.createElement(PinInputCtxProvider, { value: context }, children);
}
exports.PinInput = PinInput;
if (utils_1.__DEV__) {
    PinInput.displayName = "PinInput";
}
var StyledInput = system_1.chakra("input", {
    themeKey: "PinInput",
    shouldForwardProp: function (prop) {
        return !["focusBorderColor", "errorBorderColor"].includes(prop);
    },
});
exports.PinInputField = React.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var context = usePinInputContext();
    var ownProps = Pin_Input_hook_1.usePinInputField(tslib_1.__assign({ context: context, ref: ref }, rest));
    var size = context.size, variant = context.variant, colorScheme = context.colorScheme;
    var theming = { size: size, variant: variant, colorScheme: colorScheme };
    var _className = utils_1.cx("chakra-pin-input", className);
    return (React.createElement(StyledInput, tslib_1.__assign({ textAlign: "center", disabled: context.isDisabled, "aria-invalid": utils_1.ariaAttr(context.isInvalid), className: _className }, theming, ownProps)));
});
if (utils_1.__DEV__) {
    exports.PinInputField.displayName = "PinInputField";
}
//# sourceMappingURL=Pin-Input.js.map