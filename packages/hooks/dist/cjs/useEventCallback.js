"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventCallback = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useSafeLayoutEffect_1 = require("./useSafeLayoutEffect");
/**
 * React hook for performant `useCallbacks`
 *
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
function useEventCallback(callback) {
    var ref = React.useRef(callback);
    useSafeLayoutEffect_1.useSafeLayoutEffect(function () {
        ref.current = callback;
    });
    return React.useCallback(function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return ref.current.apply(ref, tslib_1.__spreadArrays([event], args));
    }, []);
}
exports.useEventCallback = useEventCallback;
//# sourceMappingURL=useEventCallback.js.map