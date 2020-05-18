"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Transition_1 = tslib_1.__importDefault(require("react-transition-group/Transition"));
function Transition(props) {
    var styles = props.styles, inProp = props.in, _a = props.timeout, timeout = _a === void 0 ? 150 : _a, _b = props.transition, transition = _b === void 0 ? "all " + timeout + "ms ease-in-out" : _b, children = props.children, rest = tslib_1.__rest(props, ["styles", "in", "timeout", "transition", "children"]);
    var getStyle = function (state) { return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, styles.init), { transition: transition }), styles[state])); };
    return (React.createElement(Transition_1.default, tslib_1.__assign({ appear: true, unmountOnExit: true, in: inProp, timeout: timeout }, rest), function (state) { return children(getStyle(state)); }));
}
exports.Transition = Transition;
//# sourceMappingURL=Transition.js.map