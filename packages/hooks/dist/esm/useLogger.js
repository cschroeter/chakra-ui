import { __spreadArrays } from "tslib";
import { useEffect } from "react";
import { useUpdateEffect } from "./useUpdateEffect";
/**
 * React hook to console-log a value when it mounts
 * and as it updates.
 *
 * @param label a label for the component
 * @param values parameters to log
 */
export function useLogger(label) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    useEffect(function () {
        console.log.apply(console, __spreadArrays([label + " mounted:"], values));
        return function () {
            console.log(label + " unmounted");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useUpdateEffect(function () {
        console.log.apply(console, __spreadArrays([label + " updated:"], values));
    });
}
//# sourceMappingURL=useLogger.js.map