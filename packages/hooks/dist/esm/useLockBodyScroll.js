import { useEffect } from "react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
/**
 * React hook to lock scrolling on the `body` element
 *
 * @param ref the target element to preserve after lock
 * @param shouldLock if `true`, scroll lock will be applied
 */
export function useLockBodyScroll(ref, shouldLock) {
    useEffect(function () {
        var node = ref.current;
        if (!node || !shouldLock)
            return undefined;
        disableBodyScroll(node, { reserveScrollBarGap: true });
        return function () { return enableBodyScroll(node); };
    }, [ref, shouldLock]);
}
//# sourceMappingURL=useLockBodyScroll.js.map