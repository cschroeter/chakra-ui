"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRightAddon = exports.InputLeftAddon = exports.InputAddon = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Input_group_1 = require("./Input.group");
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
var StyledAddon = system_1.chakra("div", {
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
exports.InputAddon = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = props.placement, placement = _b === void 0 ? "left" : _b, rest = tslib_1.__rest(props, ["placement"]);
    var placementStyles = (_a = placements[placement]) !== null && _a !== void 0 ? _a : {};
    var group = Input_group_1.useInputGroup();
    return (React.createElement(StyledAddon, tslib_1.__assign({ ref: ref }, placementStyles, rest, { variant: (group === null || group === void 0 ? void 0 : group.variant) || props.variant, size: (group === null || group === void 0 ? void 0 : group.size) || props.size })));
});
if (utils_1.__DEV__) {
    exports.InputAddon.displayName = "InputAddon";
}
/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */
exports.InputLeftAddon = function (props) {
    var leftAddon = Input_group_1.useInputGroup().leftAddon;
    hooks_1.useSafeLayoutEffect(function () {
        leftAddon === null || leftAddon === void 0 ? void 0 : leftAddon.mount();
        return function () { return leftAddon === null || leftAddon === void 0 ? void 0 : leftAddon.unmount(); };
    }, []);
    return (React.createElement(exports.InputAddon, tslib_1.__assign({ placement: "left" }, props, { className: utils_1.cx("chakra-input__left-addon", props.className) })));
};
if (utils_1.__DEV__) {
    exports.InputLeftAddon.displayName = "InputLeftAddon";
}
/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */
exports.InputRightAddon = function (props) {
    var rightAddon = Input_group_1.useInputGroup().rightAddon;
    hooks_1.useSafeLayoutEffect(function () {
        rightAddon === null || rightAddon === void 0 ? void 0 : rightAddon.mount();
        return function () { return rightAddon === null || rightAddon === void 0 ? void 0 : rightAddon.unmount(); };
    }, []);
    return (React.createElement(exports.InputAddon, tslib_1.__assign({ placement: "right" }, props, { className: utils_1.cx("chakra-input__right-addon", props.className) })));
};
if (utils_1.__DEV__) {
    exports.InputRightAddon.displayName = "InputRightAddon";
}
//# sourceMappingURL=Input.addon.js.map