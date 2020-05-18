import { __assign } from "tslib";
import { ThemeContext } from "@emotion/core";
import { merge, noop, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { createContext, useContext } from "react";
import { useColorModeState } from "./color-mode.hook";
export var ColorModeContext = createContext(["light", noop]);
if (__DEV__) {
    ColorModeContext.displayName = "ColorModeContext";
}
/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */
export var useColorMode = function () { return useContext(ColorModeContext); };
/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
export var ColorModeProvider = function (props) {
    var _a;
    var theme = useContext(ThemeContext);
    var fallbackConfig = {
        useSystemColorMode: false,
        initialColorMode: "light",
    };
    var config = merge(fallbackConfig, (_a = theme.config) !== null && _a !== void 0 ? _a : {});
    var _b = useColorModeState(config), colorMode = _b[0], setColorMode = _b[1];
    var toggle = function () { return setColorMode(colorMode === "light" ? "dark" : "light"); };
    var context = [colorMode, toggle];
    return React.createElement(ColorModeContext.Provider, __assign({ value: context }, props));
};
if (__DEV__) {
    ColorModeProvider.displayName = "ColorModeProvider";
}
/**
 * Locks the color mode to `dark`, without any way to change it.
 */
export var DarkMode = function (props) { return (React.createElement(ColorModeContext.Provider, __assign({ value: ["dark", noop] }, props))); };
if (__DEV__) {
    DarkMode.displayName = "DarkMode";
}
/**
 * Locks the color mode to `light` without any way to change it.
 */
export var LightMode = function (props) { return (React.createElement(ColorModeContext.Provider, __assign({ value: ["light", noop] }, props))); };
if (__DEV__) {
    LightMode.displayName = "LightMode";
}
/**
 * Change value based on color mode
 *
 * @param light the light mode value
 * @param dark the dark mode value
 */
export var getColorModeValue = function (light, dark) {
    return function (colorMode) { return (colorMode === "light" ? light : dark); };
};
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export var useColorModeValue = function (light, dark) {
    var colorMode = useColorMode()[0];
    return getColorModeValue(light, dark)(colorMode);
};
//# sourceMappingURL=ColorModeProvider.js.map