"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberIncrementStepper = exports.NumberDecrementStepper = exports.StyledStepper = exports.NumberInputField = exports.NumberInputStepper = exports.StyledStepperGroup = exports.NumberInput = void 0;
var tslib_1 = require("tslib");
var icons_1 = require("@chakra-ui/icons");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var NumberInput_hook_1 = require("./NumberInput.hook");
/**
 * React context used to communicate between components
 */
var _a = utils_1.createContext({
    name: "NumberInputContext",
    strict: true,
    errorMessage: "[Chakra UI]: `useNumberInputContext` must be used within `NumberInputContextProvider` ",
}), NumberInputContextProvider = _a[0], useNumberInputContext = _a[1];
/**
 * NumberInput - Theming
 *
 * To style the number input's container globally, change the styles in
 * `theme.components.NumberInput` under the `Root` key
 */
var StyledRoot = system_1.chakra("div", {
    themeKey: "NumberInput.Root",
    baseStyle: {
        position: "relative",
    },
});
/**
 * NumberInput
 *
 * React component that provides context and logic to all
 * number input sub-components.
 *
 * It renders a `div` by default.
 *
 * @see Docs http://chakra-ui.com/numberinput
 */
exports.NumberInput = React.forwardRef(function (props, ref) {
    var size = props.size, variant = props.variant, colorScheme = props.colorScheme, componentProps = tslib_1.__rest(props, ["size", "variant", "colorScheme"]);
    var theming = { size: size, variant: variant, colorScheme: colorScheme };
    var _a = NumberInput_hook_1.useNumberInput(componentProps), htmlProps = _a.htmlProps, context = tslib_1.__rest(_a, ["htmlProps"]);
    var _context = React.useMemo(function () { return context; }, [context]);
    return (React.createElement(system_1.ThemingProvider, { value: theming },
        React.createElement(NumberInputContextProvider, { value: _context },
            React.createElement(StyledRoot, tslib_1.__assign({ ref: ref }, theming, htmlProps)))));
});
if (utils_1.__DEV__) {
    exports.NumberInput.displayName = "NumberInput";
}
/**
 * NumberInputStepper - Theming
 *
 * To style the number input button group globally, change the styles in
 * `theme.components.NumberInput` under the `StepperGroup` key
 */
exports.StyledStepperGroup = system_1.chakra("div", {
    themeKey: "NumberInput.StepperGroup",
    baseStyle: {
        display: "flex",
        flexDirection: "column",
        top: "0",
        zIndex: 1,
    },
    attrs: {
        "aria-hidden": true,
    },
});
/**
 * NumberInputStepper
 *
 * React component used to group the increment and decrement
 * button spinners.
 *
 * It renders a `div` by default.
 *
 * @see Docs http://chakra-ui.com/numberinput
 */
exports.NumberInputStepper = React.forwardRef(function (props, ref) {
    var theming = system_1.useThemingContext();
    return React.createElement(exports.StyledStepperGroup, tslib_1.__assign({ ref: ref }, theming, props));
});
if (utils_1.__DEV__) {
    exports.NumberInputStepper.displayName = "NumberInputStepper";
}
/**
 * NumberInputField - Theming
 *
 * By default, the number input field inherits the theming
 * of the `Input` component.
 */
var StyledInput = system_1.chakra("input", {
    themeKey: "Input",
    baseStyle: {
        width: "100%",
    },
    shouldForwardProp: function (prop) {
        return !["focusBorderColor", "errorBorderColor"].includes(prop);
    },
});
/**
 * NumberInputField
 *
 * React component that represents the actual `input` field
 * where users can type to edit numeric values.
 *
 * It renders an `input` by default and ensures only numeric
 * values can be typed.
 *
 * @see Docs http://chakra-ui.com/numberinput
 */
exports.NumberInputField = React.forwardRef(function (props, ref) {
    var theming = system_1.useThemingContext();
    var getInputProps = useNumberInputContext().getInputProps;
    var htmlProps = getInputProps(tslib_1.__assign(tslib_1.__assign({}, props), { ref: ref }));
    return (React.createElement(StyledInput, tslib_1.__assign({}, theming, { 
        //@ts-ignore `size` is a valid `input` prop and it clashes with the size theming prop.
        size: theming === null || theming === void 0 ? void 0 : theming.size }, htmlProps)));
});
if (utils_1.__DEV__) {
    exports.NumberInputField.displayName = "NumberInputField";
}
/**
 * NumberInputStepper - Theming
 *
 * To style the number input's stepper buttons globally, change the styles in
 * `theme.components.NumberInput` under the `Stepper` key
 *
 */
exports.StyledStepper = system_1.chakra("div", {
    themeKey: "NumberInput.Stepper",
    baseStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        transition: "all 0.3s",
        userSelect: "none",
        cursor: "pointer",
        lineHeight: "normal",
    },
});
/**
 * NumberDecrementStepper
 *
 * React component used to decrement the number input's value
 *
 * It renders a `div` with `role=button` by default
 */
exports.NumberDecrementStepper = React.forwardRef(function (props, ref) {
    var _a;
    var theming = system_1.useThemingContext();
    var getDecrementButtonProps = useNumberInputContext().getDecrementButtonProps;
    var htmlProps = getDecrementButtonProps(tslib_1.__assign(tslib_1.__assign({}, props), { ref: ref }));
    return (React.createElement(exports.StyledStepper, tslib_1.__assign({}, theming, htmlProps), (_a = props.children) !== null && _a !== void 0 ? _a : React.createElement(icons_1.TriangleDownIcon, null)));
});
if (utils_1.__DEV__) {
    exports.NumberDecrementStepper.displayName = "NumberDecrementStepper";
}
/**
 * NumberIncrementStepper
 *
 * React component used to increment the number input's value
 *
 * It renders a `div` with `role=button` by default
 */
exports.NumberIncrementStepper = React.forwardRef(function (props, ref) {
    var _a;
    var theming = system_1.useThemingContext();
    var getIncrementButtonProps = useNumberInputContext().getIncrementButtonProps;
    var htmlProps = getIncrementButtonProps(tslib_1.__assign(tslib_1.__assign({}, props), { ref: ref }));
    return (React.createElement(exports.StyledStepper, tslib_1.__assign({}, theming, htmlProps), (_a = props.children) !== null && _a !== void 0 ? _a : React.createElement(icons_1.TriangleUpIcon, null)));
});
if (utils_1.__DEV__) {
    exports.NumberIncrementStepper.displayName = "NumberIncrementStepper";
}
//# sourceMappingURL=NumberInput.js.map