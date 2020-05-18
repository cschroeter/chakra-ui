"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleFade = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Transition_1 = require("./Transition");
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
exports.ScaleFade = function (props) {
    var _a = props.initialScale, initialScale = _a === void 0 ? 0.9 : _a, _b = props.timeout, timeout = _b === void 0 ? 150 : _b, rest = tslib_1.__rest(props, ["initialScale", "timeout"]);
    var styles = getTransitionStyles(initialScale);
    return (React.createElement(Transition_1.Transition, tslib_1.__assign({ styles: styles, transition: "all " + timeout + "ms cubic-bezier(0.45, 0, 0.40, 1)", timeout: { enter: 0, exit: timeout }, unmountOnExit: true }, rest)));
};
//# sourceMappingURL=ScaleFade.js.map