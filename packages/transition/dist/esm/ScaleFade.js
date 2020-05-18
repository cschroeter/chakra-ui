import { __assign, __rest } from "tslib";
import * as React from "react";
import { Transition } from "./Transition";
function getTransitionStyles(initialScale) {
    return {
        init: {
            opacity: 0,
            transform: "scale(" + initialScale + ")",
        },
        entered: {
            opacity: 1,
            transform: "scale(1)",
        },
        exiting: {
            opacity: 0,
            transform: "scale(" + initialScale + ")",
        },
    };
}
export var ScaleFade = function (props) {
    var _a = props.initialScale, initialScale = _a === void 0 ? 0.9 : _a, _b = props.timeout, timeout = _b === void 0 ? 150 : _b, rest = __rest(props, ["initialScale", "timeout"]);
    var styles = getTransitionStyles(initialScale);
    return (React.createElement(Transition, __assign({ styles: styles, transition: "all " + timeout + "ms cubic-bezier(0.45, 0, 0.40, 1)", timeout: { enter: 0, exit: timeout }, unmountOnExit: true }, rest)));
};
//# sourceMappingURL=ScaleFade.js.map