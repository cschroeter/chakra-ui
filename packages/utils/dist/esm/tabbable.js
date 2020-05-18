// Really great work done by Diego Haz on this one
// https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/tabbable.ts
export var hasDisplayNone = function (element) {
    return window.getComputedStyle(element).display === "none";
};
export var hasTabIndex = function (element) {
    return element.hasAttribute("tabindex");
};
export var hasNegativeTabIndex = function (element) {
    return hasTabIndex(element) && element.tabIndex === -1;
};
export function isDisabled(element) {
    return (Boolean(element.getAttribute("disabled")) == true ||
        Boolean(element.getAttribute("aria-disabled")) == true);
}
export function hasFocusWithin(element) {
    if (!document.activeElement)
        return false;
    return element.contains(document.activeElement);
}
export function isHTMLElement(element) {
    return element instanceof HTMLElement;
}
export function isHidden(element) {
    if (element.parentElement && isHidden(element.parentElement))
        return true;
    return element.hidden;
}
export function isContentEditable(element) {
    var value = element.getAttribute("contenteditable");
    return value !== "false" && value != null;
}
export function isFocusable(element) {
    if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
        return false;
    }
    var localName = element.localName;
    var focusableTags = ["input", "select", "textarea", "button"];
    if (focusableTags.indexOf(localName) >= 0)
        return true;
    var others = {
        a: function () { return element.hasAttribute("href"); },
        audio: function () { return element.hasAttribute("controls"); },
        video: function () { return element.hasAttribute("controls"); },
    };
    if (localName in others) {
        return others[localName]();
    }
    if (isContentEditable(element))
        return true;
    return hasTabIndex(element);
}
var isActiveElement = function (element) { return document.activeElement === element; };
export function ensureFocus(element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isActive, isActive = _c === void 0 ? isActiveElement : _c, preventScroll = _b.preventScroll;
    if (isActive(element))
        return -1;
    return requestAnimationFrame(function () {
        element.focus({ preventScroll: preventScroll });
    });
}
export function isTabbable(element) {
    return (isHTMLElement(element) &&
        isFocusable(element) &&
        !hasNegativeTabIndex(element));
}
//# sourceMappingURL=tabbable.js.map