"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../components/utils");
var styles = {
    global: function (props) { return ({
        fontFamily: "body",
        color: utils_1.mode("gray.800", "whiteAlpha.900")(props),
        bg: utils_1.mode("white", "gray.800")(props),
        lineHeight: "base",
        "*::placeholder": {
            color: utils_1.mode("gray.400", "whiteAlpha.400")(props),
        },
        "*, *::before, &::after": {
            borderColor: utils_1.mode("gray.200", "whiteAlpha.300")(props),
        },
        fontFeatureSettings: "\"pnum\"",
        fontVariantNumeric: "proportional-nums",
    }); },
    h1: {
        fontSize: 40,
        margin: 30,
        color: "green.200",
    },
    h2: {
        fontSize: "2xl",
        margin: 10,
        color: "red.500",
    },
};
exports.default = styles;
//# sourceMappingURL=index.js.map