import { useRef, useEffect } from "react";
/**
 * React hook that tracks previous value
 *
 * @param value the value to track
 */
export function usePrevious(value) {
    var valueRef = useRef();
    useEffect(function () {
        valueRef.current = value;
    }, [value]);
    return valueRef.current;
}
//# sourceMappingURL=usePrevious.js.map