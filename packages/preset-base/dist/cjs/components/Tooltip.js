"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Tooltip = {
    baseStyle: function (props) { return ({
        paddingX: "8px",
        paddingY: "2px",
        bg: utils_1.mode("gray.700", "gray.300")(props),
        color: utils_1.mode("whiteAlpha.900", "gray.900")(props),
        borderRadius: "sm",
        fontWeight: "medium",
        pointerEvents: "none",
        fontSize: "sm",
        boxShadow: "md",
        maxWidth: "320px",
    }); },
};
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map