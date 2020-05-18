"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = void 0;
var create_parser_1 = require("../create-parser");
var config = {
    fontFamily: {
        property: "fontFamily",
        scale: "fonts",
    },
    fontSize: {
        property: "fontSize",
        scale: "fontSizes",
    },
    fontWeight: {
        property: "fontWeight",
        scale: "fontWeights",
    },
    lineHeight: {
        property: "lineHeight",
        scale: "lineHeights",
    },
    letterSpacing: {
        property: "letterSpacing",
        scale: "letterSpacings",
    },
    textAlign: true,
    fontStyle: true,
    wordBreak: true,
    overflowWrap: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
    textDecoration: { property: "textDecoration" },
    textDecor: { property: "textDecoration" },
};
exports.typography = create_parser_1.createParser(config);
//# sourceMappingURL=typography.js.map