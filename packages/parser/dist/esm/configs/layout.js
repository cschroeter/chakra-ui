import { get, isNumber } from "@chakra-ui/utils";
import { createParser } from "../create-parser";
function transform(value, scale) {
    var defaultValue = !isNumber(value) || value > 1 ? value : value * 100 + "%";
    return get(scale, value, defaultValue);
}
var config = {
    width: {
        property: "width",
        scale: "sizes",
        transform: transform,
    },
    w: {
        property: "width",
        scale: "sizes",
        transform: transform,
    },
    height: {
        property: "height",
        scale: "sizes",
    },
    h: {
        property: "height",
        scale: "sizes",
    },
    boxSize: {
        properties: ["width", "height"],
        scale: "sizes",
    },
    minWidth: {
        property: "minWidth",
        scale: "sizes",
    },
    minW: {
        property: "minWidth",
        scale: "sizes",
    },
    minHeight: {
        property: "minHeight",
        scale: "sizes",
    },
    minH: {
        property: "minHeight",
        scale: "sizes",
    },
    maxWidth: {
        property: "maxWidth",
        scale: "sizes",
    },
    maxW: {
        property: "maxWidth",
        scale: "sizes",
    },
    maxHeight: {
        property: "maxHeight",
        scale: "sizes",
    },
    maxH: {
        property: "maxHeight",
        scale: "sizes",
    },
    d: {
        property: "display",
    },
    overflow: true,
    overflowX: true,
    overflowY: true,
    display: true,
    verticalAlign: true,
    boxSizing: true,
};
export var layout = createParser(config);
//# sourceMappingURL=layout.js.map