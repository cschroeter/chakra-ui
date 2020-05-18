"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLinkIcon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("@chakra-ui/icon");
function ExternalLinkIcon(props) {
    return (React.createElement(icon_1.Icon, tslib_1.__assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" },
            React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
            React.createElement("path", { d: "M15 3h6v6" }),
            React.createElement("path", { d: "M10 14L21 3" }))));
}
exports.ExternalLinkIcon = ExternalLinkIcon;
//# sourceMappingURL=ExternalLink.js.map