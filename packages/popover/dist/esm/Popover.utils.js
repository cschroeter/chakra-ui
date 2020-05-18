import { useUpdateEffect, useEventListener } from "@chakra-ui/hooks";
import { ensureFocus, getFirstTabbableIn, isTabbable } from "@chakra-ui/utils";
import * as React from "react";
/**
 * Check if the event target is within the popover ref.
 *
 * @param ref the popover ref
 * @param event the blur event
 */
export function hasFocusWithin(popoverRef, event) {
    if (!document.activeElement || !popoverRef.current) {
        return false;
    }
    var target = (event.relatedTarget || document.activeElement);
    return popoverRef.current.contains(target);
}
/**
 * Popover hook to manage outside click or blur detection.
 * It listens for outside click and notifies us so we can
 * close the popover
 *
 * @param triggerRef - popover trigger ref
 * @param popoverRef - popover content ref
 * @param options popover options (visible and action)
 */
export function useBlurOutside(triggerRef, popoverRef, options) {
    var onMouseDown = function (event) {
        if (options.visible && event.target === triggerRef.current) {
            event.preventDefault();
        }
    };
    /**
     * @todo consider using pointer events instead
     */
    useEventListener("mousedown", onMouseDown);
    useEventListener("touchstart", onMouseDown);
    return function (event) {
        var shouldClose = options.visible && !hasFocusWithin(popoverRef, event);
        if (shouldClose) {
            options.action();
        }
    };
}
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */
export function useFocusOnHide(popoverRef, options) {
    var focusRef = options.focusRef, autoFocus = options.autoFocus, visible = options.visible;
    var shouldFocus = autoFocus && !visible;
    /**
     * If the popover was closed by clicking on another
     * element that's tabbable (like, another button),
     * we want focus to proceed normally, not return
     * focus to the trigger.
     */
    var _a = React.useState(false), isTabbableTarget = _a[0], setIsTabbableTarget = _a[1];
    var onMouseDown = function (event) {
        var _a;
        if (!options.visible)
            return;
        var target = event.target;
        if (target !== focusRef.current && !((_a = popoverRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))) {
            setIsTabbableTarget(isTabbable(target));
        }
    };
    /**
     * Setup mousedown and touchstart listeners
     * @todo maybe just use pointerdown with pep.js polyfill?
     */
    useEventListener("mousedown", onMouseDown);
    useEventListener("touchstart", onMouseDown);
    /**
     * Using updateEffect here to allow effect to run only when
     * `options.visible` changes, not on mount
     */
    useUpdateEffect(function () {
        if (!shouldFocus || !popoverRef.current)
            return;
        if (isTabbableTarget)
            return;
        if (focusRef.current) {
            ensureFocus(focusRef.current);
        }
    }, [autoFocus, focusRef, visible, popoverRef]);
}
/**
 * Popover hook to manage the focus when the popover opens.
 *
 * We either want to focus the popover content itself since it
 * has `tabIndex = -1`, or focus the first interactive element
 * within the popover content.
 */
export function useFocusOnShow(popoverRef, options) {
    var visible = options.visible, autoFocus = options.autoFocus, focusRef = options.focusRef;
    /**
     * Using updateEffect here to allow effect to run only when
     * `options.visible` changes, not on mount
     */
    useUpdateEffect(function () {
        var shouldFocus = visible && autoFocus;
        if (!shouldFocus)
            return;
        if (focusRef === null || focusRef === void 0 ? void 0 : focusRef.current) {
            ensureFocus(focusRef.current);
            return;
        }
        if (popoverRef.current) {
            var firstTabbable = getFirstTabbableIn(popoverRef.current, true);
            ensureFocus(firstTabbable !== null && firstTabbable !== void 0 ? firstTabbable : popoverRef.current);
        }
    }, [visible, autoFocus, popoverRef, focusRef]);
}
//# sourceMappingURL=Popover.utils.js.map