"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = void 0;
var create_parser_1 = require("../create-parser");
/**
 * The parser configuration for common border properties
 */
var config = {
    color: {
        property: "color",
        scale: "colors",
    },
    textColor: {
        property: "color",
        scale: "colors",
    },
    opacity: true,
    fill: {
        property: "fill",
        scale: "colors",
    },
    stroke: {
        property: "stroke",
        scale: "colors",
    },
};
exports.color = create_parser_1.createParser(config);
//# sourceMappingURL=color.js.map