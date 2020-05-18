"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propNames = exports.layoutPropNames = exports.parser = void 0;
var tslib_1 = require("tslib");
var combine_parser_1 = require("./combine-parser");
var configs_1 = require("./configs");
var pseudo_1 = require("./pseudo");
exports.parser = combine_parser_1.combineParsers(configs_1.background, configs_1.border, configs_1.color, configs_1.flexbox, configs_1.layout, configs_1.outline, configs_1.grid, configs_1.others, configs_1.position, configs_1.shadow, configs_1.space, configs_1.typography);
var layoutParser = combine_parser_1.combineParsers(configs_1.space, configs_1.layout, configs_1.flexbox, configs_1.grid, configs_1.position);
exports.layoutPropNames = layoutParser.propNames;
exports.propNames = tslib_1.__spreadArrays(exports.parser.propNames, pseudo_1.pseudoPropNames);
//# sourceMappingURL=parser.js.map