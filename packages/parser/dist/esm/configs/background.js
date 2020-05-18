import { createParser } from "../create-parser";
/**
 * The parser configuration for common background properties
 */
var config = {
    bg: {
        property: "background",
        scale: "colors",
    },
    bgColor: {
        property: "backgroundColor",
        scale: "colors",
    },
    background: {
        property: "background",
        scale: "colors",
    },
    backgroundColor: {
        property: "backgroundColor",
        scale: "colors",
    },
    backgroundImage: true,
    backgroundSize: true,
    backgroundPosition: true,
    backgroundRepeat: true,
    backgroundAttachment: true,
    backgroundBlendMode: true,
    bgImage: {
        property: "backgroundImage",
    },
    bgBlendMode: {
        property: "backgroundBlendMode",
    },
    bgSize: {
        property: "backgroundSize",
    },
    bgPosition: {
        property: "backgroundPosition",
    },
    bgRepeat: {
        property: "backgroundRepeat",
    },
    bgAttachment: {
        property: "backgroundAttachment",
    },
};
/**
 * Create the parser for the config object
 */
export var background = createParser(config);
//# sourceMappingURL=background.js.map