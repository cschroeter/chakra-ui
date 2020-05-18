"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
var react_1 = require("react");
var useLatestRef_1 = require("./useLatestRef");
/**
 * React Hook that provides a declarative `setInterval`
 *
 * @param callback the callback to execute at interval
 * @param delay the `setInterval` delay (in ms)
 */
function useInterval(callback, delay) {
    var savedCallback = useLatestRef_1.useLatestRef(callback);
    react_1.useEffect(function () {
        var tick = function () {
            var _a;
            (_a = savedCallback.current) === null || _a === void 0 ? void 0 : _a.call(savedCallback);
        };
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
    }, [delay, savedCallback]);
}
exports.useInterval = useInterval;
//# sourceMappingURL=useInterval.js.map