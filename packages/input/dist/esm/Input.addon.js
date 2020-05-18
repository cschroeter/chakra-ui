import { __assign, __rest } from "tslib";
import { useSafeLayoutEffect } from "@chakra-ui/hooks";
import { chakra } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
import { useInputGroup } from "./Input.group";
var placements = {
    left: {
        marginRight: "-1px",
        borderRightRadius: 0,
        borderRightColor: "transparent",
    },
    right: {
        marginRight: "-1px",
        borderLeftRadius: 0,
        borderLeftColor: "transparent",
    },
};
/**
 * StyledAddon
 *
 * Wrapper element around the InputAddon component
 */
var StyledAddon = chakra("div", {
    themeKey: "InputAddon",
    baseStyle: {
        flex: "0 0 auto",
        width: "auto",
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
    },
});
/**
 * InputAddon
 *
 * Element to append or prepend to an input
 */
export var InputAddon = forwardRef(function (props, ref) {
    var _a;
    var _b = props.placement, placement = _b === void 0 ? "left" : _b, rest = __rest(props, ["placement"]);
    var placementStyles = (_a = placements[placement]) !== null && _a !== void 0 ? _a : {};
    var group = useInputGroup();
    return (React.createElement(StyledAddon, __assign({ ref: ref }, placementStyles, rest, { variant: (group === null || group === void 0 ? void 0 : group.variant) || props.variant, size: (group === null || group === void 0 ? void 0 : group.size) || props.size })));
});
if (__DEV__) {
    InputAddon.displayName = "InputAddon";
}
/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */
export var InputLeftAddon = function (props) {
    var leftAddon = useInputGroup().leftAddon;
    useSafeLayoutEffect(function () {
        leftAddon === null || leftAddon === void 0 ? void 0 : leftAddon.mount();
        return function () { return leftAddon === null || leftAddon === void 0 ? void 0 : leftAddon.unmount(); };
    }, []);
    return (React.createElement(InputAddon, __assign({ placement: "left" }, props, { className: cx("chakra-input__left-addon", props.className) })));
};
if (__DEV__) {
    InputLeftAddon.displayName = "InputLeftAddon";
}
/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */
export var InputRightAddon = function (props) {
    var rightAddon = useInputGroup().rightAddon;
    useSafeLayoutEffect(function () {
        rightAddon === null || rightAddon === void 0 ? void 0 : rightAddon.mount();
        return function () { return rightAddon === null || rightAddon === void 0 ? void 0 : rightAddon.unmount(); };
    }, []);
    return (React.createElement(InputAddon, __assign({ placement: "right" }, props, { className: cx("chakra-input__right-addon", props.className) })));
};
if (__DEV__) {
    InputRightAddon.displayName = "InputRightAddon";
}
//# sourceMappingURL=Input.addon.js.map