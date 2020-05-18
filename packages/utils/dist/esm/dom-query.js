import { isFocusable, isTabbable, isHTMLElement } from "./tabbable";
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
export function getAllFocusable(container) {
    var allFocusable = Array.from(container.querySelectorAll(selector));
    allFocusable.unshift(container);
    return allFocusable.filter(isFocusable);
}
export function getFirstFocusable(container) {
    var allFocusable = getAllFocusable(container);
    return allFocusable.length ? allFocusable[0] : null;
}
export function getAllTabbable(container, fallbackToFocusable) {
    var allFocusable = Array.from(container.querySelectorAll(selector));
    var allTabbable = allFocusable.filter(isTabbable);
    if (isTabbable(container)) {
        allTabbable.unshift(container);
    }
    if (!allTabbable.length && fallbackToFocusable) {
        return allFocusable;
    }
    return allTabbable;
}
export function getFirstTabbableIn(container, fallbackToFocusable) {
    var first = getAllTabbable(container, fallbackToFocusable)[0];
    return first || null;
}
export function getLastTabbableIn(container, fallbackToFocusable) {
    var allTabbable = getAllTabbable(container, fallbackToFocusable);
    return allTabbable[allTabbable.length - 1] || null;
}
export function getNextTabbable(container, fallbackToFocusable) {
    var allFocusable = getAllFocusable(container);
    var index = allFocusable.indexOf(document.activeElement);
    var slice = allFocusable.slice(index + 1);
    return (slice.find(isTabbable) ||
        allFocusable.find(isTabbable) ||
        (fallbackToFocusable ? slice[0] : null));
}
export function getPreviousTabbable(container, fallbackToFocusable) {
    var allFocusable = getAllFocusable(container).reverse();
    var index = allFocusable.indexOf(document.activeElement);
    var slice = allFocusable.slice(index + 1);
    return (slice.find(isTabbable) ||
        allFocusable.find(isTabbable) ||
        (fallbackToFocusable ? slice[0] : null));
}
export function focusNextTabbable(container, fallbackToFocusable) {
    var nextTabbable = getNextTabbable(container, fallbackToFocusable);
    if (nextTabbable && isHTMLElement(nextTabbable)) {
        nextTabbable.focus();
    }
}
export function focusPreviousTabbable(container, fallbackToFocusable) {
    var previousTabbable = getPreviousTabbable(container, fallbackToFocusable);
    if (previousTabbable && isHTMLElement(previousTabbable)) {
        previousTabbable.focus();
    }
}
function matches(element, selectors) {
    if ("matches" in element)
        return element.matches(selectors);
    if ("msMatchesSelector" in element)
        return element.msMatchesSelector(selectors);
    return element.webkitMatchesSelector(selectors);
}
export function closest(element, selectors) {
    if ("closest" in element)
        return element.closest(selectors);
    do {
        if (matches(element, selectors))
            return element;
        element = (element.parentElement || element.parentNode);
    } while (element !== null && element.nodeType === 1);
    return null;
}
//# sourceMappingURL=dom-query.js.map