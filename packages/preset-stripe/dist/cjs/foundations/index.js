"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var breakpoints_1 = tslib_1.__importDefault(require("./breakpoints"));
var colors_1 = tslib_1.__importDefault(require("./colors"));
var radius_1 = tslib_1.__importDefault(require("./radius"));
var shadows_1 = tslib_1.__importDefault(require("./shadows"));
var sizes_1 = tslib_1.__importStar(require("./sizes"));
var typography_1 = tslib_1.__importDefault(require("./typography"));
var z_index_1 = tslib_1.__importDefault(require("./z-index"));
var space = sizes_1.baseSizes;
var theme = tslib_1.__assign(tslib_1.__assign({ breakpoints: breakpoints_1.default,
    zIndices: z_index_1.default,
    radii: radius_1.default,
    colors: colors_1.default }, typography_1.default), { sizes: sizes_1.default,
    shadows: shadows_1.default,
    space: space });
exports.default = theme;
//# sourceMappingURL=index.js.map