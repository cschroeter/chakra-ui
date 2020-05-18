"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clampValue = exports.roundValueToStep = exports.percentToValue = exports.valueToPercent = exports.countDecimalPlaces = exports.toPrecision = exports.maxSafeInteger = exports.minSafeInteger = void 0;
var assertion_1 = require("./assertion");
var logger_1 = require("./logger");
exports.minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
exports.maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;
/**
 * Convert a value to number
 * @param value the value to convert
 */
function toNumber(value) {
    var num = parseFloat(value);
    return assertion_1.isNotNumber(num) ? 0 : num;
}
/**
 * Converts a value to a specific precision (or decimal points).
 *
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value the value to convert
 * @param precision the precision or decimal points
 */
function toPrecision(value, precision) {
    var nextValue = toNumber(value);
    var scaleFactor = Math.pow(10, precision !== null && precision !== void 0 ? precision : 10);
    nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
    return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
exports.toPrecision = toPrecision;
/**
 * Counts the number of decimal places a number has
 *
 * @param value the decimal value to count
 */
function countDecimalPlaces(value) {
    if (!isFinite(value))
        return 0;
    var e = 1;
    var p = 0;
    while (Math.round(value * e) / e !== value) {
        e *= 10;
        p++;
    }
    return p;
}
exports.countDecimalPlaces = countDecimalPlaces;
/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */
function valueToPercent(value, min, max) {
    return ((value - min) * 100) / (max - min);
}
exports.valueToPercent = valueToPercent;
/**
 * Calculate the value based on percentage, lower and upper bound values
 *
 * @param percent the percent value in decimals (e.g 0.6, 0.3)
 * @param min the minimum value
 * @param max the maximum value
 */
function percentToValue(percent, min, max) {
    return (max - min) * percent + min;
}
exports.percentToValue = percentToValue;
/**
 * Rounds a specific value to the next or previous step
 *
 * @param value the value to round
 * @param step the specified step
 */
function roundValueToStep(value, step) {
    var nextValue = Math.round(value / step) * step;
    var precision = countDecimalPlaces(step);
    return toPrecision(nextValue, precision);
}
exports.roundValueToStep = roundValueToStep;
/**
 * Clamps a value to ensure it stays within the min and max range.
 *
 * @param value the value to clamp
 * @param min the minimum value
 * @param max the maximum value
 */
function clampValue(value, min, max) {
    if (value == null)
        return value;
    logger_1.warn({
        condition: max < min,
        message: "[Chakra UI] clamp: max cannot be less than min",
    });
    return Math.min(Math.max(value, min), max);
}
exports.clampValue = clampValue;
//# sourceMappingURL=number.js.map