import { __spreadArrays } from "tslib";
import * as React from "react";
import { useSafeLayoutEffect } from "./useSafeLayoutEffect";
/**
 * React hook for performant `useCallbacks`
 *
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback(callback) {
    var ref = React.useRef(callback);
    useSafeLayoutEffect(function () {
        ref.current = callback;
    });
    return React.useCallback(function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return ref.current.apply(ref, __spreadArrays([event], args));
    }, []);
}
//# sourceMappingURL=useEventCallback.js.map