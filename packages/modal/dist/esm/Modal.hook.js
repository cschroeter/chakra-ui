import { __assign } from "tslib";
import { useIds, useLockBodyScroll } from "@chakra-ui/hooks";
import { callAllHandlers, mergeRefs } from "@chakra-ui/utils";
import { hideOthers } from "aria-hidden";
import * as React from "react";
import { manager, useModalManager } from "./Modal.manager";
/**
 * Modal hook that manages all the logic for the modal dialog widget
 * and returns prop getters, state and actions.
 *
 * @param props
 */
export function useModal(props) {
    var isOpen = props.isOpen, onClose = props.onClose, id = props.id, _a = props.shouldCloseOnOverlayClick, shouldCloseOnOverlayClick = _a === void 0 ? true : _a, _b = props.shouldCloseOnEsc, shouldCloseOnEsc = _b === void 0 ? true : _b, _c = props.shouldBlockScroll, shouldBlockScroll = _c === void 0 ? true : _c, _d = props.useInert, useInert = _d === void 0 ? true : _d, onOverlayClickProp = props.onOverlayClick, onEsc = props.onEsc;
    var dialogRef = React.useRef(null);
    var overlayRef = React.useRef(null);
    var _e = useIds(id, "chakra-modal", "chakra-modal--header", "chakra-modal--body"), contentId = _e[0], headerId = _e[1], bodyId = _e[2];
    /**
     * Hook used to block scrolling once the modal is open
     */
    useLockBodyScroll(dialogRef, isOpen && shouldBlockScroll);
    /**
     * Hook used to polyfill `aria-modal` for older browsers.
     * It uses `aria-hidden` to all other nodes.
     *
     * @see https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
     */
    useAriaHidden(dialogRef, isOpen && useInert);
    /**
     * Hook use to manage multiple or nested modals
     */
    useModalManager(dialogRef, isOpen);
    var mouseDownTarget = React.useRef(null);
    var onMouseDown = React.useCallback(function (event) {
        mouseDownTarget.current = event.target;
    }, []);
    var onKeyDown = React.useCallback(function (event) {
        if (event.key === "Escape") {
            event.stopPropagation();
            if (shouldCloseOnEsc) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
            onEsc === null || onEsc === void 0 ? void 0 : onEsc();
        }
    }, [shouldCloseOnEsc, onClose, onEsc]);
    var onOverlayClick = React.useCallback(function (event) {
        event.stopPropagation();
        /**
         * Make sure the event starts and ends on the same DOM element.
         *
         * This is used to prevent the modal from closing when you
         * start dragging from the content, and release drag outside the content.
         *
         * We prevent this because it's technically not a considered "click outside"
         */
        if (mouseDownTarget.current !== event.target)
            return;
        /**
         * When you click on the overlay, we want to remove only the topmost modal
         */
        if (manager.isTopModal(dialogRef)) {
            if (shouldCloseOnOverlayClick) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
            onOverlayClickProp === null || onOverlayClickProp === void 0 ? void 0 : onOverlayClickProp();
        }
    }, [onClose, shouldCloseOnOverlayClick, onOverlayClickProp]);
    var _f = React.useState(false), headerMounted = _f[0], setHeaderMounted = _f[1];
    var _g = React.useState(false), bodyMounted = _g[0], setBodyMounted = _g[1];
    return {
        isOpen: isOpen,
        onClose: onClose,
        headerId: headerId,
        bodyId: bodyId,
        setBodyMounted: setBodyMounted,
        setHeaderMounted: setHeaderMounted,
        getContentProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(props.ref, dialogRef), id: contentId, role: props.role || "dialog", tabIndex: -1, "aria-modal": true, "aria-labelledby": headerMounted ? headerId : undefined, "aria-describedby": bodyMounted ? bodyId : undefined, onClick: callAllHandlers(props.onClick, function (event) {
                    return event.stopPropagation();
                }) }));
        },
        getOverlayProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(props.ref, overlayRef), onClick: callAllHandlers(props.onClick, onOverlayClick), onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown), onMouseDown: callAllHandlers(props.onMouseDown, onMouseDown) }));
        },
    };
}
/**
 * Modal hook to polyfill `aria-modal`.
 *
 * It applies `aria-hidden` to elements behind the modal
 * to indicate that they're `inert`.
 *
 * @param ref React ref of the node
 * @param shouldHide whether `aria-hidden` should be applied
 */
export function useAriaHidden(ref, shouldHide) {
    React.useEffect(function () {
        if (!ref.current)
            return;
        var undo = null;
        if (shouldHide && ref.current) {
            undo = hideOthers(ref.current);
        }
        return function () {
            if (shouldHide) {
                undo === null || undo === void 0 ? void 0 : undo();
            }
        };
    }, [shouldHide, ref]);
}
//# sourceMappingURL=Modal.hook.js.map