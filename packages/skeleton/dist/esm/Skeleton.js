import { __assign, __makeTemplateObject, __rest } from "tslib";
import { chakra, keyframes } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
var StyledSkeleton = chakra("div", {
    themeKey: "Skeleton",
    baseStyle: {
        boxShadow: "none",
        opacity: 0.7,
        borderRadius: "2px",
        //@ts-ignore - Fix this later
        backgroundClip: "padding-box",
        cursor: "default",
        color: "transparent",
        pointerEvents: "none",
        userSelect: "none",
        "&::before, &::after, *": {
            visibility: "hidden",
        },
    },
});
var fadeIn = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { opacity: 0; }\n  to   { opacity: 1; }\n"], ["\n  from { opacity: 0; }\n  to   { opacity: 1; }\n"])));
export var Skeleton = function (props) {
    var startColor = props.startColor, endColor = props.endColor, hasLoaded = props.hasLoaded, _a = props.fadeDuration, fadeDuration = _a === void 0 ? 0.4 : _a, _b = props.speed, speed = _b === void 0 ? 0.8 : _b, className = props.className, rest = __rest(props, ["startColor", "endColor", "hasLoaded", "fadeDuration", "speed", "className"]);
    var _className = cx("chakra-skeleton", className);
    if (hasLoaded) {
        return (React.createElement(chakra.div, __assign({ className: _className, css: { animation: fadeIn + " " + fadeDuration + "s" } }, rest)));
    }
    return (React.createElement(StyledSkeleton, __assign({ startColor: startColor, endColor: endColor, speed: speed, className: _className }, rest)));
};
if (__DEV__) {
    Skeleton.displayName = "Skeleton";
}
var range = function (count) {
    return Array(count)
        .fill(1)
        .map(function (_, idx) { return idx + 1; });
};
export function SkeletonText(props) {
    var _a = props.noOfLines, noOfLines = _a === void 0 ? 3 : _a, _b = props.spacing, spacing = _b === void 0 ? "0.5rem" : _b, _c = props.skeletonHeight, skeletonHeight = _c === void 0 ? "0.5rem" : _c, className = props.className, startColor = props.startColor, endColor = props.endColor, rest = __rest(props, ["noOfLines", "spacing", "skeletonHeight", "className", "startColor", "endColor"]);
    var numbers = range(noOfLines);
    var getWidth = function (index) {
        if (noOfLines > 1) {
            return index === numbers.length ? "80%" : "100%";
        }
        return "100%";
    };
    var _className = cx("chakra-skeleton__group", className);
    return (React.createElement(chakra.div, __assign({ className: _className }, rest), numbers.map(function (number) { return (React.createElement(Skeleton, { key: number, height: skeletonHeight, mb: number === numbers.length ? "0" : spacing, width: getWidth(number), startColor: startColor, endColor: endColor })); })));
}
export var SkeletonCircle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "2rem" : _b, rest = __rest(_a, ["size"]);
    return (React.createElement(Skeleton, __assign({ borderRadius: "full", boxSize: size }, rest)));
};
var templateObject_1;
//# sourceMappingURL=Skeleton.js.map