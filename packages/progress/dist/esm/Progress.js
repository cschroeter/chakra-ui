import { __assign, __rest } from "tslib";
import { generateStripe } from "@chakra-ui/color";
import { chakra, useColorModeValue, useThemeDefaultProps, } from "@chakra-ui/system";
import { isUndefined, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { getProgressProps, progress, stripe, } from "./Progress.utils";
/**
 * ProgressLabel (Linear)
 *
 * Progress component used to show the numeric value of the progress.
 *
 * To style this component globally, change the styles in `theme.components.Progress`
 * under the `Label` key
 *
 * @see Docs https://chakra-ui.com/progress
 */
export var ProgressLabel = chakra("div", {
    themeKey: "Progress.Label",
    baseStyle: {
        top: "50%",
        left: "50%",
        width: "100%",
        textAlign: "center",
        position: "absolute",
        transform: "translate(-50%, -50%)",
    },
});
if (__DEV__) {
    ProgressLabel.displayName = "ProgressLabel";
}
/**
 * ProgressIndicator - Theming
 *
 * To style the progress indicator global, change the styles in
 * `theme.components.Indicator`
 */
var StyledIndicator = chakra("div", {
    themeKey: "Progress.Indicator",
});
/**
 * ProgressIndicator (Linear)
 *
 * The progress component that visually indicates the current level of the progress bar.
 * It applies `background-color` and changes it's width.
 *
 * @see Docs https://chakra-ui.com/progress
 */
function ProgressIndicator(props) {
    var min = props.min, max = props.max, value = props.value, rest = __rest(props, ["min", "max", "value"]);
    var progress = getProgressProps({ value: value, min: min, max: max });
    return (React.createElement(StyledIndicator, __assign({ width: progress.percent ? progress.percent + "%" : undefined }, progress.bind, rest)));
}
/**
 * ProgressTrack
 *
 * Wrapper element which houses the progress indicator and progress label.
 *
 * To style the progress track globally, change the styles in `theme.components.Progress`
 * under the `Track` key
 */
var ProgressTrack = chakra("div", {
    themeKey: "Progress.Track",
    baseStyle: {
        overflow: "hidden",
        position: "relative",
    },
});
/**
 * Progress (Linear)
 *
 * Progress is used to display the progress status for a task that takes a long
 * time or consists of several steps.
 *
 * It includes accessible attributes to help assistive technologies understand
 * and speak the progress values.
 *
 * @see Docs https://chakra-ui.com/progress
 */
export function Progress(props) {
    var defaults = useThemeDefaultProps("Progress");
    var _a = props.size, size = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _a, _b = props.colorScheme, colorScheme = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.colorScheme : _b, _c = props.variant, variant = _c === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _c, value = props.value, _d = props.min, min = _d === void 0 ? 0 : _d, _e = props.max, max = _e === void 0 ? 100 : _e, hasStripe = props.hasStripe, isAnimated = props.isAnimated, children = props.children, borderRadius = props.borderRadius, rest = __rest(props
    /**
     * Generate a strip style for the progress bar
     */
    , ["size", "colorScheme", "variant", "value", "min", "max", "hasStripe", "isAnimated", "children", "borderRadius"]);
    /**
     * Generate a strip style for the progress bar
     */
    var stripeStyle = useColorModeValue(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"));
    var isIndeterminate = isUndefined(value);
    var stripAnimation = { animation: stripe + " 1s linear infinite" };
    /**
     * We should not use stripe if it's `indeterminate`
     */
    var shouldAddStripe = !isIndeterminate && hasStripe;
    var shouldAnimateStripe = shouldAddStripe && isAnimated;
    /**
     * Generate styles for stripe and stripe animation
     */
    var css = __assign(__assign(__assign({}, (shouldAddStripe && stripeStyle)), (shouldAnimateStripe && stripAnimation)), (isIndeterminate && {
        position: "absolute",
        willChange: "left",
        minWidth: "50%",
        animation: progress + " 1s ease infinite normal none running",
    }));
    var themingProps = {
        variant: variant,
        size: size,
        colorScheme: colorScheme,
        isIndeterminate: isIndeterminate,
        borderRadius: borderRadius,
    };
    return (React.createElement(ProgressTrack, __assign({}, themingProps, rest),
        React.createElement(ProgressIndicator, __assign({ min: min, max: max, value: value, css: css }, themingProps)),
        children));
}
if (__DEV__) {
    Progress.displayName = "Progress";
}
//# sourceMappingURL=Progress.js.map