"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outline = void 0;
var create_parser_1 = require("../create-parser");
/**
 * The parser configuration for common outline properties
 */
var config = {
    outline: true,
    outlineOffset: true,
    outlineColor: {
        property: "outlineColor",
        scale: "colors",
    },
};
exports.outline = create_parser_1.createParser(config);
//# sourceMappingURL=outline.js.map