import { createParser } from "../create-parser";
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
export var outline = createParser(config);
//# sourceMappingURL=outline.js.map