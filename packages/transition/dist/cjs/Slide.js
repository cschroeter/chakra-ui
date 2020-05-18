"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slide = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Transition_1 = require("./Transition");
function createBaseStyle(placement) {
    switch (placement) {
        case "bottom": {
            return {
                maxWidth: "100vw",
                bottom: 0,
                left: 0,
                right: 0,
            };
        }
        case "top": {
            return {
                maxWidth: "100vw",
                top: 0,
                left: 0,
                right: 0,
            };
        }
        case "left": {
            return {
                width: "100%",
                height: "100vh",
                left: 0,
                top: 0,
            };
        }
        case "right": {
            return {
                width: "100%",
                right: 0,
                top: 0,
                height: "100vh",
            };
        }
        default:
            break;
    }
}
var getTransformStyle = function (placement, value) {
    var axis = "";
    if (placement === "left" || placement === "right")
        axis = "X";
    if (placement === "top" || placement === "bottom")
        axis = "Y";
    return "translate" + axis + "(" + value + ")";
};
function getTransitionStyles(placement) {
    var offset = {
        bottom: "100%",
        top: "-100%",
        left: "-100%",
        right: "100%",
    };
    return {
        init: {
            transform: getTransformStyle(placement, offset[placement]),
        },
        entered: { transform: getTransformStyle(placement, "0%") },
        exiting: {
            transform: getTransformStyle(placement, offset[placement]),
        },
    };
}
function Slide(props) {
    var _a = props.placement, placement = _a === void 0 ? "left" : _a, _b = props.timeout, timeout = _b === void 0 ? 150 : _b, children = props.children, rest = tslib_1.__rest(props, ["placement", "timeout", "children"]);
    var styles = getTransitionStyles(placement);
    var positionStyles = tslib_1.__assign({ position: "fixed", willChange: "transform" }, createBaseStyle(placement));
    return (React.createElement(Transition_1.Transition, tslib_1.__assign({ styles: styles, transition: "all " + timeout + "ms cubic-bezier(0, 0, 0.2, 1)", timeout: { enter: 0, exit: timeout } }, rest), function (styles) { return children(tslib_1.__assign(tslib_1.__assign({}, positionStyles), styles)); }));
}
exports.Slide = Slide;
exports.default = Slide;
//# sourceMappingURL=Slide.js.map