"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerOverlay = exports.DrawerContent = exports.Drawer = exports.DrawerTransition = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var transition_1 = require("@chakra-ui/transition");
var modal_1 = require("@chakra-ui/modal");
var TransitionContext = React.createContext({
    content: {},
    overlay: {},
});
TransitionContext.displayName = "TransitionContext";
var useTransitionContext = function () { return React.useContext(TransitionContext); };
function DrawerTransition(props) {
    var inProp = props.in, children = props.children, placement = props.placement;
    return (React.createElement(transition_1.Slide, { in: inProp, placement: placement }, function (contentStyle) { return (React.createElement(transition_1.Fade, { in: inProp }, function (overlayStyle) {
        return children({ content: contentStyle, overlay: overlayStyle });
    })); }));
}
exports.DrawerTransition = DrawerTransition;
function Drawer(props) {
    var isOpen = props.isOpen, onClose = props.onClose, _a = props.placement, placement = _a === void 0 ? "right" : _a, children = props.children, rest = tslib_1.__rest(props, ["isOpen", "onClose", "placement", "children"]);
    return (React.createElement(DrawerTransition, { in: isOpen, placement: placement }, function (styles) { return (React.createElement(TransitionContext.Provider, { value: styles },
        React.createElement(modal_1.Modal, tslib_1.__assign({ isOpen: true, onClose: onClose }, rest), children))); }));
}
exports.Drawer = Drawer;
exports.DrawerContent = React.forwardRef(function (props, ref) {
    var styles = useTransitionContext().content;
    return (React.createElement(modal_1.ModalContent, tslib_1.__assign({ ref: ref, position: "fixed", style: styles, marginTop: "0", marginBottom: "0", borderRadius: "0" }, props)));
});
exports.DrawerOverlay = React.forwardRef(function (props, ref) {
    var styles = useTransitionContext().overlay;
    return (React.createElement(modal_1.ModalOverlay, tslib_1.__assign({ style: styles, transition: "all 0.2s", ref: ref }, props)));
});
var modal_2 = require("@chakra-ui/modal");
Object.defineProperty(exports, "DrawerBody", { enumerable: true, get: function () { return modal_2.ModalBody; } });
Object.defineProperty(exports, "DrawerHeader", { enumerable: true, get: function () { return modal_2.ModalHeader; } });
Object.defineProperty(exports, "DrawerFooter", { enumerable: true, get: function () { return modal_2.ModalFooter; } });
Object.defineProperty(exports, "DrawerCloseButton", { enumerable: true, get: function () { return modal_2.ModalCloseButton; } });
//# sourceMappingURL=Drawer.js.map