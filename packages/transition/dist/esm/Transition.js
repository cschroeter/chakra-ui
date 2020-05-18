import { __assign, __rest } from "tslib";
import * as React from "react";
import CSSTransition from "react-transition-group/Transition";
export function Transition(props) {
    var styles = props.styles, inProp = props.in, _a = props.timeout, timeout = _a === void 0 ? 150 : _a, _b = props.transition, transition = _b === void 0 ? "all " + timeout + "ms ease-in-out" : _b, children = props.children, rest = __rest(props, ["styles", "in", "timeout", "transition", "children"]);
    var getStyle = function (state) { return (__assign(__assign(__assign({}, styles.init), { transition: transition }), styles[state])); };
    return (React.createElement(CSSTransition, __assign({ appear: true, unmountOnExit: true, in: inProp, timeout: timeout }, rest), function (state) { return children(getStyle(state)); }));
}
//# sourceMappingURL=Transition.js.map