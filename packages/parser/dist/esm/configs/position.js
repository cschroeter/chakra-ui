import { positiveOrNegative } from "../utils";
import { createParser } from "../create-parser";
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
        transform: positiveOrNegative,
    },
    insetX: {
        properties: ["left", "right"],
        scale: "space",
        transform: positiveOrNegative,
    },
    insetY: {
        properties: ["top", "bottom"],
        scale: "space",
        transform: positiveOrNegative,
    },
    top: {
        property: "top",
        scale: "space",
        transform: positiveOrNegative,
    },
    right: {
        property: "right",
        scale: "space",
        transform: positiveOrNegative,
    },
    bottom: {
        property: "bottom",
        scale: "space",
        transform: positiveOrNegative,
    },
    left: {
        property: "left",
        scale: "space",
        transform: positiveOrNegative,
    },
};
export var position = createParser(config);
//# sourceMappingURL=position.js.map