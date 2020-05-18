// Number assertions
export function isNumber(value) {
    return typeof value === "number";
}
export var isNotNumber = function (value) {
    return typeof value !== "number" || isNaN(value) || !isFinite(value);
};
export function isNumeric(value) {
    return value != null && value - parseFloat(value) + 1 >= 0;
}
// Array assertions
export function isArray(value) {
    return Array.isArray(value);
}
export var isEmptyArray = function (value) { return isArray(value) && value.length === 0; };
// Function assertions
export function isFunction(value) {
    return typeof value === "function";
}
// Generic assertions
export var isDefined = function (value) {
    return typeof value !== "undefined" && value !== undefined;
};
export var isUndefined = function (value) {
    return typeof value === "undefined" || value === undefined;
};
// Object assertions
export var isObject = function (value) {
    var type = typeof value;
    return (value != null &&
        (type === "object" || type === "function") &&
        !isArray(value));
};
export var isEmptyObject = function (value) {
    return isObject(value) && Object.keys(value).length === 0;
};
export function isNotEmptyObject(value) {
    return value && !isEmptyObject(value);
}
export var isNull = function (value) { return value == null; };
// String assertions
export function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]";
}
// Event assertions
export function isInputEvent(value) {
    return value && isObject(value) && isObject(value.target);
}
// Empty assertions
export var isEmpty = function (value) {
    if (isArray(value))
        return isEmptyArray(value);
    if (isObject(value))
        return isEmptyObject(value);
    if (value == null || value === "")
        return true;
    return false;
};
export var __DEV__ = process.env.NODE_ENV !== "production";
//# sourceMappingURL=assertion.js.map