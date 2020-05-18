import { __assign, __rest } from "tslib";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { chakra, ThemingProvider, useThemingContext, } from "@chakra-ui/system";
import { createContext, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useNumberInput, } from "./NumberInput.hook";
/**
 * React context used to communicate between components
 */
var _a = createContext({
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
var StyledRoot = chakra("div", {
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
export var NumberInput = React.forwardRef(function (props, ref) {
    var size = props.size, variant = props.variant, colorScheme = props.colorScheme, componentProps = __rest(props, ["size", "variant", "colorScheme"]);
    var theming = { size: size, variant: variant, colorScheme: colorScheme };
    var _a = useNumberInput(componentProps), htmlProps = _a.htmlProps, context = __rest(_a, ["htmlProps"]);
    var _context = React.useMemo(function () { return context; }, [context]);
    return (React.createElement(ThemingProvider, { value: theming },
        React.createElement(NumberInputContextProvider, { value: _context },
            React.createElement(StyledRoot, __assign({ ref: ref }, theming, htmlProps)))));
});
if (__DEV__) {
    NumberInput.displayName = "NumberInput";
}
/**
 * NumberInputStepper - Theming
 *
 * To style the number input button group globally, change the styles in
 * `theme.components.NumberInput` under the `StepperGroup` key
 */
export var StyledStepperGroup = chakra("div", {
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
export var NumberInputStepper = React.forwardRef(function (props, ref) {
    var theming = useThemingContext();
    return React.createElement(StyledStepperGroup, __assign({ ref: ref }, theming, props));
});
if (__DEV__) {
    NumberInputStepper.displayName = "NumberInputStepper";
}
/**
 * NumberInputField - Theming
 *
 * By default, the number input field inherits the theming
 * of the `Input` component.
 */
var StyledInput = chakra("input", {
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
export var NumberInputField = React.forwardRef(function (props, ref) {
    var theming = useThemingContext();
    var getInputProps = useNumberInputContext().getInputProps;
    var htmlProps = getInputProps(__assign(__assign({}, props), { ref: ref }));
    return (React.createElement(StyledInput, __assign({}, theming, { 
        //@ts-ignore `size` is a valid `input` prop and it clashes with the size theming prop.
        size: theming === null || theming === void 0 ? void 0 : theming.size }, htmlProps)));
});
if (__DEV__) {
    NumberInputField.displayName = "NumberInputField";
}
/**
 * NumberInputStepper - Theming
 *
 * To style the number input's stepper buttons globally, change the styles in
 * `theme.components.NumberInput` under the `Stepper` key
 *
 */
export var StyledStepper = chakra("div", {
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
export var NumberDecrementStepper = React.forwardRef(function (props, ref) {
    var _a;
    var theming = useThemingContext();
    var getDecrementButtonProps = useNumberInputContext().getDecrementButtonProps;
    var htmlProps = getDecrementButtonProps(__assign(__assign({}, props), { ref: ref }));
    return (React.createElement(StyledStepper, __assign({}, theming, htmlProps), (_a = props.children) !== null && _a !== void 0 ? _a : React.createElement(TriangleDownIcon, null)));
});
if (__DEV__) {
    NumberDecrementStepper.displayName = "NumberDecrementStepper";
}
/**
 * NumberIncrementStepper
 *
 * React component used to increment the number input's value
 *
 * It renders a `div` with `role=button` by default
 */
export var NumberIncrementStepper = React.forwardRef(function (props, ref) {
    var _a;
    var theming = useThemingContext();
    var getIncrementButtonProps = useNumberInputContext().getIncrementButtonProps;
    var htmlProps = getIncrementButtonProps(__assign(__assign({}, props), { ref: ref }));
    return (React.createElement(StyledStepper, __assign({}, theming, htmlProps), (_a = props.children) !== null && _a !== void 0 ? _a : React.createElement(TriangleUpIcon, null)));
});
if (__DEV__) {
    NumberIncrementStepper.displayName = "NumberIncrementStepper";
}
//# sourceMappingURL=NumberInput.js.map