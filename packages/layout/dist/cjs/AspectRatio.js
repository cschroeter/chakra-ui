"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspectRatio = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Box_1 = require("./Box");
/**
 * React component used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 *
 * @see Docs https://chakra-ui.com/aspectratio
 */
exports.AspectRatio = React.forwardRef(function (props, ref) {
    var _a = props.ratio, ratio = _a === void 0 ? 4 / 3 : _a, children = props.children, className = props.className, rest = tslib_1.__rest(props
    // enforce single child
    , ["ratio", "children", "className"]);
    // enforce single child
    var child = React.Children.only(children);
    var _className = utils_1.cx("chakra-aspect-ratio", className);
    return (React.createElement(Box_1.Box, tslib_1.__assign({ ref: ref, position: "relative", className: _className, _before: {
            height: 0,
            content: "\"\"",
            display: "block",
            paddingBottom: (1 / ratio) * 100 + "%",
        }, css: {
            "& > *": {
                overflow: "hidden",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            },
            "& > img, & > video": {
                objectFit: "cover",
            },
        } }, rest), child));
});
if (utils_1.__DEV__) {
    exports.AspectRatio.displayName = "AspectRatio";
}
//# sourceMappingURL=AspectRatio.js.map