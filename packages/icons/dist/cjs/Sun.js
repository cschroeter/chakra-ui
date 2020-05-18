"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunIcon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("@chakra-ui/icon");
function SunIcon(props) {
    return (React.createElement(icon_1.Icon, tslib_1.__assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: "2", fill: "none", stroke: "currentColor" },
            React.createElement("circle", { cx: "12", cy: "12", r: "5" }),
            React.createElement("path", { d: "M12 1v2" }),
            React.createElement("path", { d: "M12 21v2" }),
            React.createElement("path", { d: "M4.22 4.22l1.42 1.42" }),
            React.createElement("path", { d: "M18.36 18.36l1.42 1.42" }),
            React.createElement("path", { d: "M1 12h2" }),
            React.createElement("path", { d: "M21 12h2" }),
            React.createElement("path", { d: "M4.22 19.78l1.42-1.42" }),
            React.createElement("path", { d: "M18.36 5.64l1.42-1.42" }))));
}
exports.SunIcon = SunIcon;
//# sourceMappingURL=Sun.js.map