"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForceUpdate = void 0;
var react_1 = require("react");
/**
 * React hook for force a component to re-render
 */
function useForceUpdate() {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var forceUpdate = react_1.useCallback(function () { return setCount(count + 1); }, [count]);
    return forceUpdate;
}
exports.useForceUpdate = useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map