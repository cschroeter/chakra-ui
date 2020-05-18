"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonCircle = exports.SkeletonText = exports.Skeleton = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var StyledSkeleton = system_1.chakra("div", {
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
var fadeIn = system_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  from { opacity: 0; }\n  to   { opacity: 1; }\n"], ["\n  from { opacity: 0; }\n  to   { opacity: 1; }\n"])));
exports.Skeleton = function (props) {
    var startColor = props.startColor, endColor = props.endColor, hasLoaded = props.hasLoaded, _a = props.fadeDuration, fadeDuration = _a === void 0 ? 0.4 : _a, _b = props.speed, speed = _b === void 0 ? 0.8 : _b, className = props.className, rest = tslib_1.__rest(props, ["startColor", "endColor", "hasLoaded", "fadeDuration", "speed", "className"]);
    var _className = utils_1.cx("chakra-skeleton", className);
    if (hasLoaded) {
        return (React.createElement(system_1.chakra.div, tslib_1.__assign({ className: _className, css: { animation: fadeIn + " " + fadeDuration + "s" } }, rest)));
    }
    return (React.createElement(StyledSkeleton, tslib_1.__assign({ startColor: startColor, endColor: endColor, speed: speed, className: _className }, rest)));
};
if (utils_1.__DEV__) {
    exports.Skeleton.displayName = "Skeleton";
}
var range = function (count) {
    return Array(count)
        .fill(1)
        .map(function (_, idx) { return idx + 1; });
};
function SkeletonText(props) {
    var _a = props.noOfLines, noOfLines = _a === void 0 ? 3 : _a, _b = props.spacing, spacing = _b === void 0 ? "0.5rem" : _b, _c = props.skeletonHeight, skeletonHeight = _c === void 0 ? "0.5rem" : _c, className = props.className, startColor = props.startColor, endColor = props.endColor, rest = tslib_1.__rest(props, ["noOfLines", "spacing", "skeletonHeight", "className", "startColor", "endColor"]);
    var numbers = range(noOfLines);
    var getWidth = function (index) {
        if (noOfLines > 1) {
            return index === numbers.length ? "80%" : "100%";
        }
        return "100%";
    };
    var _className = utils_1.cx("chakra-skeleton__group", className);
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ className: _className }, rest), numbers.map(function (number) { return (React.createElement(exports.Skeleton, { key: number, height: skeletonHeight, mb: number === numbers.length ? "0" : spacing, width: getWidth(number), startColor: startColor, endColor: endColor })); })));
}
exports.SkeletonText = SkeletonText;
exports.SkeletonCircle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "2rem" : _b, rest = tslib_1.__rest(_a, ["size"]);
    return (React.createElement(exports.Skeleton, tslib_1.__assign({ borderRadius: "full", boxSize: size }, rest)));
};
var templateObject_1;
//# sourceMappingURL=Skeleton.js.map