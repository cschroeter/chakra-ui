import { createParser } from "../create-parser";
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
export var color = createParser(config);
//# sourceMappingURL=color.js.map