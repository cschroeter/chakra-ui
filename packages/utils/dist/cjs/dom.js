"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cx = exports.getOwnerDocument = exports.ariaAttr = exports.dataAttr = exports.normalizeEventKey = exports.isBrowser = exports.getWindow = void 0;
var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11.
 */
exports.getWindow = function (node) { var _a, _b; return (_b = (_a = node === null || node === void 0 ? void 0 : node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) !== null && _b !== void 0 ? _b : _window; };
/**
 * Check if we can use the DOM. Useful for SSR purposes
 */
function checkIsBrowser() {
    var _window = exports.getWindow();
    return Boolean(typeof _window !== "undefined" &&
        _window.document &&
        _window.document.createElement);
}
exports.isBrowser = checkIsBrowser();
/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */
function normalizeEventKey(event) {
    var key = event.key, keyCode = event.keyCode;
    var isArrowKey = keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;
    return isArrowKey ? "Arrow" + key : key;
}
exports.normalizeEventKey = normalizeEventKey;
exports.dataAttr = function (condition) {
    return (condition ? "" : undefined);
};
exports.ariaAttr = function (condition) {
    return condition ? true : undefined;
};
exports.getOwnerDocument = function (node) {
    return (node === null || node === void 0 ? void 0 : node.ownerDocument) || document;
};
exports.cx = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(Boolean).join(" ");
};
//# sourceMappingURL=dom.js.map