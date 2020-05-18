"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusOnShow = exports.useFocusOnHide = exports.useBlurOutside = exports.hasFocusWithin = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
/**
 * Check if the event target is within the popover ref.
 *
 * @param ref the popover ref
 * @param event the blur event
 */
function hasFocusWithin(popoverRef, event) {
    if (!document.activeElement || !popoverRef.current) {
        return false;
    }
    var target = (event.relatedTarget || document.activeElement);
    return popoverRef.current.contains(target);
}
exports.hasFocusWithin = hasFocusWithin;
/**
 * Popover hook to manage outside click or blur detection.
 * It listens for outside click and notifies us so we can
 * close the popover
 *
 * @param triggerRef - popover trigger ref
 * @param popoverRef - popover content ref
 * @param options popover options (visible and action)
 */
function useBlurOutside(triggerRef, popoverRef, options) {
    var onMouseDown = function (event) {
        if (options.visible && event.target === triggerRef.current) {
            event.preventDefault();
        }
    };
    /**
     * @todo consider using pointer events instead
     */
    hooks_1.useEventListener("mousedown", onMouseDown);
    hooks_1.useEventListener("touchstart", onMouseDown);
    return function (event) {
        var shouldClose = options.visible && !hasFocusWithin(popoverRef, event);
        if (shouldClose) {
            options.action();
        }
    };
}
exports.useBlurOutside = useBlurOutside;
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */
function useFocusOnHide(popoverRef, options) {
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
            setIsTabbableTarget(utils_1.isTabbable(target));
        }
    };
    /**
     * Setup mousedown and touchstart listeners
     * @todo maybe just use pointerdown with pep.js polyfill?
     */
    hooks_1.useEventListener("mousedown", onMouseDown);
    hooks_1.useEventListener("touchstart", onMouseDown);
    /**
     * Using updateEffect here to allow effect to run only when
     * `options.visible` changes, not on mount
     */
    hooks_1.useUpdateEffect(function () {
        if (!shouldFocus || !popoverRef.current)
            return;
        if (isTabbableTarget)
            return;
        if (focusRef.current) {
            utils_1.ensureFocus(focusRef.current);
        }
    }, [autoFocus, focusRef, visible, popoverRef]);
}
exports.useFocusOnHide = useFocusOnHide;
/**
 * Popover hook to manage the focus when the popover opens.
 *
 * We either want to focus the popover content itself since it
 * has `tabIndex = -1`, or focus the first interactive element
 * within the popover content.
 */
function useFocusOnShow(popoverRef, options) {
    var visible = options.visible, autoFocus = options.autoFocus, focusRef = options.focusRef;
    /**
     * Using updateEffect here to allow effect to run only when
     * `options.visible` changes, not on mount
     */
    hooks_1.useUpdateEffect(function () {
        var shouldFocus = visible && autoFocus;
        if (!shouldFocus)
            return;
        if (focusRef === null || focusRef === void 0 ? void 0 : focusRef.current) {
            utils_1.ensureFocus(focusRef.current);
            return;
        }
        if (popoverRef.current) {
            var firstTabbable = utils_1.getFirstTabbableIn(popoverRef.current, true);
            utils_1.ensureFocus(firstTabbable !== null && firstTabbable !== void 0 ? firstTabbable : popoverRef.current);
        }
    }, [visible, autoFocus, popoverRef, focusRef]);
}
exports.useFocusOnShow = useFocusOnShow;
//# sourceMappingURL=Popover.utils.js.map