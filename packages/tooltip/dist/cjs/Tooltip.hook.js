"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTooltip = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var popper_1 = require("@chakra-ui/popper");
var utils_1 = require("@chakra-ui/utils");
var flushable_1 = tslib_1.__importDefault(require("flushable"));
var react_1 = require("react");
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
    var showOperation = flushable_1.default(function () { return fn(isHidePending); }, isHidePending ? 0 : delay);
    // return a function to cancel show() from executing
    // in the case of multiple tooltips
    return showOperation.cancel;
}
function hide(fn, delay) {
    // setup the hide operation using flushable
    hideOperation = flushable_1.default(function (flushed) { return fn(flushed); }, delay);
    // return a function to cancel hide() from executing
    return hideOperation.cancel;
}
function useTooltip(props) {
    if (props === void 0) { props = {}; }
    var _a = props.showDelay, showDelay = _a === void 0 ? 200 : _a, _b = props.hideDelay, hideDelay = _b === void 0 ? 200 : _b, _c = props.hideOnClick, hideOnClick = _c === void 0 ? true : _c, onShow = props.onShow, onHide = props.onHide, hideOnMouseDown = props.hideOnMouseDown, placement = props.placement, id = props.id, isOpenProp = props.isOpen, defaultIsOpen = props.defaultIsOpen, _d = props.arrowSize, arrowSize = _d === void 0 ? 10 : _d;
    var _e = hooks_1.useDisclosure({
        isOpen: isOpenProp,
        defaultIsOpen: defaultIsOpen,
        onOpen: onShow,
        onClose: onHide,
    }), isOpen = _e.isOpen, open = _e.onOpen, close = _e.onClose;
    var popper = popper_1.usePopper({
        forceUpdate: isOpen,
        placement: placement,
        arrowSize: arrowSize,
    });
    var tooltipId = hooks_1.useId(id, "tooltip");
    react_1.useEffect(function () {
        if (isOpen) {
            activeId = tooltipId;
        }
    }, [isOpen, tooltipId]);
    var ref = react_1.useRef(null);
    var triggerRef = hooks_1.useMergeRefs(ref, popper.reference.ref);
    var flushRef = react_1.useRef();
    react_1.useEffect(function () {
        return function () { var _a; return (_a = flushRef.current) === null || _a === void 0 ? void 0 : _a.call(flushRef); };
    }, []);
    var hideImmediately = react_1.useCallback(function () {
        var _a;
        (_a = flushRef.current) === null || _a === void 0 ? void 0 : _a.call(flushRef);
        close();
    }, [close]);
    var onClick = react_1.useCallback(function () {
        if (hideOnClick) {
            hideImmediately();
        }
    }, [hideOnClick, hideImmediately]);
    var onMouseDown = react_1.useCallback(function () {
        if (hideOnMouseDown) {
            hideImmediately();
        }
    }, [hideOnMouseDown, hideImmediately]);
    var showTooltip = react_1.useCallback(function () {
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
    var hideTooltip = react_1.useCallback(function () {
        var _a;
        (_a = flushRef.current) === null || _a === void 0 ? void 0 : _a.call(flushRef);
        activeId = null;
        if (isOpen) {
            flushRef.current = hide(function () {
                close();
            }, hideDelay);
        }
    }, [isOpen, hideDelay, close]);
    var onMouseOver = react_1.useCallback(function (event) {
        var isSelf = event.currentTarget === ref.current;
        if (isOpen && isSelf) {
            return;
        }
        showTooltip();
    }, [isOpen, showTooltip]);
    /**
     * Accessibility: Close the tooltip if user presses escape
     */
    var onKeyDown = react_1.useCallback(function (event) {
        if (isOpen && event.key === "Escape") {
            hideImmediately();
        }
    }, [isOpen, hideImmediately]);
    hooks_1.useEventListener("keydown", onKeyDown);
    return {
        isOpen: isOpen,
        show: open,
        hide: close,
        placement: popper.placement,
        getTriggerProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(props.ref, triggerRef), onMouseOut: utils_1.callAllHandlers(props.onMouseOut, hideTooltip), onMouseOver: utils_1.callAllHandlers(props.onMouseOver, onMouseOver), onClick: utils_1.callAllHandlers(props.onClick, onClick), onMouseDown: utils_1.callAllHandlers(props.onMouseDown, onMouseDown), onFocus: utils_1.callAllHandlers(props.onFocus, showTooltip), onBlur: utils_1.callAllHandlers(props.onBlur, hideTooltip), "aria-describedby": isOpen ? tooltipId : undefined }));
        },
        getTooltipProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { id: tooltipId, role: "tooltip", ref: utils_1.mergeRefs(props.ref, popper.popper.ref), style: tslib_1.__assign(tslib_1.__assign({}, props.style), popper.popper.style) }));
        },
        getArrowProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(props.ref, popper.arrow.ref), style: tslib_1.__assign(tslib_1.__assign({}, props.style), popper.arrow.style) }));
        },
    };
}
exports.useTooltip = useTooltip;
//# sourceMappingURL=Tooltip.hook.js.map