import { useEffect } from "react";
import { useLatestRef } from "./useLatestRef";
/**
 * React hook that provides a declarative `setTimeout`
 *
 * @param callback the callback to run after specified delay
 * @param delay the delay (in ms)
 */
export function useTimeout(callback, delay) {
    var savedCallback = useLatestRef(callback);
    useEffect(function () {
        if (delay == null)
            return;
        var timeoutId = setTimeout(function () {
            var _a;
            (_a = savedCallback.current) === null || _a === void 0 ? void 0 : _a.call(savedCallback);
        }, delay);
        return function () { return clearTimeout(timeoutId); };
    }, [delay, savedCallback]);
}
//# sourceMappingURL=useTimeout.js.map