"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToastStyle = exports.isVisible = exports.getToastPosition = exports.findToast = exports.findById = void 0;
var utils_1 = require("@chakra-ui/utils");
/**
 * Given an array of toasts for a specific position.
 * It returns the toast that matches the `id` passed
 */
function findById(arr, id) {
    return arr.find(function (toast) { return toast.id === id; });
}
exports.findById = findById;
/**
 * Given the toast manager state, finds the toast that matches
 * the id and return it's position and index
 */
function findToast(toasts, id) {
    var position = getToastPosition(toasts, id);
    var index = position
        ? toasts[position].findIndex(function (toast) { return toast.id == id; })
        : -1;
    return {
        position: position,
        index: index,
    };
}
exports.findToast = findToast;
/**
 * Given the toast manager state, finds the position of the toast that
 * matches the `id`
 */
function getToastPosition(toasts, id) {
    var position;
    utils_1.objectKeys(toasts).forEach(function (pos) {
        var found = findById(toasts[pos], id);
        if (found)
            position = pos;
    });
    return position;
}
exports.getToastPosition = getToastPosition;
/**
 * Given the toast manager state, checks if a specific toast is
 * still in the state, which means it's still visible on screen.
 */
function isVisible(toasts, id) {
    var found;
    Object.values(toasts).forEach(function (toasts) {
        found = toasts.find(function (toast) { return toast.id === id; });
    });
    return !!found;
}
exports.isVisible = isVisible;
/**
 * Get's the styles to be applied to a toast's container
 * based on it's position in the manager
 */
function getToastStyle(position) {
    var style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
    if (position.includes("right")) {
        style.alignItems = "flex-end";
    }
    else if (position.includes("left")) {
        style.alignItems = "flex-start";
    }
    return style;
}
exports.getToastStyle = getToastStyle;
//# sourceMappingURL=Toast.utils.js.map