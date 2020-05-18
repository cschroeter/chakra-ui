"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var foundations_1 = tslib_1.__importDefault(require("./foundations"));
var components_1 = tslib_1.__importDefault(require("./components"));
var styles_1 = tslib_1.__importDefault(require("./styles"));
var theme = tslib_1.__assign(tslib_1.__assign({}, foundations_1.default), { components: components_1.default,
    styles: styles_1.default });
exports.default = theme;
//# sourceMappingURL=index.js.map