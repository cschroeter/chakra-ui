"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLatestRef = void 0;
var react_1 = require("react");
/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param value the value or function to persist
 */
function useLatestRef(value) {
    var ref = react_1.useRef(value);
    react_1.useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref;
}
exports.useLatestRef = useLatestRef;
//# sourceMappingURL=useLatestRef.js.map