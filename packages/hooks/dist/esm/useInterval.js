import { useEffect } from "react";
import { useLatestRef } from "./useLatestRef";
/**
 * React Hook that provides a declarative `setInterval`
 *
 * @param callback the callback to execute at interval
 * @param delay the `setInterval` delay (in ms)
 */
export function useInterval(callback, delay) {
    var savedCallback = useLatestRef(callback);
    useEffect(function () {
        var tick = function () {
            var _a;
            (_a = savedCallback.current) === null || _a === void 0 ? void 0 : _a.call(savedCallback);
        };
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
    }, [delay, savedCallback]);
}
//# sourceMappingURL=useInterval.js.map