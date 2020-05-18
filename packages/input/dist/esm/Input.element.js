import { __assign, __rest } from "tslib";
import { useSafeLayoutEffect } from "@chakra-ui/hooks";
import { chakra, useComponentStyle } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
import { useInputGroup } from "./Input.group";
var StyledElement = chakra("div", {
    baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        zIndex: 2,
    },
});
var InputElement = forwardRef(function (props, ref) {
    var _a;
    var _b = props.placement, placement = _b === void 0 ? "left" : _b, rest = __rest(props, ["placement"]);
    var group = useInputGroup();
    var input = useComponentStyle({
        themeKey: "Input",
        variant: group === null || group === void 0 ? void 0 : group.variant,
        size: group === null || group === void 0 ? void 0 : group.size,
    });
    var placementProp = (_a = {}, _a[placement] = "0", _a);
    return (React.createElement(StyledElement, __assign({ width: input === null || input === void 0 ? void 0 : input.minHeight, height: input === null || input === void 0 ? void 0 : input.minHeight, fontSize: input === null || input === void 0 ? void 0 : input.fontSize, paddingX: input === null || input === void 0 ? void 0 : input.paddingLeft, ref: ref }, placementProp, rest)));
});
if (__DEV__) {
    InputElement.displayName = "InputElement";
}
export var InputLeftElement = forwardRef(function (props, ref) {
    var leftElement = useInputGroup().leftElement;
    useSafeLayoutEffect(function () {
        leftElement === null || leftElement === void 0 ? void 0 : leftElement.mount();
        return function () { return leftElement === null || leftElement === void 0 ? void 0 : leftElement.unmount(); };
    }, []);
    var _className = cx("chakra-input__left-element", props.className);
    return (React.createElement(InputElement, __assign({ ref: ref, placement: "left" }, props, { className: _className })));
});
if (__DEV__) {
    InputLeftElement.displayName = "InputLeftElement";
}
export var InputRightElement = forwardRef(function (props, ref) {
    var rightElement = useInputGroup().rightElement;
    useSafeLayoutEffect(function () {
        rightElement === null || rightElement === void 0 ? void 0 : rightElement.mount();
        return function () { return rightElement === null || rightElement === void 0 ? void 0 : rightElement.unmount(); };
    }, []);
    var _className = cx("chakra-input__right-element", props.className);
    return (React.createElement(InputElement, __assign({ ref: ref, placement: "right" }, props, { className: _className })));
});
if (__DEV__) {
    InputRightElement.displayName = "InputRightElement";
}
//# sourceMappingURL=Input.element.js.map