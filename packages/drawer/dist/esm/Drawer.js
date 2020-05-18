import { __assign, __rest } from "tslib";
import * as React from "react";
import { Slide, Fade } from "@chakra-ui/transition";
import { Modal, ModalContent, ModalOverlay, } from "@chakra-ui/modal";
var TransitionContext = React.createContext({
    content: {},
    overlay: {},
});
TransitionContext.displayName = "TransitionContext";
var useTransitionContext = function () { return React.useContext(TransitionContext); };
export function DrawerTransition(props) {
    var inProp = props.in, children = props.children, placement = props.placement;
    return (React.createElement(Slide, { in: inProp, placement: placement }, function (contentStyle) { return (React.createElement(Fade, { in: inProp }, function (overlayStyle) {
        return children({ content: contentStyle, overlay: overlayStyle });
    })); }));
}
export function Drawer(props) {
    var isOpen = props.isOpen, onClose = props.onClose, _a = props.placement, placement = _a === void 0 ? "right" : _a, children = props.children, rest = __rest(props, ["isOpen", "onClose", "placement", "children"]);
    return (React.createElement(DrawerTransition, { in: isOpen, placement: placement }, function (styles) { return (React.createElement(TransitionContext.Provider, { value: styles },
        React.createElement(Modal, __assign({ isOpen: true, onClose: onClose }, rest), children))); }));
}
export var DrawerContent = React.forwardRef(function (props, ref) {
    var styles = useTransitionContext().content;
    return (React.createElement(ModalContent, __assign({ ref: ref, position: "fixed", style: styles, marginTop: "0", marginBottom: "0", borderRadius: "0" }, props)));
});
export var DrawerOverlay = React.forwardRef(function (props, ref) {
    var styles = useTransitionContext().overlay;
    return (React.createElement(ModalOverlay, __assign({ style: styles, transition: "all 0.2s", ref: ref }, props)));
});
export { ModalBody as DrawerBody, ModalHeader as DrawerHeader, ModalFooter as DrawerFooter, ModalCloseButton as DrawerCloseButton, } from "@chakra-ui/modal";
//# sourceMappingURL=Drawer.js.map