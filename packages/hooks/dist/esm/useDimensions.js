import * as React from "react";
import { getBox } from "@chakra-ui/utils";
import { useSafeLayoutEffect } from "./useSafeLayoutEffect";
/**
 * Reack hook to measure a component's dimensions
 *
 * @param ref ref of the component to measure
 * @param observe if `true`, resize and scroll observers will be turned on
 */
export function useDimensions(ref, observe) {
    var _a = React.useState(null), dimensions = _a[0], setDimensions = _a[1];
    var rafId = React.useRef();
    useSafeLayoutEffect(function () {
        if (!ref.current)
            return;
        var node = ref.current;
        function measure() {
            rafId.current = requestAnimationFrame(function () {
                var boxModel = getBox(node);
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
//# sourceMappingURL=useDimensions.js.map