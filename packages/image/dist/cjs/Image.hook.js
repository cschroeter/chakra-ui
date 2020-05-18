"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImage = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var React = tslib_1.__importStar(require("react"));
/**
 * React hook that loads an image in the browser,
 * and let's us know the `status` so we can show image
 * fallback if it's still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
function useImage(props) {
    var src = props.src, srcSet = props.srcSet, onLoad = props.onLoad, onError = props.onError, sizes = props.sizes, ignoreFallback = props.ignoreFallback;
    var _a = React.useState(function () {
        return src ? "loading" : "pending";
    }), status = _a[0], setStatus = _a[1];
    var imageRef = React.useRef();
    var load = React.useCallback(function () {
        if (!src)
            return;
        flush();
        var img = new Image();
        img.src = src;
        if (srcSet) {
            img.srcset = srcSet;
        }
        if (sizes) {
            img.sizes = sizes;
        }
        img.onload = function (event) {
            flush();
            setStatus("loaded");
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(event);
        };
        img.onerror = function (error) {
            flush();
            setStatus("failed");
            onError === null || onError === void 0 ? void 0 : onError(error);
        };
        imageRef.current = img;
    }, [onError, onLoad, src, srcSet, sizes]);
    var flush = function () {
        if (imageRef.current) {
            imageRef.current.onload = null;
            imageRef.current.onerror = null;
            imageRef.current = null;
        }
    };
    hooks_1.useSafeLayoutEffect(function () {
        /**
         * If user opts out of the fallback/placeholder
         * logic, let's bail out.
         */
        if (ignoreFallback)
            return;
        if (status === "loading") {
            load();
        }
        return function () {
            flush();
        };
    }, [status, load]);
    /**
     * If user opts out of the fallback/placeholder
     * logic, let's just return 'loaded'
     */
    return ignoreFallback ? "loaded" : status;
}
exports.useImage = useImage;
//# sourceMappingURL=Image.hook.js.map