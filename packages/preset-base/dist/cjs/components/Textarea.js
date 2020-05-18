"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextareaTokens = void 0;
var tslib_1 = require("tslib");
var Input_1 = tslib_1.__importStar(require("./Input"));
var Textarea = tslib_1.__assign(tslib_1.__assign({}, Input_1.default), { baseStyle: tslib_1.__assign(tslib_1.__assign({}, Input_1.default.baseStyle), { paddingY: "8px", minHeight: "80px", lineHeight: "short" }) });
exports.TextareaTokens = Input_1.InputTokens;
exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map