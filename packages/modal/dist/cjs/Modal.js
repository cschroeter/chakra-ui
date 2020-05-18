"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalCloseButton = exports.ModalFooter = exports.ModalBody = exports.ModalHeader = exports.ModalOverlay = exports.ModalContent = exports.Modal = void 0;
var tslib_1 = require("tslib");
var close_button_1 = require("@chakra-ui/close-button");
var focus_lock_1 = require("@chakra-ui/focus-lock");
var hooks_1 = require("@chakra-ui/hooks");
var portal_1 = require("@chakra-ui/portal");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Modal_hook_1 = require("./Modal.hook");
var _a = utils_1.createContext({
    strict: true,
    name: "ModalContext",
}), ModalContextProvider = _a[0], useModalContext = _a[1];
/**
 * Modal
 *
 * React component that provides context, theming, and accessbility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 */
function Modal(props) {
    var defaults = system_1.useThemeDefaultProps("Modal");
    var children = props.children, initialFocusRef = props.initialFocusRef, finalFocusRef = props.finalFocusRef, _a = props.shouldReturnFocusOnClose, shouldReturnFocusOnClose = _a === void 0 ? true : _a, isOpen = props.isOpen, _b = props.scrollBehavior, scrollBehavior = _b === void 0 ? "outside" : _b, _c = props.size, size = _c === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _c, _d = props.variant, variant = _d === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _d, _e = props.shouldTrapFocus, shouldTrapFocus = _e === void 0 ? true : _e, _f = props.shouldAutoFocus, shouldAutoFocus = _f === void 0 ? true : _f, isCentered = props.isCentered, getContainer = props.getContainer;
    var context = tslib_1.__assign(tslib_1.__assign({}, Modal_hook_1.useModal(props)), { scrollBehavior: scrollBehavior,
        isCentered: isCentered,
        size: size,
        variant: variant });
    if (!isOpen)
        return null;
    return (React.createElement(ModalContextProvider, { value: context },
        React.createElement(portal_1.Portal, { getContainer: getContainer },
            React.createElement(focus_lock_1.FocusLock, { autoFocus: shouldAutoFocus, isDisabled: !shouldTrapFocus, initialFocusRef: initialFocusRef, finalFocusRef: finalFocusRef, restoreFocus: shouldReturnFocusOnClose }, children))));
}
exports.Modal = Modal;
if (utils_1.__DEV__) {
    Modal.displayName = "Modal";
}
/**
 * ModalContent - Theming
 *
 * To style the modal content globally, change the styles in
 * `theme.components.Modal` under the `Content` key
 */
var StyledContent = system_1.chakra("section", {
    themeKey: "Modal.Content",
    baseStyle: function (props) {
        return {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            marginY: "3.75rem",
            maxHeight: props.scrollBehavior === "inside" ? "calc(100vh - 7.5rem)" : undefined,
            _focus: {
                outline: 0,
            },
        };
    },
});
/**
 * ModalContent
 *
 * React component used to group modal's content. It has all the
 * necessary `aria-*` properties to indicate that it's a modal modal
 */
exports.ModalContent = React.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var _a = useModalContext(), getContentProps = _a.getContentProps, scrollBehavior = _a.scrollBehavior, variant = _a.variant, size = _a.size;
    var contentProps = getContentProps(rest);
    contentProps.ref = utils_1.mergeRefs(ref, contentProps.ref);
    var _className = utils_1.cx("chakra-modal__content", className);
    var theming = { variant: variant, size: size };
    return (React.createElement(StyledContent, tslib_1.__assign({ className: _className, scrollBehavior: scrollBehavior }, theming, contentProps)));
});
if (utils_1.__DEV__) {
    exports.ModalContent.displayName = "ModalContent";
}
/**
 * ModalOverlay - Theming
 *
 * To style the modal overlay globally, change the styles in
 * `theme.components.Modal` under the `Overlay` key
 */
var StyledOverlay = system_1.chakra("div", {
    themeKey: "Modal.Overlay",
    baseStyle: function (props) { return ({
        display: "flex",
        justifyContent: "center",
        alignItems: props.isCentered ? "center" : "flex-start",
        overflow: props.scrollBehavior === "inside" ? "hidden" : "auto",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
    }); },
    shouldForwardProp: function (prop) {
        return !["scrollBehavior", "isCentered"].includes(prop);
    },
});
/**
 * ModalOverlay
 *
 * React component that renders a backdrop behind the modal. It's
 * also used as a wrapper for the modal content for better positioning.
 *
 * @see Docs https://chakra-ui.com/modal
 */
