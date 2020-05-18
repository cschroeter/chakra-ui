import tiny from "tinycolor2";
import { get } from "@chakra-ui/utils";
/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */
export var getColor = function (theme, color, fallback) {
    var raw = get(theme, "colors." + color, color);
    var isValid = tiny(raw).isValid();
    return isValid ? raw : fallback;
};
/**
 * Determines if the tone of given color is "light" or "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export var tone = function (color) { return function (theme) {
    var isDark = tiny(getColor(theme, color)).isDark();
    return isDark ? "dark" : "light";
}; };
/**
 * Determines if a color tone is "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export var isDark = function (color) { return function (theme) {
    return tone(color)(theme) === "dark";
}; };
/**
 * Determines if a color tone is "light"
 * @param color - the color in hex, rgb, or hsl
 */
export var isLight = function (color) { return function (theme) {
    return tone(color)(theme) === "light";
}; };
/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add
 */
export var opacity = function (color, opacity) { return function (theme) {
    var raw = getColor(theme, color);
    return tiny(raw)
        .setAlpha(opacity)
        .toRgbString();
}; };
/**
 * Add white to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
export var tint = function (color, amount) { return function (theme) {
    var raw = getColor(theme, color);
    return tiny.mix(raw, "#fff", amount).toHexString();
}; };
/**
 * Add black to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
export var shade = function (color, amount) { return function (theme) {
    var raw = getColor(theme, color);
    return tiny.mix(raw, "#000", amount).toHexString();
}; };
/**
 * Darken a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
export var darken = function (color, amount) { return function (theme) {
    var raw = getColor(theme, color);
    return tiny(raw)
        .darken(amount)
        .toHexString();
}; };
export var lighten = function (color, amount) { return function (theme) {
    return tiny(getColor(theme, color))
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
export var contrast = function (fg, bg) { return function (theme) {
    return tiny.readability(getColor(theme, bg), getColor(theme, fg));
}; };
/**
 * Checks if a color meets the Web Content Accessibility
 * Guidelines (Version 2.0) for constract ratio.
 *
 * @param fg - the foreground or text color
 * @param bg - the background color
 */
export var isAccessible = function (fg, bg, options) { return function (theme) {
    return tiny.isReadable(getColor(theme, bg), getColor(theme, fg), options);
}; };
export var complementary = function (color) { return function (theme) {
    return tiny(getColor(theme, color))
        .complement()
        .toHexString();
}; };
export function generateStripe(size, color) {
    if (size === void 0) { size = "1rem"; }
    if (color === void 0) { color = "rgba(255, 255, 255, 0.15)"; }
    return {
        backgroundImage: "linear-gradient(\n    45deg,\n    " + color + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + color + " 50%,\n    " + color + " 75%,\n    transparent 75%,\n    transparent\n  )",
        backgroundSize: size + " " + size,
    };
}
/**
 * Returns an accessible ink color of any given fill color.
 *
 * @param color
 */
export var toAlphas = function (color) { return ({
    900: opacity(color, 0.92),
    800: opacity(color, 0.8),
    700: opacity(color, 0.6),
    600: opacity(color, 0.48),
    500: opacity(color, 0.38),
    400: opacity(color, 0.24),
    300: opacity(color, 0.16),
    200: opacity(color, 0.12),
    100: opacity(color, 0.08),
    50: opacity(color, 0.04),
}); };
export var ink = function (color, emphasis) {
    var values = {
        high: toAlphas(color)[900],
        medium: toAlphas(color)[700],
        low: toAlphas(color)[500],
        lowest: toAlphas(color)[300],
    };
    return values[emphasis];
};
export function stringToColor(str) {
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
export function randomColor() {
    return tiny.random().toHexString();
}
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