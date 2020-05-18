import { __assign, __rest } from "tslib";
import { chakra, useThemeDefaultProps, } from "@chakra-ui/system";
import { createContext, cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef, useState } from "react";
var _a = createContext({
    strict: false,
    name: "InputGroupContext",
}), InputGroupProvider = _a[0], useInputGroup = _a[1];
export { useInputGroup };
export var InputGroup = forwardRef(function (props, ref) {
    var className = props.className, rest = __rest(props, ["className"]);
    var _a = useProvider(rest), htmlProps = _a.htmlProps, context = __rest(_a, ["htmlProps"]);
    var _className = cx("chakra-input__group", className);
    return (React.createElement(chakra.div, __assign({ className: _className, ref: ref, width: "100%", display: "flex", position: "relative" }, htmlProps),
        React.createElement(InputGroupProvider, { value: context, children: props.children })));
});
if (__DEV__) {
    InputGroup.displayName = "InputGroup";
}
function useMounted() {
    var _a = useState(false), isMounted = _a[0], setMounted = _a[1];
    var mount = function () { return setMounted(true); };
    var unmount = function () { return setMounted(false); };
    return { isMounted: isMounted, mount: mount, unmount: unmount };
}
function useProvider(props) {
    var defaults = useThemeDefaultProps("Input");
    var children = props.children, _a = props.size, size = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _a, _b = props.variant, variant = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _b, htmlProps = __rest(props, ["children", "size", "variant"]);
    var leftElement = useMounted();
    var rightElement = useMounted();
    var leftAddon = useMounted();
    var rightAddon = useMounted();
    return {
        leftElement: leftElement,
        rightElement: rightElement,
        leftAddon: leftAddon,
        rightAddon: rightAddon,
        htmlProps: htmlProps,
        size: size,
        variant: variant,
    };
}
//# sourceMappingURL=Input.group.js.map