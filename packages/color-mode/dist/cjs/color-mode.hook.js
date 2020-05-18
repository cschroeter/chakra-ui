"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColorModeState = void 0;
var hooks_1 = require("@chakra-ui/hooks");
var react_1 = require("react");
var color_mode_utils_1 = require("./color-mode.utils");
/**
 * Syncs the classname of the `<body />` based on the
 * color mode.
 *
 * @example
 *
 * If mode is 'dark', body will be `<body class="chakra-ui-light"/>`
 */
function useSyncBodyClass(mode) {
    react_1.useEffect(function () {
        requestAnimationFrame(function () {
            color_mode_utils_1.syncBodyClassName(mode === "dark");
        });
    }, [mode]);
}
/**
 * Syncs the system color mode preference with localStorage and
 * internal state.
 *
 * @param fn the function to run once user changes preference
 * @param enabled whether to run this hook or not
 */
function useSyncSystemColorMode(fn, enabled) {
    var callback = hooks_1.useLatestRef(fn);
    react_1.useEffect(function () {
        if (!enabled)
            return;
        var removeListener = color_mode_utils_1.addListener(callback.current);
        return function () {
            removeListener === null || removeListener === void 0 ? void 0 : removeListener();
        };
    }, [callback, enabled]);
}
/**
 * React hook that sets up the localStorage, body className,
 * and reads from system preference
 */
function useColorModeState(options) {
    var _a = react_1.useState((options === null || options === void 0 ? void 0 : options.initialColorMode) || "light"), mode = _a[0], setMode = _a[1];
    useSyncBodyClass(mode);
    useSyncSystemColorMode(setMode, !!(options === null || options === void 0 ? void 0 : options.useSystemColorMode));
    react_1.useEffect(function () {
        var stored = color_mode_utils_1.storage.get();
        if (!stored && (options === null || options === void 0 ? void 0 : options.useSystemColorMode)) {
            setMode(color_mode_utils_1.getColorScheme);
            return;
        }
        if (!stored || stored === mode)
            return;
        setMode(stored);
        // eslint-disable-next-line
    }, []);
    react_1.useEffect(function () {
        if (mode) {
            color_mode_utils_1.storage.set(mode);
        }
    }, [mode]);
    return [mode, setMode];
}
exports.useColorModeState = useColorModeState;
//# sourceMappingURL=color-mode.hook.js.map