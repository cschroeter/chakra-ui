import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { useImage } from "./Image.hook";
import { __DEV__, omit } from "@chakra-ui/utils";
var StyledImage = chakra.img;
/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://chakra-ui.com/image
 */
export var Image = React.forwardRef(function (props, ref) {
    var fallbackSrc = props.fallbackSrc, fallback = props.fallback, src = props.src, align = props.align, fit = props.fit, ignoreFallback = props.ignoreFallback, rest = __rest(props, ["fallbackSrc", "fallback", "src", "align", "fit", "ignoreFallback"]);
    var status = useImage(props);
    var shared = __assign({ ref: ref, objectFit: fit, objectPosition: align }, (ignoreFallback ? rest : omit(rest, ["onError", "onLoad"])));
    if (status !== "loaded") {
        /**
         * If user passed a custom fallback component,
         * let's render it here.
         */
        if (fallback)
            return fallback;
        return (React.createElement(StyledImage, __assign({ "data-chakra-image-placeholder": "", src: fallbackSrc }, shared)));
    }
    return React.createElement(StyledImage, __assign({ src: src, "data-chakra-image": "" }, shared));
});
if (__DEV__) {
    Image.displayName = "Image";
}
//# sourceMappingURL=Image.js.map