"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = void 0;
var react_1 = require("react");
var useLatestRef_1 = require("./useLatestRef");
/**
 * React hook that provides a declarative `setTimeout`
 *
 * @param callback the callback to run after specified delay
 * @param delay the delay (in ms)
 */
function useTimeout(callback, delay) {
    var savedCallback = useLatestRef_1.useLatestRef(callback);
    react_1.useEffect(function () {
        if (delay == null)
            return;
        var timeoutId = setTimeout(function () {
            var _a;
            (_a = savedCallback.current) === null || _a === void 0 ? void 0 : _a.call(savedCallback);
        }, delay);
        return function () { return clearTimeout(timeoutId); };
    }, [delay, savedCallback]);
}
exports.useTimeout = useTimeout;
//# sourceMappingURL=useTimeout.js.map