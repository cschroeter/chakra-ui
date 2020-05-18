"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuTransition = void 0;
var tslib_1 = require("tslib");
var transition_1 = require("@chakra-ui/transition");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Menu_1 = require("./Menu");
exports.MenuTransition = function (props) {
    var _a = props.transformOrigin, transformOrigin = _a === void 0 ? "top left" : _a, children = props.children, styles = props.styles;
    var menu = Menu_1.useMenuContext();
    var defaultStyles = {
        init: {
            opacity: 0,
            transformOrigin: transformOrigin,
            transform: "scale(0.8)",
            transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.320, 1.175)",
            transitionProperty: "opacity, transform",
            transitionDuration: "200ms",
            willChange: "opacity, transform",
        },
        entered: {
            opacity: 1,
            transform: "scale(1)",
        },
        exiting: {
            opacity: 0,
            transform: "scale(0.8)",
        },
    };
    return (React.createElement(transition_1.Transition, { onEnter: function (node) {
            node.hidden = false;
        }, onExited: function (node) {
            node.hidden = true;
            node.style.pointerEvents = "auto";
            if (menu.buttonRef.current) {
                utils_1.ensureFocus(menu.buttonRef.current);
            }
        }, onExit: function (node) {
            node.hidden = false;
        }, onExiting: function (node) {
            node.style.pointerEvents = "none";
        }, timeout: { enter: 0, exit: 200 }, in: menu.isOpen, styles: styles || defaultStyles, unmountOnExit: false, children: children }));
};
//# sourceMappingURL=Menu.transition.js.map