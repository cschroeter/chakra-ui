"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineParsers = void 0;
var tslib_1 = require("tslib");
var create_parser_1 = require("./create-parser");
/**
 * Combine multiple style prop parsers
 * into a single parser.
 *
 * @param parsers list of parsers
 */
function combineParsers() {
    var parsers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parsers[_i] = arguments[_i];
    }
    var config = {};
    for (var _a = 0, parsers_1 = parsers; _a < parsers_1.length; _a++) {
        var parser_1 = parsers_1[_a];
        if (!parser_1 || !parser_1.config)
            continue;
        config = tslib_1.__assign(tslib_1.__assign({}, config), parser_1.config);
    }
    var parser = create_parser_1.createParser(config);
    parser.config = config;
    parser.propNames = Object.keys(config);
    return parser;
}
exports.combineParsers = combineParsers;
//# sourceMappingURL=combine-parser.js.map