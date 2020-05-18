"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base = {
    fontSize: "inherit",
    fontWeight: "inherit",
    textAlign: "inherit",
    bg: "transparent",
    transition: "all 0.2s",
    borderRadius: "md",
    paddingX: "3px",
    marginX: "-3px",
};
var Editable = {
    baseStyle: {
        Preview: tslib_1.__assign(tslib_1.__assign({}, base), { cursor: "text", display: "inline-block" }),
        Input: tslib_1.__assign(tslib_1.__assign({}, base), { outline: 0, width: "full", _focus: {
                boxShadow: "outline",
            }, _placeholder: {
                opacity: 0.6,
            } }),
    },
};
exports.default = Editable;
//# sourceMappingURL=Editable.js.map