import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import { createContext, __DEV__, ariaAttr, cx } from "@chakra-ui/utils";
import * as React from "react";
import { usePinInput, usePinInputField, } from "./Pin-Input.hook";
var _a = createContext({
    strict: true,
    name: "PinInputContext",
    errorMessage: "Chakra UI: PinInputField can only be used within PinInput component",
}), PinInputCtxProvider = _a[0], usePinInputContext = _a[1];
export function PinInput(props) {
    var children = props.children, isDisabled = props.isDisabled, isInvalid = props.isInvalid, size = props.size, variant = props.variant, colorScheme = props.colorScheme;
    var context = __assign(__assign({}, usePinInput(props)), { isDisabled: isDisabled,
        isInvalid: isInvalid,
        size: size,
        variant: variant,
        colorScheme: colorScheme });
    return React.createElement(PinInputCtxProvider, { value: context }, children);
}
if (__DEV__) {
    PinInput.displayName = "PinInput";
}
var StyledInput = chakra("input", {
    themeKey: "PinInput",
    shouldForwardProp: function (prop) {
        return !["focusBorderColor", "errorBorderColor"].includes(prop);
    },
});
export var PinInputField = React.forwardRef(function (props, ref) {
    var className = props.className, rest = __rest(props, ["className"]);
    var context = usePinInputContext();
    var ownProps = usePinInputField(__assign({ context: context, ref: ref }, rest));
    var size = context.size, variant = context.variant, colorScheme = context.colorScheme;
    var theming = { size: size, variant: variant, colorScheme: colorScheme };
    var _className = cx("chakra-pin-input", className);
    return (React.createElement(StyledInput, __assign({ textAlign: "center", disabled: context.isDisabled, "aria-invalid": ariaAttr(context.isInvalid), className: _className }, theming, ownProps)));
});
if (__DEV__) {
    PinInputField.displayName = "PinInputField";
}
//# sourceMappingURL=Pin-Input.js.map