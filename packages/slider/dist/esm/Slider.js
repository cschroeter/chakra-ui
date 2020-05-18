import { __assign, __rest } from "tslib";
import { chakra, useThemeDefaultProps, ThemingProvider, useThemingContext, } from "@chakra-ui/system";
import { createContext, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useSlider } from "./Slider.hook";
var _a = createContext({
    strict: true,
    name: "SliderContext",
    errorMessage: "[Chakra UI]: useSliderContext can only be used within SliderProvider",
}), SliderProvider = _a[0], useSliderContext = _a[1];
export { SliderProvider, useSliderContext };
/**
 * Slider - Theming
 *
 * To style the slider filled track globally, change the
 * styles in `theme.components.Slider` under `Thumb` key.
 */
var StyledSlider = chakra("div", {
    themeKey: "Slider.Root",
    baseStyle: {
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
    },
});
/**
 * The Slider is used to allow users to make selections from a range of values.
 * It provides context and functionality for all slider components
 *
 * @see Docs     https://chakra-ui/slider
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices/#slider
 */
export function Slider(props) {
    var defaults = useThemeDefaultProps("Slider");
    var _a = props.variant, variant = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _a, _b = props.size, size = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _b, _c = props.orientation, orientation = _c === void 0 ? "horizontal" : _c, colorScheme = props.colorScheme, sliderProps = __rest(props, ["variant", "size", "orientation", "colorScheme"]);
    var themingProps = { variant: variant, colorScheme: colorScheme, size: size, orientation: orientation };
    var _d = useSlider(__assign(__assign({}, sliderProps), { orientation: orientation })), getInputProps = _d.getInputProps, getRootProps = _d.getRootProps, context = __rest(_d, ["getInputProps", "getRootProps"]);
    return (React.createElement(SliderProvider, { value: context },
        React.createElement(ThemingProvider, { value: themingProps },
            React.createElement(StyledSlider, __assign({ "data-chakra-slider": "" }, themingProps, getRootProps()),
                props.children,
                React.createElement("input", __assign({}, getInputProps()))))));
}
if (__DEV__) {
    Slider.displayName = "Slider";
}
/**
 * SliderThumb - Theming
 *
 * To style the slider thumb globally, change the
 * styles in `theme.components.Slider` under `Thumb` key.
 */
var StyledThumb = chakra("div", {
    themeKey: "Slider.Thumb",
    baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        outline: 0,
    },
});
/**
 * SliderThumb
 *
 * Slider component that acts as the handle used to select predefined
 * values by dragging its handle along the track
 *
 * @see Docs https://chakra-ui.com/slider
 */
export function SliderThumb(props) {
    var getThumbProps = useSliderContext().getThumbProps;
    var themingProps = useThemingContext();
    return React.createElement(StyledThumb, __assign({}, themingProps, getThumbProps(props)));
}
if (__DEV__) {
    SliderThumb.displayName = "SliderThumb";
}
/**
 * SliderTrack - Theming
 *
 * To style the slider track globally, change the
 * styles in `theme.components.Slider` under `Track` key.
 */
var StyledTrack = chakra("div", {
    themeKey: "Slider.Track",
    baseStyle: {
        overflow: "hidden",
    },
});
/**
 * SliderTrack
 *
 * Slider component that indicates the slider track.
 * @see Docs https://chakra-ui.com/slider
 */
export function SliderTrack(props) {
    var getTrackProps = useSliderContext().getTrackProps;
    var themingProps = useThemingContext();
    return React.createElement(StyledTrack, __assign({}, themingProps, getTrackProps(props)));
}
if (__DEV__) {
    SliderTrack.displayName = "SliderTrack";
}
/**
 * SliderFilledTrack - Theming
 *
 * To style the slider filled track globally, change the
 * styles in `theme.components.Slider` under `FilledTrack` key.
 */
var StyledFilledTrack = chakra("div", {
    themeKey: "Slider.FilledTrack",
    baseStyle: {
        width: "inherit",
        height: "inherit",
    },
});
/**
 * SliderFilledTrack
 *
 * Slider component that indicates the slider value along the
 * track. It shows the filled part of the slider
 *
 * @see Docs https://chakra-ui.com/slider
 */
export function SliderFilledTrack(props) {
    var getInnerTrackProps = useSliderContext().getInnerTrackProps;
    var themingProps = useThemingContext();
    return React.createElement(StyledFilledTrack, __assign({}, themingProps, getInnerTrackProps(props)));
}
if (__DEV__) {
    SliderFilledTrack.displayName = "SliderFilledTrack";
}
var StyledMarker = chakra("div");
/**
 * SliderMark
 *
 * React component used to provide names for specific Slider
 * values by defining labels or markers along the track.
 *
 * @see Docs https://chakra-ui.com/slider
 */
export function SliderMark(props) {
    var getMarkerProps = useSliderContext().getMarkerProps;
    return React.createElement(StyledMarker, __assign({ "data-chakra-slider-mark": "" }, getMarkerProps(props)));
}
if (__DEV__) {
    SliderMark.displayName = "SliderMark";
}
//# sourceMappingURL=Slider.js.map