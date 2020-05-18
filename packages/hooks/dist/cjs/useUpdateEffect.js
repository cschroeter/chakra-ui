"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateEffect = void 0;
var react_1 = require("react");
/**
 * React effect hook that invokes only on update.
 * It doesn't invoke on mount
 */
exports.useUpdateEffect = function (effect, deps) {
    var mounted = react_1.useRef(false);
    react_1.useEffect(function () {
        if (mounted.current) {
            return effect();
        }
        mounted.current = true;
        return undefined;
    }, deps);
    return mounted.current;
};
//# sourceMappingURL=useUpdateEffect.js.map