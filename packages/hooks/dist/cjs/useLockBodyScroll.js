"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLockBodyScroll = void 0;
var react_1 = require("react");
var body_scroll_lock_1 = require("body-scroll-lock");
/**
 * React hook to lock scrolling on the `body` element
 *
 * @param ref the target element to preserve after lock
 * @param shouldLock if `true`, scroll lock will be applied
 */
function useLockBodyScroll(ref, shouldLock) {
    react_1.useEffect(function () {
        var node = ref.current;
        if (!node || !shouldLock)
            return undefined;
        body_scroll_lock_1.disableBodyScroll(node, { reserveScrollBarGap: true });
        return function () { return body_scroll_lock_1.enableBodyScroll(node); };
    }, [ref, shouldLock]);
}
exports.useLockBodyScroll = useLockBodyScroll;
//# sourceMappingURL=useLockBodyScroll.js.map