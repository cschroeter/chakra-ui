import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import { Transition, } from "@chakra-ui/transition";
import { ariaAttr, cx, mergeRefs, __DEV__ } from "@chakra-ui/utils";
import { useRect } from "@reach/rect";
import * as React from "react";
import { cloneElement, forwardRef, useState, Children, useRef, } from "react";
export var Collapse = forwardRef(function (props, forwardedRef) {
    var _a;
    var isOpen = props.isOpen, children = props.children, config = props.config, _b = props.startingHeight, startingHeight = _b === void 0 ? 0 : _b, _c = props.animateOpacity, animateOpacity = _c === void 0 ? true : _c, className = props.className, htmlStyle = props.style, _d = props.timeout, timeout = _d === void 0 ? 150 : _d, _e = props.easing, easing = _e === void 0 ? "ease" : _e, rest = __rest(props, ["isOpen", "children", "config", "startingHeight", "animateOpacity", "className", "style", "timeout", "easing"]);
    var getStr = function (property) { return property + " " + timeout + "ms " + easing; };
    var transition = getStr("height") + ", " + getStr("opacity") + ", " + getStr("transform");
    var _f = useState(true), hidden = _f[0], setHidden = _f[1];
    var child = children;
    if (typeof children === "string") {
        child = React.createElement("div", null, children);
    }
    var _child = Children.only(child);
    var ref = useRef(null);
    var rect = useRect(ref, true);
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
    return (React.createElement(Transition, { in: isOpen, styles: config || styles, onEntered: function () { return setHidden(false); }, onExited: function () { return setHidden(true); }, timeout: { enter: 0, exit: timeout }, transition: transition, unmountOnExit: false }, function (styles) { return (React.createElement(chakra.div, __assign({ ref: forwardedRef, className: cx("chakra-collapse", className), "aria-hidden": ariaAttr(hidden) }, rest, { style: __assign(__assign(__assign({}, styles), { overflow: "hidden", opacity: animateOpacity ? styles.opacity : 1, willChange: "height, opacity, transform" }), htmlStyle) }), cloneElement(_child, {
        ref: mergeRefs(ref, _child.props.ref),
    }))); }));
});
if (__DEV__) {
    Collapse.displayName = "Collapse";
}
//# sourceMappingURL=Collapse.js.map