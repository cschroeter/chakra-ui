import { useState } from "react";
/**
 * React hook that returns a constant value.
 * It always returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 *
 * @param initialValue the initial value
 */
export function useConst(initialValue) {
    var value = useState(initialValue)[0];
    return value;
}
//# sourceMappingURL=useConst.js.map