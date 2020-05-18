import { __assign } from "tslib";
import { useFormControl } from "@chakra-ui/form-control";
import { chakra, useComponentStyle } from "@chakra-ui/system";
import { __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
import { useInputGroup } from "./Input.group";
/**
 * Input - Theming
 *
 * To style the input globally, change the styles in
 * `theme.components.Input`
 */
var StyledInput = chakra("input", {
    themeKey: "Input",
    shouldForwardProp: function (prop) {
        return !["focusBorderColor", "errorBorderColor"].includes(prop);
    },
});
/**
 * Input
 *
 * Element that allows users enter single valued data.
 */
export var Input = forwardRef(function (props, ref) {
    var _a, _b, _c, _d;
    var inputProps = useFormControl(props);
    var group = useInputGroup();
    var variant = (group === null || group === void 0 ? void 0 : group.variant) || props.variant;
    var size = (group === null || group === void 0 ? void 0 : group.size) || props.size;
    var theming = { variant: variant, size: size };
    var inputStyle = useComponentStyle({
        themeKey: "Input",
        variant: variant,
        size: size,
    });
    var groupProps = {};
    if ((_a = group === null || group === void 0 ? void 0 : group.leftElement) === null || _a === void 0 ? void 0 : _a.isMounted) {
        groupProps.paddingLeft = inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.minHeight;
    }
    if ((_b = group === null || group === void 0 ? void 0 : group.rightElement) === null || _b === void 0 ? void 0 : _b.isMounted) {
        groupProps.paddingRight = inputStyle === null || inputStyle === void 0 ? void 0 : inputStyle.minHeight;
    }
    if ((_c = group === null || group === void 0 ? void 0 : group.leftAddon) === null || _c === void 0 ? void 0 : _c.isMounted) {
        groupProps.borderLeftRadius = 0;
    }
    if ((_d = group === null || group === void 0 ? void 0 : group.rightAddon) === null || _d === void 0 ? void 0 : _d.isMounted) {
        groupProps.borderRightRadius = 0;
    }
    var _className = cx("chakra-input", props.className);
    return (React.createElement(StyledInput, __assign({ ref: ref }, groupProps, inputProps, theming, { className: _className })));
});
if (__DEV__) {
    Input.displayName = "Input";
}
//# sourceMappingURL=Input.js.map