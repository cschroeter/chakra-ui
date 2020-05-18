import { useLatestRef } from "@chakra-ui/hooks";
import { useEffect, useState } from "react";
import { addListener, getColorScheme, storage, syncBodyClassName, } from "./color-mode.utils";
/**
 * Syncs the classname of the `<body />` based on the
 * color mode.
 *
 * @example
 *
 * If mode is 'dark', body will be `<body class="chakra-ui-light"/>`
 */
function useSyncBodyClass(mode) {
    useEffect(function () {
        requestAnimationFrame(function () {
            syncBodyClassName(mode === "dark");
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
    var callback = useLatestRef(fn);
    useEffect(function () {
        if (!enabled)
            return;
        var removeListener = addListener(callback.current);
        return function () {
            removeListener === null || removeListener === void 0 ? void 0 : removeListener();
        };
    }, [callback, enabled]);
}
/**
 * React hook that sets up the localStorage, body className,
 * and reads from system preference
 */
export function useColorModeState(options) {
    var _a = useState((options === null || options === void 0 ? void 0 : options.initialColorMode) || "light"), mode = _a[0], setMode = _a[1];
    useSyncBodyClass(mode);
    useSyncSystemColorMode(setMode, !!(options === null || options === void 0 ? void 0 : options.useSystemColorMode));
    useEffect(function () {
        var stored = storage.get();
        if (!stored && (options === null || options === void 0 ? void 0 : options.useSystemColorMode)) {
            setMode(getColorScheme);
            return;
        }
        if (!stored || stored === mode)
            return;
        setMode(stored);
        // eslint-disable-next-line
    }, []);
    useEffect(function () {
        if (mode) {
            storage.set(mode);
        }
    }, [mode]);
    return [mode, setMode];
}
//# sourceMappingURL=color-mode.hook.js.map