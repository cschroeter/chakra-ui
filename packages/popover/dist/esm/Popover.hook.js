import { __assign } from "tslib";
import { useDisclosure, useIds, useBoolean } from "@chakra-ui/hooks";
import { usePopper } from "@chakra-ui/popper";
import * as React from "react";
import { useBlurOutside, useFocusOnHide, useFocusOnShow } from "./Popover.utils";
import { mergeRefs, callAllHandlers } from "@chakra-ui/utils";
export function usePopover(props) {
    if (props === void 0) { props = {}; }
    var _a = props.closeOnBlur, closeOnBlur = _a === void 0 ? true : _a, _b = props.closeOnEsc, closeOnEsc = _b === void 0 ? true : _b, initialFocusRef = props.initialFocusRef, placement = props.placement, gutter = props.gutter, id = props.id, arrowSize = props.arrowSize;
    var _c = useDisclosure(props), isOpen = _c.isOpen, onClose = _c.onClose, onToggle = _c.onToggle;
    var triggerRef = React.useRef(null);
    var popoverRef = React.useRef(null);
    var _d = useBoolean(), hasHeader = _d[0], setHasHeader = _d[1];
    var _e = useBoolean(), hasBody = _e[0], setHasBody = _e[1];
    var _f = useIds(id, "popover-trigger", "popover-content", "popover-header", "popover-body"), triggerId = _f[0], popoverId = _f[1], headerId = _f[2], bodyId = _f[3];
    var _g = usePopper({
        placement: placement,
        gutter: gutter,
        forceUpdate: isOpen,
        arrowSize: arrowSize,
    }), popper = _g.popper, reference = _g.reference, arrow = _g.arrow;
    useFocusOnHide(popoverRef, {
        autoFocus: true,
        visible: isOpen,
        focusRef: triggerRef,
    });
    useFocusOnShow(popoverRef, {
        autoFocus: true,
        visible: isOpen,
        focusRef: initialFocusRef,
    });
    var onBlur = useBlurOutside(triggerRef, popoverRef, {
        visible: Boolean(closeOnBlur && isOpen),
        action: onClose,
    });
    var onKeyDown = React.useCallback(function (event) {
        if (closeOnEsc && event.key === "Escape") {
            onClose();
        }
    }, [closeOnEsc, onClose]);
    return {
        isOpen: isOpen,
        onClose: onClose,
        headerId: headerId,
        hasHeader: hasHeader,
        setHasHeader: setHasHeader,
        bodyId: bodyId,
        hasBody: hasBody,
        setHasBody: setHasBody,
        getArrowProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(arrow.ref, props.ref), style: __assign(__assign({}, props.style), arrow.style) }));
        },
        getTriggerProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { id: triggerId, ref: mergeRefs(triggerRef, reference.ref, props.ref), "aria-haspopup": "dialog", "aria-expanded": isOpen, "aria-controls": popoverId, onClick: callAllHandlers(props.onClick, onToggle) }));
        },
        getPopoverProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { id: popoverId, tabIndex: -1, hidden: !isOpen, ref: mergeRefs(popoverRef, popper.ref, props.ref), style: __assign(__assign({}, props.style), popper.style), "aria-hidden": isOpen ? undefined : true, role: "dialog", onBlur: callAllHandlers(props.onBlur, onBlur), onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown), "aria-labelledby": hasHeader ? headerId : undefined, "aria-describedby": hasBody ? bodyId : undefined }));
        },
    };
}
//# sourceMappingURL=Popover.hook.js.map