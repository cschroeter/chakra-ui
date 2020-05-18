"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColorModeValue = exports.getColorModeValue = exports.LightMode = exports.DarkMode = exports.ColorModeProvider = exports.useColorMode = exports.ColorModeContext = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var color_mode_hook_1 = require("./color-mode.hook");
exports.ColorModeContext = react_1.createContext(["light", utils_1.noop]);
if (utils_1.__DEV__) {
    exports.ColorModeContext.displayName = "ColorModeContext";
}
/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */
exports.useColorMode = function () { return react_1.useContext(exports.ColorModeContext); };
/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
exports.ColorModeProvider = function (props) {
    var _a;
    var theme = react_1.useContext(core_1.ThemeContext);
    var fallbackConfig = {
        useSystemColorMode: false,
        initialColorMode: "light",
    };
    var config = utils_1.merge(fallbackConfig, (_a = theme.config) !== null && _a !== void 0 ? _a : {});
    var _b = color_mode_hook_1.useColorModeState(config), colorMode = _b[0], setColorMode = _b[1];
    var toggle = function () { return setColorMode(colorMode === "light" ? "dark" : "light"); };
    var context = [colorMode, toggle];
    return React.createElement(exports.ColorModeContext.Provider, tslib_1.__assign({ value: context }, props));
};
if (utils_1.__DEV__) {
    exports.ColorModeProvider.displayName = "ColorModeProvider";
}
/**
 * Locks the color mode to `dark`, without any way to change it.
 */
exports.DarkMode = function (props) { return (React.createElement(exports.ColorModeContext.Provider, tslib_1.__assign({ value: ["dark", utils_1.noop] }, props))); };
if (utils_1.__DEV__) {
    exports.DarkMode.displayName = "DarkMode";
}
/**
 * Locks the color mode to `light` without any way to change it.
 */
exports.LightMode = function (props) { return (React.createElement(exports.ColorModeContext.Provider, tslib_1.__assign({ value: ["light", utils_1.noop] }, props))); };
if (utils_1.__DEV__) {
    exports.LightMode.displayName = "LightMode";
}
/**
 * Change value based on color mode
 *
 * @param light the light mode value
 * @param dark the dark mode value
 */
exports.getColorModeValue = function (light, dark) {
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
exports.useColorModeValue = function (light, dark) {
    var colorMode = exports.useColorMode()[0];
    return exports.getColorModeValue(light, dark)(colorMode);
};
//# sourceMappingURL=ColorModeProvider.js.map