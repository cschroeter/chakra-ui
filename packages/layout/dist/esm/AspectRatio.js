import { __assign, __rest } from "tslib";
import { __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
import { Box } from "./Box";
/**
 * React component used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 *
 * @see Docs https://chakra-ui.com/aspectratio
 */
export var AspectRatio = React.forwardRef(function (props, ref) {
    var _a = props.ratio, ratio = _a === void 0 ? 4 / 3 : _a, children = props.children, className = props.className, rest = __rest(props
    // enforce single child
    , ["ratio", "children", "className"]);
    // enforce single child
    var child = React.Children.only(children);
    var _className = cx("chakra-aspect-ratio", className);
    return (React.createElement(Box, __assign({ ref: ref, position: "relative", className: _className, _before: {
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
if (__DEV__) {
    AspectRatio.displayName = "AspectRatio";
}
//# sourceMappingURL=AspectRatio.js.map