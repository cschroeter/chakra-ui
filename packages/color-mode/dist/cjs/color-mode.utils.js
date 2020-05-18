"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addListener = exports.getColorScheme = exports.darkQuery = exports.lightQuery = exports.syncBodyClassName = exports.body = exports.storage = exports.classNameDark = exports.classNameLight = exports.storageKey = void 0;
var utils_1 = require("@chakra-ui/utils");
var isStorageSupported = typeof Storage !== "undefined";
exports.storageKey = "chakra-ui-color-mode";
exports.classNameLight = "chakra-ui-light";
exports.classNameDark = "chakra-ui-dark";
/**
 * Simple object for handle read-write for localStorage
 */
exports.storage = {
    get: function (init) {
        var _isStorageSupported = isStorageSupported && !!window.localStorage.getItem(exports.storageKey);
        var value = _isStorageSupported
            ? window.localStorage.getItem(exports.storageKey)
            : init;
        return value;
    },
    set: function (value) {
        if (isStorageSupported) {
            window.localStorage.setItem(exports.storageKey, value);
        }
    },
};
/**
 * SSR: Graceful fallback for the `body` element
 */
var mockBody = {
    classList: { add: utils_1.noop, remove: utils_1.noop },
};
exports.body = utils_1.isBrowser ? document.body : mockBody;
/**
 * Function to add/remove class from `body` based on color mode
 * @param isDark whether color mode is `dark`
 */
function syncBodyClassName(isDark) {
    exports.body.classList.add(isDark ? exports.classNameDark : exports.classNameLight);
    exports.body.classList.remove(isDark ? exports.classNameLight : exports.classNameDark);
}
exports.syncBodyClassName = syncBodyClassName;
/**
 * Check if JS media query matches the query string passed
 */
function getMediaQuery(query) {
    var _a;
    var mediaQueryList = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, query);
    var matches = !!mediaQueryList.media === mediaQueryList.matches;
    return matches;
}
exports.lightQuery = "(prefers-color-scheme: light)";
exports.darkQuery = "(prefers-color-scheme: dark)";
function getColorScheme() {
    var isDark = getMediaQuery(exports.darkQuery);
    if (isDark)
        return "dark";
    var isLight = getMediaQuery(exports.lightQuery);
    if (isLight)
        return "light";
    return "light";
}
exports.getColorScheme = getColorScheme;
/**
 * Adds system os color mode listener, and run the callback
 * once preference changes
 *
 * @param callback function to run
 */
function addListener(callback) {
    if (!window.hasOwnProperty("matchMedia")) {
        return undefined;
    }
    var mediaQueryList = window.matchMedia(exports.darkQuery);
    var listener = function () {
        callback(!!mediaQueryList.matches ? "dark" : "light");
    };
    listener();
    mediaQueryList.addListener(listener);
    return function () {
        mediaQueryList.removeListener(listener);
    };
}
exports.addListener = addListener;
//# sourceMappingURL=color-mode.utils.js.map