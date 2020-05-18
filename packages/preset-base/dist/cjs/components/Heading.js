"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadingTokens = void 0;
var Heading = {
    defaultProps: {
        size: "xl",
    },
    baseStyle: {
        fontFamily: "heading",
        lineHeight: "shorter",
        fontWeight: "bold",
    },
    sizes: {
        "2xl": { fontSize: ["4xl", null, "5xl"] },
        xl: { fontSize: ["3xl", null, "4xl"] },
        lg: { fontSize: ["xl", null, "2xl"] },
        md: { fontSize: "xl" },
        sm: { fontSize: "md" },
        xs: { fontSize: "sm" },
    },
};
exports.HeadingTokens = {
    sizes: {
        "2xl": "2xl",
        xl: "xl",
        lg: "lg",
        md: "md",
        sm: "sm",
        xs: "xs",
    },
};
exports.default = Heading;
//# sourceMappingURL=Heading.js.map