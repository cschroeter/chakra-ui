"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var React = tslib_1.__importStar(require("react"));
var Image_hook_1 = require("./Image.hook");
var utils_1 = require("@chakra-ui/utils");
var StyledImage = system_1.chakra.img;
/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://chakra-ui.com/image
 */
exports.Image = React.forwardRef(function (props, ref) {
    var fallbackSrc = props.fallbackSrc, fallback = props.fallback, src = props.src, align = props.align, fit = props.fit, ignoreFallback = props.ignoreFallback, rest = tslib_1.__rest(props, ["fallbackSrc", "fallback", "src", "align", "fit", "ignoreFallback"]);
    var status = Image_hook_1.useImage(props);
    var shared = tslib_1.__assign({ ref: ref, objectFit: fit, objectPosition: align }, (ignoreFallback ? rest : utils_1.omit(rest, ["onError", "onLoad"])));
    if (status !== "loaded") {
        /**
         * If user passed a custom fallback component,
         * let's render it here.
         */
        if (fallback)
            return fallback;
        return (React.createElement(StyledImage, tslib_1.__assign({ "data-chakra-image-placeholder": "", src: fallbackSrc }, shared)));
    }
    return React.createElement(StyledImage, tslib_1.__assign({ src: src, "data-chakra-image": "" }, shared));
});
if (utils_1.__DEV__) {
    exports.Image.displayName = "Image";
}
//# sourceMappingURL=Image.js.map