"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionOutlineIcon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("@chakra-ui/icon");
function QuestionOutlineIcon(props) {
    return (React.createElement(icon_1.Icon, tslib_1.__assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { stroke: "currentColor", strokeWidth: "1.5" },
            React.createElement("path", { strokeLinecap: "round", fill: "none", d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25" }),
            React.createElement("path", { fill: "none", strokeLinecap: "round", d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0" }),
            React.createElement("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" }))));
}
exports.QuestionOutlineIcon = QuestionOutlineIcon;
//# sourceMappingURL=QuestionOutline.js.map