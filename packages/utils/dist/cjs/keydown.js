"use strict";
// Credit goes to Diego Haz for this one
// https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/createOnKeyDown.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOnKeyDown = void 0;
var function_1 = require("./function");
var dom_1 = require("./dom");
function createOnKeyDown(options) {
    var keyMap = options.keyMap, onKey = options.onKey, stopPropagation = options.stopPropagation, onKeyDown = options.onKeyDown, _a = options.shouldKeyDown, shouldKeyDown = _a === void 0 ? function () { return true; } : _a, _b = options.preventDefault, preventDefault = _b === void 0 ? true : _b;
    return function (event) {
        if (!keyMap)
            return;
        var finalKeyMap = function_1.runIfFn(keyMap, event);
        var shouldPreventDefault = function_1.runIfFn(preventDefault, event);
        var shouldStopPropagation = function_1.runIfFn(stopPropagation, event);
        var eventKey = dom_1.normalizeEventKey(event);
        if (eventKey in finalKeyMap) {
            var action = finalKeyMap[eventKey];
            if (typeof action === "function" && shouldKeyDown(event)) {
                if (shouldPreventDefault)
                    event.preventDefault();
                if (shouldStopPropagation)
                    event.stopPropagation();
                onKey === null || onKey === void 0 ? void 0 : onKey(event);
                action(event);
                return;
            }
        }
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
    };
}
exports.createOnKeyDown = createOnKeyDown;
//# sourceMappingURL=keydown.js.map