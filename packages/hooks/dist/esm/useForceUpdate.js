import { useState, useCallback } from "react";
/**
 * React hook for force a component to re-render
 */
export function useForceUpdate() {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var forceUpdate = useCallback(function () { return setCount(count + 1); }, [count]);
    return forceUpdate;
}
//# sourceMappingURL=useForceUpdate.js.map