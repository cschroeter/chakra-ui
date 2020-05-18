"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimensions = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("@chakra-ui/utils");
var useSafeLayoutEffect_1 = require("./useSafeLayoutEffect");
/**
 * Reack hook to measure a component's dimensions
 *
 * @param ref ref of the component to measure
 * @param observe if `true`, resize and scroll observers will be turned on
 */
function useDimensions(ref, observe) {
    var _a = React.useState(null), dimensions = _a[0], setDimensions = _a[1];
    var rafId = React.useRef();
    useSafeLayoutEffect_1.useSafeLayoutEffect(function () {
        if (!ref.current)
            return;
        var node = ref.current;
        function measure() {
            rafId.current = requestAnimationFrame(function () {
                var boxModel = utils_1.getBox(node);
                setDimensions(boxModel);
            });
        }
        measure();
        if (observe) {
            window.addEventListener("resize", measure);
            window.addEventListener("scroll", measure);
            return function () {
                if (rafId.current) {
                    cancelAnimationFrame(rafId.current);
                }
                window.removeEventListener("resize", measure);
                window.removeEventListener("scroll", measure);
            };
        }
        return function () {
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [ref, observe]);
    return dimensions;
}
exports.useDimensions = useDimensions;
//# sourceMappingURL=useDimensions.js.map