exports.ModalOverlay = React.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var _a = useModalContext(), getOverlayProps = _a.getOverlayProps, scrollBehavior = _a.scrollBehavior, isCentered = _a.isCentered, variant = _a.variant, size = _a.size;
    var overlayProps = getOverlayProps(rest);
    overlayProps.ref = utils_1.mergeRefs(ref, overlayProps.ref);
    var theming = { variant: variant, size: size };
    var _className = utils_1.cx("chakra-modal__overlay", className);
    return (React.createElement(StyledOverlay, tslib_1.__assign({ className: _className, scrollBehavior: scrollBehavior, isCentered: isCentered }, theming, overlayProps)));
});
if (utils_1.__DEV__) {
    exports.ModalOverlay.displayName = "ModalOverlay";
}
/**
 * ModalHeader - Theming
 *
 * To style the modal header globally, change the styles in
 * `theme.components.Modal` under the `Header` key
 */
var StyledHeader = system_1.chakra("header", {
    themeKey: "Modal.Header",
    baseStyle: { flex: 0 },
});
/**
 * ModalHeader
 *
 * React component that houses the title of the modal.
 *
 * @see Docs https://chakra-ui.com/modal
 */
exports.ModalHeader = React.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var _a = useModalContext(), headerId = _a.headerId, setHeaderMounted = _a.setHeaderMounted;
    /**
     * Notify us if this component was rendered or used
     * so we can append `aria-labelledby` automatically
     */
    hooks_1.useSafeLayoutEffect(function () {
        setHeaderMounted(true);
        return function () { return setHeaderMounted(false); };
    }, []);
    var _className = utils_1.cx("chakra-modal__header", className);
    return (React.createElement(StyledHeader, tslib_1.__assign({ ref: ref, className: _className, id: headerId }, rest)));
});
if (utils_1.__DEV__) {
    exports.ModalHeader.displayName = "ModalHeader";
}
/**
 * ModalBody - Theming
 *
 * To style the modal body globally, change the styles in
 * `theme.components.Modal` under the `Body` key
 */
var StyledBody = system_1.chakra("div", {
    themeKey: "Modal.Body",
    baseStyle: function (props) { return ({
        flex: 1,
        overflow: props.scrollBehavior === "inside" ? "auto" : undefined,
    }); },
});
/**
 * ModalBody
 *
 * React component that houses the main content of the modal.
 *
 * @see Docs https://chakra-ui.com/modal
 */
exports.ModalBody = React.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var _a = useModalContext(), bodyId = _a.bodyId, setBodyMounted = _a.setBodyMounted, scrollBehavior = _a.scrollBehavior;
    /**
     * Notify us if this component was rendered or used
     * so we can append `aria-describedby` automatically
     */
    hooks_1.useSafeLayoutEffect(function () {
        setBodyMounted(true);
        return function () { return setBodyMounted(false); };
    }, []);
    var _className = utils_1.cx("chakra-modal__body", className);
    return (React.createElement(StyledBody, tslib_1.__assign({ ref: ref, scrollBehavior: scrollBehavior, className: _className, id: bodyId }, rest)));
});
if (utils_1.__DEV__) {
    exports.ModalBody.displayName = "ModalBody";
}
/**
 * ModalFooter
 *
 * React component that houses the action buttons of the modal.
 *
 * @see Docs https://chakra-ui.com/modal
 */
exports.ModalFooter = system_1.chakra("footer", {
    themeKey: "Modal.Footer",
    baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 0,
    },
    attrs: function (props) { return ({
        className: utils_1.cx("chakra-modal__footer", props.className),
    }); },
});
if (utils_1.__DEV__) {
    exports.ModalFooter.displayName = "ModalFooter";
}
/**
 * ModalCloseButton
 *
 * React component used closes the modal. You don't need
 * to pass the `onClick` to it, it's reads the `onClose` action from the
 * modal context.
 */
exports.ModalCloseButton = React.forwardRef(function (props, ref) {
    var onClick = props.onClick, className = props.className, rest = tslib_1.__rest(props, ["onClick", "className"]);
    var onClose = useModalContext().onClose;
    var _className = utils_1.cx("chakra-modal__close-btn", className);
    return (React.createElement(close_button_1.CloseButton, tslib_1.__assign({ ref: ref, position: "absolute", top: "8px", right: "12px", className: _className, onClick: utils_1.callAllHandlers(onClick, onClose) }, rest)));
});
if (utils_1.__DEV__) {
    exports.ModalCloseButton.displayName = "ModalCloseButton";
}
//# sourceMappingURL=Modal.js.map