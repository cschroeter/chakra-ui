"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.position = void 0;
var utils_1 = require("../utils");
var create_parser_1 = require("../create-parser");
var config = {
    position: true,
    pos: {
        property: "position",
    },
    zIndex: {
        property: "zIndex",
        scale: "zIndices",
    },
    inset: {
        properties: ["left", "top", "bottom", "right"],
        scale: "space",
        transform: utils_1.positiveOrNegative,
    },
    insetX: {
        properties: ["left", "right"],
        scale: "space",
        transform: utils_1.positiveOrNegative,
    },
    insetY: {
        properties: ["top", "bottom"],
        scale: "space",
        transform: utils_1.positiveOrNegative,
    },
    top: {
        property: "top",
        scale: "space",
        transform: utils_1.positiveOrNegative,
    },
    right: {
        property: "right",
        scale: "space",
        transform: utils_1.positiveOrNegative,
    },
    bottom: {
        property: "bottom",
        scale: "space",
        transform: utils_1.positiveOrNegative,
    },
    left: {
        property: "left",
        scale: "space",
        transform: utils_1.positiveOrNegative,
    },
};
exports.position = create_parser_1.createParser(config);
//# sourceMappingURL=position.js.map