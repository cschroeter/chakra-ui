import { __assign, __rest } from "tslib";
import * as React from "react";
import { mergeRefs, dataAttr } from "@chakra-ui/utils";
/**
 * useClickable
 *
 * React hook that implements all the interactions of a native `button`
 * component with support for making it focusable even if it's disabled.
 *
 * It can be used with both native button elements or other elements (like `div`).
 */
export function useClickable(props) {
    if (props === void 0) { props = {}; }
    var htmlRef = props.ref, isDisabled = props.isDisabled, isFocusable = props.isFocusable, _a = props.clickOnEnter, clickOnEnter = _a === void 0 ? true : _a, _b = props.clickOnSpace, clickOnSpace = _b === void 0 ? true : _b, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, onClick = props.onClick, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, tabIndexProp = props.tabIndex, onMouseOver = props.onMouseOver, htmlProps = __rest(props
    /**
     * We'll use this to track if the element is a button element
     */
    , ["ref", "isDisabled", "isFocusable", "clickOnEnter", "clickOnSpace", "onMouseDown", "onMouseUp", "onClick", "onKeyDown", "onKeyUp", "tabIndex", "onMouseOver"]);
    /**
     * We'll use this to track if the element is a button element
     */
    var _c = React.useState(true), isButton = _c[0], setIsButton = _c[1];
    /**
     * For custom button implementation, we'll use this to track when
     * we mouse down on the button, to enable use style it's ":active" style
     */
    var _d = React.useState(false), isActive = _d[0], setIsActive = _d[1];
    /**
     * The ref callback that fires as soon as the dom node is ready
     */
    var refCallback = React.useCallback(function (node) {
        if ((node === null || node === void 0 ? void 0 : node.tagName) !== "BUTTON") {
            setIsButton(false);
        }
    }, []);
    var tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
    var trulyDisabled = isDisabled && !isFocusable;
    var handleClick = React.useCallback(function (event) {
        if (isDisabled) {
            event.stopPropagation();
            event.preventDefault();
            return;
        }
        var self = event.currentTarget;
        self.focus();
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    }, [isDisabled, onClick]);
    var handleKeyDown = React.useCallback(function (event) {
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
        if (isDisabled || event.defaultPrevented || event.metaKey) {
            return;
        }
        var shouldClickOnEnter = clickOnEnter && event.key === "Enter";
        var shouldClickOnSpace = clickOnSpace && event.key === " ";
        if (!isButton && shouldClickOnSpace) {
            event.preventDefault();
            setIsActive(true);
            return;
        }
        if (!isButton && shouldClickOnEnter) {
            event.preventDefault();
            var self_1 = event.currentTarget;
            self_1.click();
            return;
        }
    }, [isDisabled, isButton, onKeyDown, clickOnEnter, clickOnSpace]);
    var handleKeyUp = React.useCallback(function (event) {
        onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(event);
        if (isDisabled || event.defaultPrevented || event.metaKey)
            return;
        var shouldClickOnSpace = clickOnSpace && event.key === " ";
        if (!isButton && shouldClickOnSpace) {
            event.preventDefault();
            setIsActive(false);
            var self_2 = event.currentTarget;
            self_2.click();
        }
    }, [clickOnSpace, isButton, isDisabled, onKeyUp]);
    var handleMouseDown = React.useCallback(function (event) {
        if (isDisabled) {
            event.stopPropagation();
            event.preventDefault();
            return;
        }
        if (!isButton) {
            setIsActive(true);
        }
        onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
    }, [isDisabled, isButton, onMouseDown]);
    var handleMouseUp = React.useCallback(function (event) {
        if (!isButton) {
            setIsActive(false);
        }
        onMouseUp === null || onMouseUp === void 0 ? void 0 : onMouseUp(event);
    }, [onMouseUp, isButton]);
    var handleMouseOver = React.useCallback(function (event) {
        if (isDisabled) {
            event.preventDefault();
            return;
        }
        onMouseOver === null || onMouseOver === void 0 ? void 0 : onMouseOver(event);
    }, [isDisabled, onMouseOver]);
    var ref = mergeRefs(htmlRef, refCallback);
    if (isButton) {
        return __assign(__assign({}, htmlProps), { ref: ref, type: "button", "aria-disabled": trulyDisabled ? undefined : isDisabled, disabled: trulyDisabled, onClick: handleClick, onMouseDown: onMouseDown,
            onMouseUp: onMouseUp,
            onKeyUp: onKeyUp,
            onKeyDown: onKeyDown,
            onMouseOver: onMouseOver });
    }
    return __assign(__assign({}, htmlProps), { ref: ref, role: "button", "data-active": dataAttr(isActive), "aria-disabled": !!isDisabled, tabIndex: trulyDisabled ? undefined : tabIndex, onClick: handleClick, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onKeyUp: handleKeyUp, onKeyDown: handleKeyDown, onMouseOver: handleMouseOver });
}
//# sourceMappingURL=Clickable.js.map