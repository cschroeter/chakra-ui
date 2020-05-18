"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var tslib_1 = require("tslib");
var form_control_1 = require("@chakra-ui/form-control");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Input_group_1 = require("./Input.group");
/**
 * Input - Theming
 *
 * To style the input globally, change the styles in
 * `theme.components.Input`
 */
var StyledInput = system_1.chakra("input", {
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
exports.Input = react_1.forwardRef(function (props, ref) {
    var _a, _b, _c, _d;
    var inputProps = form_control_1.useFormControl(props);
    var group = Input_group_1.useInputGroup();
    var variant = (group === null || group === void 0 ? void 0 : group.variant) || props.variant;
    var size = (group === null || group === void 0 ? void 0 : group.size) || props.size;
    var theming = { variant: variant, size: size };
    var inputStyle = system_1.useComponentStyle({
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
    var _className = utils_1.cx("chakra-input", props.className);
    return (React.createElement(StyledInput, tslib_1.__assign({ ref: ref }, groupProps, inputProps, theming, { className: _className })));
});
if (utils_1.__DEV__) {
    exports.Input.displayName = "Input";
}
//# sourceMappingURL=Input.js.map