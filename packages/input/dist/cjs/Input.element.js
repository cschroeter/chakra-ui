"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRightElement = exports.InputLeftElement = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Input_group_1 = require("./Input.group");
var StyledElement = system_1.chakra("div", {
    baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        zIndex: 2,
    },
});
var InputElement = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = props.placement, placement = _b === void 0 ? "left" : _b, rest = tslib_1.__rest(props, ["placement"]);
    var group = Input_group_1.useInputGroup();
    var input = system_1.useComponentStyle({
        themeKey: "Input",
        variant: group === null || group === void 0 ? void 0 : group.variant,
        size: group === null || group === void 0 ? void 0 : group.size,
    });
    var placementProp = (_a = {}, _a[placement] = "0", _a);
    return (React.createElement(StyledElement, tslib_1.__assign({ width: input === null || input === void 0 ? void 0 : input.minHeight, height: input === null || input === void 0 ? void 0 : input.minHeight, fontSize: input === null || input === void 0 ? void 0 : input.fontSize, paddingX: input === null || input === void 0 ? void 0 : input.paddingLeft, ref: ref }, placementProp, rest)));
});
if (utils_1.__DEV__) {
    InputElement.displayName = "InputElement";
}
exports.InputLeftElement = react_1.forwardRef(function (props, ref) {
    var leftElement = Input_group_1.useInputGroup().leftElement;
    hooks_1.useSafeLayoutEffect(function () {
        leftElement === null || leftElement === void 0 ? void 0 : leftElement.mount();
        return function () { return leftElement === null || leftElement === void 0 ? void 0 : leftElement.unmount(); };
    }, []);
    var _className = utils_1.cx("chakra-input__left-element", props.className);
    return (React.createElement(InputElement, tslib_1.__assign({ ref: ref, placement: "left" }, props, { className: _className })));
});
if (utils_1.__DEV__) {
    exports.InputLeftElement.displayName = "InputLeftElement";
}
exports.InputRightElement = react_1.forwardRef(function (props, ref) {
    var rightElement = Input_group_1.useInputGroup().rightElement;
    hooks_1.useSafeLayoutEffect(function () {
        rightElement === null || rightElement === void 0 ? void 0 : rightElement.mount();
        return function () { return rightElement === null || rightElement === void 0 ? void 0 : rightElement.unmount(); };
    }, []);
    var _className = utils_1.cx("chakra-input__right-element", props.className);
    return (React.createElement(InputElement, tslib_1.__assign({ ref: ref, placement: "right" }, props, { className: _className })));
});
if (utils_1.__DEV__) {
    exports.InputRightElement.displayName = "InputRightElement";
}
//# sourceMappingURL=Input.element.js.map