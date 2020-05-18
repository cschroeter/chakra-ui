"use strict";
// Really great work done by Diego Haz on this one
// https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/tabbable.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTabbable = exports.ensureFocus = exports.isFocusable = exports.isContentEditable = exports.isHidden = exports.isHTMLElement = exports.hasFocusWithin = exports.isDisabled = exports.hasNegativeTabIndex = exports.hasTabIndex = exports.hasDisplayNone = void 0;
exports.hasDisplayNone = function (element) {
    return window.getComputedStyle(element).display === "none";
};
exports.hasTabIndex = function (element) {
    return element.hasAttribute("tabindex");
};
exports.hasNegativeTabIndex = function (element) {
    return exports.hasTabIndex(element) && element.tabIndex === -1;
};
function isDisabled(element) {
    return (Boolean(element.getAttribute("disabled")) == true ||
        Boolean(element.getAttribute("aria-disabled")) == true);
}
exports.isDisabled = isDisabled;
function hasFocusWithin(element) {
    if (!document.activeElement)
        return false;
    return element.contains(document.activeElement);
}
exports.hasFocusWithin = hasFocusWithin;
function isHTMLElement(element) {
    return element instanceof HTMLElement;
}
exports.isHTMLElement = isHTMLElement;
function isHidden(element) {
    if (element.parentElement && isHidden(element.parentElement))
        return true;
    return element.hidden;
}
exports.isHidden = isHidden;
function isContentEditable(element) {
    var value = element.getAttribute("contenteditable");
    return value !== "false" && value != null;
}
exports.isContentEditable = isContentEditable;
function isFocusable(element) {
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
    return exports.hasTabIndex(element);
}
exports.isFocusable = isFocusable;
var isActiveElement = function (element) { return document.activeElement === element; };
function ensureFocus(element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isActive, isActive = _c === void 0 ? isActiveElement : _c, preventScroll = _b.preventScroll;
    if (isActive(element))
        return -1;
    return requestAnimationFrame(function () {
        element.focus({ preventScroll: preventScroll });
    });
}
exports.ensureFocus = ensureFocus;
function isTabbable(element) {
    return (isHTMLElement(element) &&
        isFocusable(element) &&
        !exports.hasNegativeTabIndex(element));
}
exports.isTabbable = isTabbable;
//# sourceMappingURL=tabbable.js.map