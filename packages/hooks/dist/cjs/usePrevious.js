"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrevious = void 0;
var react_1 = require("react");
/**
 * React hook that tracks previous value
 *
 * @param value the value to track
 */
function usePrevious(value) {
    var valueRef = react_1.useRef();
    react_1.useEffect(function () {
        valueRef.current = value;
    }, [value]);
    return valueRef.current;
}
exports.usePrevious = usePrevious;
//# sourceMappingURL=usePrevious.js.map