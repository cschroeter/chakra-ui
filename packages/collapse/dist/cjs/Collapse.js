"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var transition_1 = require("@chakra-ui/transition");
var utils_1 = require("@chakra-ui/utils");
var rect_1 = require("@reach/rect");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
exports.Collapse = react_1.forwardRef(function (props, forwardedRef) {
    var _a;
    var isOpen = props.isOpen, children = props.children, config = props.config, _b = props.startingHeight, startingHeight = _b === void 0 ? 0 : _b, _c = props.animateOpacity, animateOpacity = _c === void 0 ? true : _c, className = props.className, htmlStyle = props.style, _d = props.timeout, timeout = _d === void 0 ? 150 : _d, _e = props.easing, easing = _e === void 0 ? "ease" : _e, rest = tslib_1.__rest(props, ["isOpen", "children", "config", "startingHeight", "animateOpacity", "className", "style", "timeout", "easing"]);
    var getStr = function (property) { return property + " " + timeout + "ms " + easing; };
    var transition = getStr("height") + ", " + getStr("opacity") + ", " + getStr("transform");
    var _f = react_1.useState(true), hidden = _f[0], setHidden = _f[1];
    var child = children;
    if (typeof children === "string") {
        child = React.createElement("div", null, children);
    }
    var _child = react_1.Children.only(child);
    var ref = react_1.useRef(null);
    var rect = rect_1.useRect(ref, true);
    var height = (_a = rect === null || rect === void 0 ? void 0 : rect.height) !== null && _a !== void 0 ? _a : 0;
    var styles = {
        init: {
            height: startingHeight,
            opacity: startingHeight ? 1 : 0,
        },
        entered: {
            height: height,
            opacity: 1,
            transform: "translateY(0)",
        },
        exiting: {
            height: startingHeight,
            opacity: startingHeight ? 1 : 0,
            transform: startingHeight > 0 ? "translateY(0)" : "translateY(-0.5rem)",
        },
    };
    return (React.createElement(transition_1.Transition, { in: isOpen, styles: config || styles, onEntered: function () { return setHidden(false); }, onExited: function () { return setHidden(true); }, timeout: { enter: 0, exit: timeout }, transition: transition, unmountOnExit: false }, function (styles) { return (React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: forwardedRef, className: utils_1.cx("chakra-collapse", className), "aria-hidden": utils_1.ariaAttr(hidden) }, rest, { style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, styles), { overflow: "hidden", opacity: animateOpacity ? styles.opacity : 1, willChange: "height, opacity, transform" }), htmlStyle) }), react_1.cloneElement(_child, {
        ref: utils_1.mergeRefs(ref, _child.props.ref),
    }))); }));
});
if (utils_1.__DEV__) {
    exports.Collapse.displayName = "Collapse";
}
//# sourceMappingURL=Collapse.js.map