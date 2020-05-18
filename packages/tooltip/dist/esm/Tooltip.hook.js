import { __assign } from "tslib";
import { useDisclosure, useEventListener, useId, useMergeRefs, } from "@chakra-ui/hooks";
import { usePopper } from "@chakra-ui/popper";
import { callAllHandlers, mergeRefs } from "@chakra-ui/utils";
import flushable from "flushable";
import { useRef, useCallback, useEffect } from "react";
var hideOperation;
var activeId = null;
function show(fn, delay) {
    // check if hide has not been executed
    var isHidePending = hideOperation === null || hideOperation === void 0 ? void 0 : hideOperation.pending();
    // immediately execute hide if it has not been executed
    if (isHidePending) {
        hideOperation.flush();
    }
    // setup the show operation using flushable
    var showOperation = flushable(function () { return fn(isHidePending); }, isHidePending ? 0 : delay);
    // return a function to cancel show() from executing
    // in the case of multiple tooltips
    return showOperation.cancel;
}
function hide(fn, delay) {
    // setup the hide operation using flushable
    hideOperation = flushable(function (flushed) { return fn(flushed); }, delay);
    // return a function to cancel hide() from executing
    return hideOperation.cancel;
}
export function useTooltip(props) {
    if (props === void 0) { props = {}; }
    var _a = props.showDelay, showDelay = _a === void 0 ? 200 : _a, _b = props.hideDelay, hideDelay = _b === void 0 ? 200 : _b, _c = props.hideOnClick, hideOnClick = _c === void 0 ? true : _c, onShow = props.onShow, onHide = props.onHide, hideOnMouseDown = props.hideOnMouseDown, placement = props.placement, id = props.id, isOpenProp = props.isOpen, defaultIsOpen = props.defaultIsOpen, _d = props.arrowSize, arrowSize = _d === void 0 ? 10 : _d;
    var _e = useDisclosure({
        isOpen: isOpenProp,
        defaultIsOpen: defaultIsOpen,
        onOpen: onShow,
        onClose: onHide,
    }), isOpen = _e.isOpen, open = _e.onOpen, close = _e.onClose;
    var popper = usePopper({
        forceUpdate: isOpen,
        placement: placement,
        arrowSize: arrowSize,
    });
    var tooltipId = useId(id, "tooltip");
    useEffect(function () {
        if (isOpen) {
            activeId = tooltipId;
        }
    }, [isOpen, tooltipId]);
    var ref = useRef(null);
    var triggerRef = useMergeRefs(ref, popper.reference.ref);
    var flushRef = useRef();
    useEffect(function () {
        return function () { var _a; return (_a = flushRef.current) === null || _a === void 0 ? void 0 : _a.call(flushRef); };
    }, []);
    var hideImmediately = useCallback(function () {
        var _a;
        (_a = flushRef.current) === null || _a === void 0 ? void 0 : _a.call(flushRef);
        close();
    }, [close]);
    var onClick = useCallback(function () {
        if (hideOnClick) {
            hideImmediately();
        }
    }, [hideOnClick, hideImmediately]);
    var onMouseDown = useCallback(function () {
        if (hideOnMouseDown) {
            hideImmediately();
        }
    }, [hideOnMouseDown, hideImmediately]);
    var showTooltip = useCallback(function () {
        var _a;
        (_a = flushRef.current) === null || _a === void 0 ? void 0 : _a.call(flushRef);
        if (tooltipId !== activeId) {
            hideImmediately();
        }
        activeId = tooltipId;
        if (!isOpen) {
            flushRef.current = show(function () {
                open();
            }, showDelay);
        }
    }, [isOpen, showDelay, open, tooltipId, hideImmediately]);
    var hideTooltip = useCallback(function () {
        var _a;
        (_a = flushRef.current) === null || _a === void 0 ? void 0 : _a.call(flushRef);
        activeId = null;
        if (isOpen) {
            flushRef.current = hide(function () {
                close();
            }, hideDelay);
        }
    }, [isOpen, hideDelay, close]);
    var onMouseOver = useCallback(function (event) {
        var isSelf = event.currentTarget === ref.current;
        if (isOpen && isSelf) {
            return;
        }
        showTooltip();
    }, [isOpen, showTooltip]);
    /**
     * Accessibility: Close the tooltip if user presses escape
     */
    var onKeyDown = useCallback(function (event) {
        if (isOpen && event.key === "Escape") {
            hideImmediately();
        }
    }, [isOpen, hideImmediately]);
    useEventListener("keydown", onKeyDown);
    return {
        isOpen: isOpen,
        show: open,
        hide: close,
        placement: popper.placement,
        getTriggerProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(props.ref, triggerRef), onMouseOut: callAllHandlers(props.onMouseOut, hideTooltip), onMouseOver: callAllHandlers(props.onMouseOver, onMouseOver), onClick: callAllHandlers(props.onClick, onClick), onMouseDown: callAllHandlers(props.onMouseDown, onMouseDown), onFocus: callAllHandlers(props.onFocus, showTooltip), onBlur: callAllHandlers(props.onBlur, hideTooltip), "aria-describedby": isOpen ? tooltipId : undefined }));
        },
        getTooltipProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { id: tooltipId, role: "tooltip", ref: mergeRefs(props.ref, popper.popper.ref), style: __assign(__assign({}, props.style), popper.popper.style) }));
        },
        getArrowProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(props.ref, popper.arrow.ref), style: __assign(__assign({}, props.style), popper.arrow.style) }));
        },
    };
}
//# sourceMappingURL=Tooltip.hook.js.map