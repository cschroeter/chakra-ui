"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTokens = void 0;
var tslib_1 = require("tslib");
var Badge_1 = tslib_1.__importStar(require("./Badge"));
var Tag = {
    defaultProps: {
        size: "lg",
        variant: "subtle",
        colorScheme: "gray",
    },
    baseStyle: {
        outline: 0,
        _focus: {
            boxShadow: "outline",
        },
    },
    sizes: {
        sm: {
            minHeight: "1.25rem",
            minWidth: "1.25rem",
            fontSize: "xs",
            paddingX: 1,
            borderRadius: "sm",
        },
        md: {
            minHeight: "1.5rem",
            minWidth: "1.5rem",
            fontSize: "sm",
            borderRadius: "md",
            paddingX: 2,
        },
        lg: {
            minHeight: 8,
            minWidth: 8,
            fontSize: "md",
            borderRadius: "md",
            paddingX: 3,
        },
    },
    variants: Badge_1.default.variants,
};
exports.TagTokens = {
    sizes: {
        sm: "sm",
        md: "md",
        lg: "lg",
    },
    variants: Badge_1.BadgeTokens.variants,
};
exports.default = Tag;
//# sourceMappingURL=Tag.js.map