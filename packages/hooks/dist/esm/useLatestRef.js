import { useRef, useEffect } from "react";
/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param value the value or function to persist
 */
export function useLatestRef(value) {
    var ref = useRef(value);
    useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref;
}
//# sourceMappingURL=useLatestRef.js.map