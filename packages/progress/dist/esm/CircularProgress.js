import { __assign, __rest } from "tslib";
import * as React from "react";
import { getProgressProps, rotate, spin } from "./Progress.utils";
import { chakra } from "@chakra-ui/system";
import { isUndefined, __DEV__ } from "@chakra-ui/utils";
/**
 * Circle
 *
 * SVG circle element visually indicating the shape of the component
 */
var Circle = function (props) { return (React.createElement(chakra.circle, __assign({ cx: 50, cy: 50, r: 42, fill: "transparent" }, props))); };
if (__DEV__) {
    Circle.displayName = "Circle";
}
/**
 * Shape
 *
 * SVG wrapper element for the component's circular shape
 */
function Shape(props) {
    var size = props.size, isIndeterminate = props.isIndeterminate, rest = __rest(props, ["size", "isIndeterminate"]);
    return (React.createElement(chakra.svg, __assign({ width: size, height: size, viewBox: "0 0 100 100", animation: isIndeterminate ? rotate + " 2s linear infinite" : undefined }, rest)));
}
if (__DEV__) {
    Shape.displayName = "Shape";
}
var StyledProgress = chakra("div", {
    baseStyle: {
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
    },
});
/**
 * React component used to indicate the progress of an activity.
 *
 * It's built using `svg` and `circle` components with support for
 * theming and `indeterminate` state
 *
 * @see Docs https://chakra-ui.com/progress
 *
 * @todo add theming support for circular progress
 */
export function CircularProgress(props) {
    var _a = props.size, size = _a === void 0 ? "48px" : _a, _b = props.max, max = _b === void 0 ? 100 : _b, _c = props.min, min = _c === void 0 ? 0 : _c, valueText = props.valueText, getValueText = props.getValueText, value = props.value, capIsRound = props.capIsRound, children = props.children, _d = props.thickness, thickness = _d === void 0 ? "10px" : _d, _e = props.color, color = _e === void 0 ? "#0078d4" : _e, _f = props.trackColor, trackColor = _f === void 0 ? "#edebe9" : _f, rest = __rest(props, ["size", "max", "min", "valueText", "getValueText", "value", "capIsRound", "children", "thickness", "color", "trackColor"]);
    var progress = getProgressProps({
        min: min,
        max: max,
        value: value,
        valueText: valueText,
        getValueText: getValueText,
    });
    var isIndeterminate = isUndefined(progress.percent);
    var determinant = isUndefined(progress.percent)
        ? undefined
        : progress.percent * 2.64;
    var strokeDasharray = isUndefined(determinant)
        ? undefined
        : determinant + " " + (264 - determinant);
    var indicatorProps = isIndeterminate
        ? {
            css: { animation: spin + " 1.5s linear infinite" },
        }
        : {
            strokeDashoffset: 66,
            strokeDasharray: strokeDasharray,
            transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease",
        };
    return (React.createElement(StyledProgress, __assign({ "data-chakra-progress": "", fontSize: size }, progress.bind, rest),
        React.createElement(Shape, { size: size, isIndeterminate: isIndeterminate },
            React.createElement(Circle, { stroke: trackColor, strokeWidth: thickness, "data-chakra-progress-track": "" }),
            React.createElement(Circle, __assign({ stroke: color, strokeWidth: thickness, "data-chakra-progress-indicator": "", strokeLinecap: capIsRound ? "round" : undefined }, indicatorProps))),
        children));
}
if (__DEV__) {
    CircularProgress.displayName = "CircularProgress";
}
/**
 * CircularProgressLabel
 *
 * CircularProgress component label. In most cases it's a numeric indicator
 * of the circular progress component's value
 */
export var CircularProgressLabel = chakra("div", {
    baseStyle: {
        fontSize: "0.24em",
        top: "50%",
        left: "50%",
        width: "100%",
        textAlign: "center",
        position: "absolute",
        transform: "translate(-50%, -50%)",
    },
});
if (__DEV__) {
    CircularProgressLabel.displayName = "CircularProgressLabel";
}
//# sourceMappingURL=CircularProgress.js.map