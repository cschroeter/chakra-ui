import { useCallback, useState } from "react";
/**
 * Reack hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
export function useBoolean(initialState) {
    if (initialState === void 0) { initialState = false; }
    var _a = useState(initialState), value = _a[0], setValue = _a[1];
    var on = useCallback(function () {
        setValue(true);
    }, []);
    var off = useCallback(function () {
        setValue(false);
    }, []);
    var toggle = useCallback(function () {
        setValue(function (prev) { return !prev; });
    }, []);
    return [value, { on: on, off: off, toggle: toggle }];
}
//# sourceMappingURL=useBoolean.js.map