"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatTokens = void 0;
var Stat = {
    defaultProps: {
        size: "md",
    },
    baseStyle: {
        Label: { fontWeight: "medium" },
        HelpText: {
            opacity: 0.8,
            marginBottom: 2,
        },
        Number: {
            verticalAlign: "baseline",
            fontWeight: "semibold",
        },
    },
    /**
     * Only one size specifed but you can add more,
     * and style each part.
     */
    sizes: {
        md: {
            Label: { fontSize: "sm" },
            HelpText: { fontSize: "sm" },
            Number: { fontSize: "2xl" },
        },
    },
};
exports.StatTokens = {
    sizes: {
        md: "md",
    },
};
exports.default = Stat;
//# sourceMappingURL=Stat.js.map