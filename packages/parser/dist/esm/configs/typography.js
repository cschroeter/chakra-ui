import { createParser } from "../create-parser";
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
export var typography = createParser(config);
//# sourceMappingURL=typography.js.map