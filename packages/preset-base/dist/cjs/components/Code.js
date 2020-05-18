"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTokens = void 0;
var tslib_1 = require("tslib");
var Badge_1 = tslib_1.__importStar(require("./Badge"));
var Code = {
    defaultProps: Badge_1.default.defaultProps,
    baseStyle: {
        fontFamily: "mono",
        fontSize: "sm",
        paddingX: "0.2em",
        borderRadius: "sm",
    },
    variants: Badge_1.default.variants,
};
exports.CodeTokens = {
    variants: Badge_1.BadgeTokens.variants,
};
exports.default = Code;
//# sourceMappingURL=Code.js.map