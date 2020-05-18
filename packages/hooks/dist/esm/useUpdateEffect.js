import { useRef, useEffect } from "react";
/**
 * React effect hook that invokes only on update.
 * It doesn't invoke on mount
 */
export var useUpdateEffect = function (effect, deps) {
    var mounted = useRef(false);
    useEffect(function () {
        if (mounted.current) {
            return effect();
        }
        mounted.current = true;
        return undefined;
    }, deps);
    return mounted.current;
};
//# sourceMappingURL=useUpdateEffect.js.map