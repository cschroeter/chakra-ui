"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderMark = exports.SliderFilledTrack = exports.SliderTrack = exports.SliderThumb = exports.Slider = exports.useSliderContext = exports.SliderProvider = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Slider_hook_1 = require("./Slider.hook");
var _a = utils_1.createContext({
    strict: true,
    name: "SliderContext",
    errorMessage: "[Chakra UI]: useSliderContext can only be used within SliderProvider",
}), SliderProvider = _a[0], useSliderContext = _a[1];
exports.SliderProvider = SliderProvider;
exports.useSliderContext = useSliderContext;
/**
 * Slider - Theming
 *
 * To style the slider filled track globally, change the
 * styles in `theme.components.Slider` under `Thumb` key.
 */
var StyledSlider = system_1.chakra("div", {
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
function Slider(props) {
    var defaults = system_1.useThemeDefaultProps("Slider");
    var _a = props.variant, variant = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _a, _b = props.size, size = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _b, _c = props.orientation, orientation = _c === void 0 ? "horizontal" : _c, colorScheme = props.colorScheme, sliderProps = tslib_1.__rest(props, ["variant", "size", "orientation", "colorScheme"]);
    var themingProps = { variant: variant, colorScheme: colorScheme, size: size, orientation: orientation };
    var _d = Slider_hook_1.useSlider(tslib_1.__assign(tslib_1.__assign({}, sliderProps), { orientation: orientation })), getInputProps = _d.getInputProps, getRootProps = _d.getRootProps, context = tslib_1.__rest(_d, ["getInputProps", "getRootProps"]);
    return (React.createElement(SliderProvider, { value: context },
        React.createElement(system_1.ThemingProvider, { value: themingProps },
            React.createElement(StyledSlider, tslib_1.__assign({ "data-chakra-slider": "" }, themingProps, getRootProps()),
                props.children,
                React.createElement("input", tslib_1.__assign({}, getInputProps()))))));
}
exports.Slider = Slider;
if (utils_1.__DEV__) {
    Slider.displayName = "Slider";
}
/**
 * SliderThumb - Theming
 *
 * To style the slider thumb globally, change the
 * styles in `theme.components.Slider` under `Thumb` key.
 */
var StyledThumb = system_1.chakra("div", {
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
function SliderThumb(props) {
    var getThumbProps = useSliderContext().getThumbProps;
    var themingProps = system_1.useThemingContext();
    return React.createElement(StyledThumb, tslib_1.__assign({}, themingProps, getThumbProps(props)));
}
exports.SliderThumb = SliderThumb;
if (utils_1.__DEV__) {
    SliderThumb.displayName = "SliderThumb";
}
/**
 * SliderTrack - Theming
 *
 * To style the slider track globally, change the
 * styles in `theme.components.Slider` under `Track` key.
 */
var StyledTrack = system_1.chakra("div", {
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
function SliderTrack(props) {
    var getTrackProps = useSliderContext().getTrackProps;
    var themingProps = system_1.useThemingContext();
    return React.createElement(StyledTrack, tslib_1.__assign({}, themingProps, getTrackProps(props)));
}
exports.SliderTrack = SliderTrack;
if (utils_1.__DEV__) {
    SliderTrack.displayName = "SliderTrack";
}
/**
 * SliderFilledTrack - Theming
 *
 * To style the slider filled track globally, change the
 * styles in `theme.components.Slider` under `FilledTrack` key.
 */
var StyledFilledTrack = system_1.chakra("div", {
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
function SliderFilledTrack(props) {
    var getInnerTrackProps = useSliderContext().getInnerTrackProps;
    var themingProps = system_1.useThemingContext();
    return React.createElement(StyledFilledTrack, tslib_1.__assign({}, themingProps, getInnerTrackProps(props)));
}
exports.SliderFilledTrack = SliderFilledTrack;
if (utils_1.__DEV__) {
    SliderFilledTrack.displayName = "SliderFilledTrack";
}
var StyledMarker = system_1.chakra("div");
/**
 * SliderMark
 *
 * React component used to provide names for specific Slider
 * values by defining labels or markers along the track.
 *
 * @see Docs https://chakra-ui.com/slider
 */
function SliderMark(props) {
    var getMarkerProps = useSliderContext().getMarkerProps;
    return React.createElement(StyledMarker, tslib_1.__assign({ "data-chakra-slider-mark": "" }, getMarkerProps(props)));
}
exports.SliderMark = SliderMark;
if (utils_1.__DEV__) {
    SliderMark.displayName = "SliderMark";
}
//# sourceMappingURL=Slider.js.map