"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoolean = void 0;
var react_1 = require("react");
/**
 * Reack hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
function useBoolean(initialState) {
    if (initialState === void 0) { initialState = false; }
    var _a = react_1.useState(initialState), value = _a[0], setValue = _a[1];
    var on = react_1.useCallback(function () {
        setValue(true);
    }, []);
    var off = react_1.useCallback(function () {
        setValue(false);
    }, []);
    var toggle = react_1.useCallback(function () {
        setValue(function (prev) { return !prev; });
    }, []);
    return [value, { on: on, off: off, toggle: toggle }];
}
exports.useBoolean = useBoolean;
//# sourceMappingURL=useBoolean.js.map