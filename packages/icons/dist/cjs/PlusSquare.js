"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlusSquareIcon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("@chakra-ui/icon");
function PlusSquareIcon(props) {
    return (React.createElement(icon_1.Icon, tslib_1.__assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" },
            React.createElement("rect", { height: "18", width: "18", rx: "2", ry: "2", x: "3", y: "3" }),
            React.createElement("path", { d: "M12 8v8" }),
            React.createElement("path", { d: "M8 12h8" }))));
}
exports.PlusSquareIcon = PlusSquareIcon;
//# sourceMappingURL=PlusSquare.js.map