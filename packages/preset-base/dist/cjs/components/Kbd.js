"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Kbd = {
    baseStyle: function (props) { return ({
        bg: utils_1.mode("gray.100", "whiteAlpha")(props),
        borderRadius: "md",
        borderWidth: "1px",
        borderBottomWidth: "3px",
        fontSize: "0.8em",
        fontWeight: "bold",
        lineHeight: "normal",
        px: "0.4em",
        whiteSpace: "nowrap",
    }); },
};
exports.default = Kbd;
//# sourceMappingURL=Kbd.js.map