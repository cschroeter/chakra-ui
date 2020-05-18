"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePopover = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var popper_1 = require("@chakra-ui/popper");
var React = tslib_1.__importStar(require("react"));
var Popover_utils_1 = require("./Popover.utils");
var utils_1 = require("@chakra-ui/utils");
function usePopover(props) {
    if (props === void 0) { props = {}; }
    var _a = props.closeOnBlur, closeOnBlur = _a === void 0 ? true : _a, _b = props.closeOnEsc, closeOnEsc = _b === void 0 ? true : _b, initialFocusRef = props.initialFocusRef, placement = props.placement, gutter = props.gutter, id = props.id, arrowSize = props.arrowSize;
    var _c = hooks_1.useDisclosure(props), isOpen = _c.isOpen, onClose = _c.onClose, onToggle = _c.onToggle;
    var triggerRef = React.useRef(null);
    var popoverRef = React.useRef(null);
    var _d = hooks_1.useBoolean(), hasHeader = _d[0], setHasHeader = _d[1];
    var _e = hooks_1.useBoolean(), hasBody = _e[0], setHasBody = _e[1];
    var _f = hooks_1.useIds(id, "popover-trigger", "popover-content", "popover-header", "popover-body"), triggerId = _f[0], popoverId = _f[1], headerId = _f[2], bodyId = _f[3];
    var _g = popper_1.usePopper({
        placement: placement,
        gutter: gutter,
        forceUpdate: isOpen,
        arrowSize: arrowSize,
    }), popper = _g.popper, reference = _g.reference, arrow = _g.arrow;
    Popover_utils_1.useFocusOnHide(popoverRef, {
        autoFocus: true,
        visible: isOpen,
        focusRef: triggerRef,
    });
    Popover_utils_1.useFocusOnShow(popoverRef, {
        autoFocus: true,
        visible: isOpen,
        focusRef: initialFocusRef,
    });
    var onBlur = Popover_utils_1.useBlurOutside(triggerRef, popoverRef, {
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
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(arrow.ref, props.ref), style: tslib_1.__assign(tslib_1.__assign({}, props.style), arrow.style) }));
        },
        getTriggerProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { id: triggerId, ref: utils_1.mergeRefs(triggerRef, reference.ref, props.ref), "aria-haspopup": "dialog", "aria-expanded": isOpen, "aria-controls": popoverId, onClick: utils_1.callAllHandlers(props.onClick, onToggle) }));
        },
        getPopoverProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { id: popoverId, tabIndex: -1, hidden: !isOpen, ref: utils_1.mergeRefs(popoverRef, popper.ref, props.ref), style: tslib_1.__assign(tslib_1.__assign({}, props.style), popper.style), "aria-hidden": isOpen ? undefined : true, role: "dialog", onBlur: utils_1.callAllHandlers(props.onBlur, onBlur), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown), "aria-labelledby": hasHeader ? headerId : undefined, "aria-describedby": hasBody ? bodyId : undefined }));
        },
    };
}
exports.usePopover = usePopover;
//# sourceMappingURL=Popover.hook.js.map