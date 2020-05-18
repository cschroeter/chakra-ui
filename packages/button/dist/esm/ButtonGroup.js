import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import { createContext, __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
var _a = createContext({
    strict: false,
    name: "ButtonGroupContext",
}), ButtonGroupCtxProvider = _a[0], useButtonGroup = _a[1];
export { useButtonGroup };
export var ButtonGroup = forwardRef(function (props, ref) {
    var size = props.size, colorScheme = props.colorScheme, variant = props.variant, className = props.className, rest = __rest(props, ["size", "colorScheme", "variant", "className"]);
    var css = {
        "> *:first-of-type:not(:last-of-type)": { borderRightRadius: 0 },
        "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
        "> *:not(:first-of-type):last-of-type": { borderLeftRadius: 0 },
    };
    var _className = cx("chakra-button__group", className);
    return (React.createElement(ButtonGroupCtxProvider, { value: { size: size, colorScheme: colorScheme, variant: variant } },
        React.createElement(chakra.div, __assign({ ref: ref, display: "flex", role: "group", whiteSpace: "nowrap", sx: css, className: _className }, rest))));
});
if (__DEV__) {
    ButtonGroup.displayName = "ButtonGroup";
}
//# sourceMappingURL=ButtonGroup.js.map