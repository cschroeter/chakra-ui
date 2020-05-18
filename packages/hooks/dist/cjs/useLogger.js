"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogger = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var useUpdateEffect_1 = require("./useUpdateEffect");
/**
 * React hook to console-log a value when it mounts
 * and as it updates.
 *
 * @param label a label for the component
 * @param values parameters to log
 */
function useLogger(label) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    react_1.useEffect(function () {
        console.log.apply(console, tslib_1.__spreadArrays([label + " mounted:"], values));
        return function () {
            console.log(label + " unmounted");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useUpdateEffect_1.useUpdateEffect(function () {
        console.log.apply(console, tslib_1.__spreadArrays([label + " updated:"], values));
    });
}
exports.useLogger = useLogger;
//# sourceMappingURL=useLogger.js.map