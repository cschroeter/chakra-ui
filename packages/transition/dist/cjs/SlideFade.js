"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideFade = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Transition_1 = require("./Transition");
function getTransitionStyles(initialOffset) {
    return {
        init: {
            opacity: 0,
            transform: "translateY(" + initialOffset + ")",
        },
        entered: {
            opacity: 1,
            transform: "translateY(0px)",
        },
        exiting: {
            opacity: 0,
            transform: "translateY(" + initialOffset + ")",
        },
    };
}
exports.SlideFade = function (props) {
    var _a = props.initialOffset, initialOffset = _a === void 0 ? "20px" : _a, _b = props.timeout, timeout = _b === void 0 ? 150 : _b, rest = tslib_1.__rest(props, ["initialOffset", "timeout"]);
    var styles = getTransitionStyles(initialOffset);
    return (React.createElement(Transition_1.Transition, tslib_1.__assign({ styles: styles, transition: "all " + timeout + "ms cubic-bezier(0.4, 0.14, 0.3, 1)", timeout: { enter: 0, exit: timeout } }, rest)));
};
//# sourceMappingURL=SlideFade.js.map