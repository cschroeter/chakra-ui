"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closest = exports.focusPreviousTabbable = exports.focusNextTabbable = exports.getPreviousTabbable = exports.getNextTabbable = exports.getLastTabbableIn = exports.getFirstTabbableIn = exports.getAllTabbable = exports.getFirstFocusable = exports.getAllFocusable = void 0;
var tabbable_1 = require("./tabbable");
var selectors = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "area[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]:not([contenteditable=false])",
];
var selector = selectors.join();
function getAllFocusable(container) {
    var allFocusable = Array.from(container.querySelectorAll(selector));
    allFocusable.unshift(container);
    return allFocusable.filter(tabbable_1.isFocusable);
}
exports.getAllFocusable = getAllFocusable;
function getFirstFocusable(container) {
    var allFocusable = getAllFocusable(container);
    return allFocusable.length ? allFocusable[0] : null;
}
exports.getFirstFocusable = getFirstFocusable;
function getAllTabbable(container, fallbackToFocusable) {
    var allFocusable = Array.from(container.querySelectorAll(selector));
    var allTabbable = allFocusable.filter(tabbable_1.isTabbable);
    if (tabbable_1.isTabbable(container)) {
        allTabbable.unshift(container);
    }
    if (!allTabbable.length && fallbackToFocusable) {
        return allFocusable;
    }
    return allTabbable;
}
exports.getAllTabbable = getAllTabbable;
function getFirstTabbableIn(container, fallbackToFocusable) {
    var first = getAllTabbable(container, fallbackToFocusable)[0];
    return first || null;
}
exports.getFirstTabbableIn = getFirstTabbableIn;
function getLastTabbableIn(container, fallbackToFocusable) {
    var allTabbable = getAllTabbable(container, fallbackToFocusable);
    return allTabbable[allTabbable.length - 1] || null;
}
exports.getLastTabbableIn = getLastTabbableIn;
function getNextTabbable(container, fallbackToFocusable) {
    var allFocusable = getAllFocusable(container);
    var index = allFocusable.indexOf(document.activeElement);
    var slice = allFocusable.slice(index + 1);
    return (slice.find(tabbable_1.isTabbable) ||
        allFocusable.find(tabbable_1.isTabbable) ||
        (fallbackToFocusable ? slice[0] : null));
}
exports.getNextTabbable = getNextTabbable;
function getPreviousTabbable(container, fallbackToFocusable) {
    var allFocusable = getAllFocusable(container).reverse();
    var index = allFocusable.indexOf(document.activeElement);
    var slice = allFocusable.slice(index + 1);
    return (slice.find(tabbable_1.isTabbable) ||
        allFocusable.find(tabbable_1.isTabbable) ||
        (fallbackToFocusable ? slice[0] : null));
}
exports.getPreviousTabbable = getPreviousTabbable;
function focusNextTabbable(container, fallbackToFocusable) {
    var nextTabbable = getNextTabbable(container, fallbackToFocusable);
    if (nextTabbable && tabbable_1.isHTMLElement(nextTabbable)) {
        nextTabbable.focus();
    }
}
exports.focusNextTabbable = focusNextTabbable;
function focusPreviousTabbable(container, fallbackToFocusable) {
    var previousTabbable = getPreviousTabbable(container, fallbackToFocusable);
    if (previousTabbable && tabbable_1.isHTMLElement(previousTabbable)) {
        previousTabbable.focus();
    }
}
exports.focusPreviousTabbable = focusPreviousTabbable;
function matches(element, selectors) {
    if ("matches" in element)
        return element.matches(selectors);
    if ("msMatchesSelector" in element)
        return element.msMatchesSelector(selectors);
    return element.webkitMatchesSelector(selectors);
}
function closest(element, selectors) {
    if ("closest" in element)
        return element.closest(selectors);
    do {
        if (matches(element, selectors))
            return element;
        element = (element.parentElement || element.parentNode);
    } while (element !== null && element.nodeType === 1);
    return null;
}
exports.closest = closest;
//# sourceMappingURL=dom-query.js.map