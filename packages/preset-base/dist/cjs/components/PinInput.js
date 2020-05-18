"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinInputTokens = void 0;
var tslib_1 = require("tslib");
var Input_1 = tslib_1.__importStar(require("./Input"));
var PinInput = {
    defaultProps: Input_1.default.defaultProps,
    baseStyle: Input_1.default.baseStyle,
    variants: Input_1.default.variants,
    sizes: {
        lg: {
            fontSize: "lg",
            width: 12,
            height: 12,
            borderRadius: "md",
        },
        md: {
            fontSize: "md",
            width: 10,
            height: 10,
            borderRadius: "md",
        },
        sm: {
            fontSize: "sm",
            width: 8,
            height: 8,
            borderRadius: "sm",
        },
    },
};
exports.PinInputTokens = {
    sizes: {
        lg: "lg",
        md: "md",
        sm: "sm",
    },
    variants: Input_1.InputTokens.variants,
};
exports.default = PinInput;
//# sourceMappingURL=PinInput.js.map