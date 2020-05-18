"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConst = void 0;
var react_1 = require("react");
/**
 * React hook that returns a constant value.
 * It always returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 *
 * @param initialValue the initial value
 */
function useConst(initialValue) {
    var value = react_1.useState(initialValue)[0];
    return value;
}
exports.useConst = useConst;
//# sourceMappingURL=useConst.js.map