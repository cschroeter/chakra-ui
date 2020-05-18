"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerIcon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("@chakra-ui/icon");
function SpinnerIcon(props) {
    return (React.createElement(icon_1.Icon, tslib_1.__assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { x1: "28.154%", y1: "63.74%", x2: "74.629%", y2: "17.783%", id: "a" },
                React.createElement("stop", { stopColor: "currentColor", offset: "0%" }),
                React.createElement("stop", { stopColor: "#fff", stopOpacity: "0", offset: "100%" }))),
        React.createElement("g", { transform: "translate(2)", fill: "none" },
            React.createElement("circle", { stroke: "url(#a)", strokeWidth: "4", cx: "10", cy: "12", r: "10" }),
            React.createElement("path", { d: "M10 2C4.477 2 0 6.477 0 12", stroke: "currentColor", strokeWidth: "4" }),
            React.createElement("rect", { fill: "currentColor", x: "8", width: "4", height: "4", rx: "8" }))));
}
exports.SpinnerIcon = SpinnerIcon;
//# sourceMappingURL=Spinner.js.map