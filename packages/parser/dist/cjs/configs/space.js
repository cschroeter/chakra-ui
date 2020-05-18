"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.space = void 0;
var create_parser_1 = require("../create-parser");
var utils_1 = require("../utils");
var configs = {
    margin: {
        property: "margin",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    m: {
        property: "margin",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    marginTop: {
        property: "marginTop",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    mt: {
        property: "marginTop",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    marginRight: {
        property: "marginRight",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    mr: {
        property: "marginRight",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    marginBottom: {
        property: "marginBottom",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    mb: {
        property: "marginBottom",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    marginLeft: {
        property: "marginLeft",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    ml: {
        property: "marginLeft",
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    marginX: {
        properties: ["marginLeft", "marginRight"],
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    mx: {
        properties: ["marginLeft", "marginRight"],
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    marginY: {
        properties: ["marginTop", "marginBottom"],
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    my: {
        properties: ["marginTop", "marginBottom"],
        transform: utils_1.positiveOrNegative,
        scale: "space",
    },
    padding: {
        property: "padding",
        scale: "space",
    },
    p: {
        property: "padding",
        scale: "space",
    },
    paddingTop: {
        property: "paddingTop",
        scale: "space",
    },
    pt: {
        property: "paddingTop",
        scale: "space",
    },
    paddingRight: {
        property: "paddingRight",
        scale: "space",
    },
    pr: {
        property: "paddingRight",
        scale: "space",
    },
    paddingBottom: {
        property: "paddingBottom",
        scale: "space",
    },
    pb: {
        property: "paddingBottom",
        scale: "space",
    },
    paddingLeft: {
        property: "paddingLeft",
        scale: "space",
    },
    pl: {
        property: "paddingLeft",
        scale: "space",
    },
    paddingX: {
        properties: ["paddingLeft", "paddingRight"],
        scale: "space",
    },
    px: {
        properties: ["paddingLeft", "paddingRight"],
        scale: "space",
    },
    paddingY: {
        properties: ["paddingTop", "paddingBottom"],
        scale: "space",
    },
    py: {
        properties: ["paddingTop", "paddingBottom"],
        scale: "space",
    },
};
/**
 * Converts shorthand or longhand margin and padding props to margin and padding CSS declarations
 *
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
exports.space = create_parser_1.createParser(configs);
//# sourceMappingURL=space.js.map