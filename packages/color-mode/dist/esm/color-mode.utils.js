import { isBrowser, noop } from "@chakra-ui/utils";
var isStorageSupported = typeof Storage !== "undefined";
export var storageKey = "chakra-ui-color-mode";
export var classNameLight = "chakra-ui-light";
export var classNameDark = "chakra-ui-dark";
/**
 * Simple object for handle read-write for localStorage
 */
export var storage = {
    get: function (init) {
        var _isStorageSupported = isStorageSupported && !!window.localStorage.getItem(storageKey);
        var value = _isStorageSupported
            ? window.localStorage.getItem(storageKey)
            : init;
        return value;
    },
    set: function (value) {
        if (isStorageSupported) {
            window.localStorage.setItem(storageKey, value);
        }
    },
};
/**
 * SSR: Graceful fallback for the `body` element
 */
var mockBody = {
    classList: { add: noop, remove: noop },
};
export var body = isBrowser ? document.body : mockBody;
/**
 * Function to add/remove class from `body` based on color mode
 * @param isDark whether color mode is `dark`
 */
export function syncBodyClassName(isDark) {
    body.classList.add(isDark ? classNameDark : classNameLight);
    body.classList.remove(isDark ? classNameLight : classNameDark);
}
/**
 * Check if JS media query matches the query string passed
 */
function getMediaQuery(query) {
    var _a;
    var mediaQueryList = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, query);
    var matches = !!mediaQueryList.media === mediaQueryList.matches;
    return matches;
}
export var lightQuery = "(prefers-color-scheme: light)";
export var darkQuery = "(prefers-color-scheme: dark)";
export function getColorScheme() {
    var isDark = getMediaQuery(darkQuery);
    if (isDark)
        return "dark";
    var isLight = getMediaQuery(lightQuery);
    if (isLight)
        return "light";
    return "light";
}
/**
 * Adds system os color mode listener, and run the callback
 * once preference changes
 *
 * @param callback function to run
 */
export function addListener(callback) {
    if (!window.hasOwnProperty("matchMedia")) {
        return undefined;
    }
    var mediaQueryList = window.matchMedia(darkQuery);
    var listener = function () {
        callback(!!mediaQueryList.matches ? "dark" : "light");
    };
    listener();
    mediaQueryList.addListener(listener);
    return function () {
        mediaQueryList.removeListener(listener);
    };
}
//# sourceMappingURL=color-mode.utils.js.map