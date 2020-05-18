"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomColor = exports.stringToColor = exports.ink = exports.toAlphas = exports.generateStripe = exports.complementary = exports.isAccessible = exports.contrast = exports.lighten = exports.darken = exports.shade = exports.tint = exports.opacity = exports.isLight = exports.isDark = exports.tone = exports.getColor = void 0;
var tslib_1 = require("tslib");
var tinycolor2_1 = tslib_1.__importDefault(require("tinycolor2"));
var utils_1 = require("@chakra-ui/utils");
/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */
exports.getColor = function (theme, color, fallback) {
    var raw = utils_1.get(theme, "colors." + color, color);
    var isValid = tinycolor2_1.default(raw).isValid();
    return isValid ? raw : fallback;
};
/**
 * Determines if the tone of given color is "light" or "dark"
 * @param color - the color in hex, rgb, or hsl
 */
exports.tone = function (color) { return function (theme) {
    var isDark = tinycolor2_1.default(exports.getColor(theme, color)).isDark();
    return isDark ? "dark" : "light";
}; };
/**
 * Determines if a color tone is "dark"
 * @param color - the color in hex, rgb, or hsl
 */
exports.isDark = function (color) { return function (theme) {
    return exports.tone(color)(theme) === "dark";
}; };
/**
 * Determines if a color tone is "light"
 * @param color - the color in hex, rgb, or hsl
 */
exports.isLight = function (color) { return function (theme) {
    return exports.tone(color)(theme) === "light";
}; };
/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add
 */
exports.opacity = function (color, opacity) { return function (theme) {
    var raw = exports.getColor(theme, color);
    return tinycolor2_1.default(raw)
        .setAlpha(opacity)
        .toRgbString();
}; };
/**
 * Add white to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
exports.tint = function (color, amount) { return function (theme) {
    var raw = exports.getColor(theme, color);
    return tinycolor2_1.default.mix(raw, "#fff", amount).toHexString();
}; };
/**
 * Add black to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
exports.shade = function (color, amount) { return function (theme) {
    var raw = exports.getColor(theme, color);
    return tinycolor2_1.default.mix(raw, "#000", amount).toHexString();
}; };
/**
 * Darken a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
exports.darken = function (color, amount) { return function (theme) {
    var raw = exports.getColor(theme, color);
    return tinycolor2_1.default(raw)
        .darken(amount)
        .toHexString();
}; };
exports.lighten = function (color, amount) { return function (theme) {
    return tinycolor2_1.default(exports.getColor(theme, color))
        .lighten(amount)
        .toHexString();
}; };
/**
 * Checks the contract ratio of between 2 colors,
 * based on the Web Content Accessibility Guidelines (Version 2.0).
 *
 * @param fg - the foreground or text color
 * @param bg - the background color
 */
exports.contrast = function (fg, bg) { return function (theme) {
    return tinycolor2_1.default.readability(exports.getColor(theme, bg), exports.getColor(theme, fg));
}; };
/**
 * Checks if a color meets the Web Content Accessibility
 * Guidelines (Version 2.0) for constract ratio.
 *
 * @param fg - the foreground or text color
 * @param bg - the background color
 */
exports.isAccessible = function (fg, bg, options) { return function (theme) {
    return tinycolor2_1.default.isReadable(exports.getColor(theme, bg), exports.getColor(theme, fg), options);
}; };
exports.complementary = function (color) { return function (theme) {
    return tinycolor2_1.default(exports.getColor(theme, color))
        .complement()
        .toHexString();
}; };
function generateStripe(size, color) {
    if (size === void 0) { size = "1rem"; }
    if (color === void 0) { color = "rgba(255, 255, 255, 0.15)"; }
    return {
        backgroundImage: "linear-gradient(\n    45deg,\n    " + color + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + color + " 50%,\n    " + color + " 75%,\n    transparent 75%,\n    transparent\n  )",
        backgroundSize: size + " " + size,
    };
}
exports.generateStripe = generateStripe;
/**
 * Returns an accessible ink color of any given fill color.
 *
 * @param color
 */
exports.toAlphas = function (color) { return ({
    900: exports.opacity(color, 0.92),
    800: exports.opacity(color, 0.8),
    700: exports.opacity(color, 0.6),
    600: exports.opacity(color, 0.48),
    500: exports.opacity(color, 0.38),
    400: exports.opacity(color, 0.24),
    300: exports.opacity(color, 0.16),
    200: exports.opacity(color, 0.12),
    100: exports.opacity(color, 0.08),
    50: exports.opacity(color, 0.04),
}); };
exports.ink = function (color, emphasis) {
    var values = {
        high: exports.toAlphas(color)[900],
        medium: exports.toAlphas(color)[700],
        low: exports.toAlphas(color)[500],
        lowest: exports.toAlphas(color)[300],
    };
    return values[emphasis];
};
function stringToColor(str) {
    var hash = 0;
    if (str.length === 0)
        return hash.toString();
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    var color = "#";
    for (var j = 0; j < 3; j++) {
        var value = (hash >> (j * 8)) & 255;
        color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
}
exports.stringToColor = stringToColor;
function randomColor() {
    return tinycolor2_1.default.random().toHexString();
}
exports.randomColor = randomColor;
randomColor.fromString = stringToColor;
randomColor.fromList = randomFromList;
function randomFromList(str, list) {
    var index = 0;
    if (str.length === 0)
        return list[0];
    for (var i = 0; i < str.length; i++) {
        index = str.charCodeAt(i) + ((index << 5) - index);
        index = index & index;
    }
    index = ((index % list.length) + list.length) % list.length;
    return list[index];
}
//# sourceMappingURL=index.js.map