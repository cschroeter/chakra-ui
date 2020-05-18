"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUndefined = exports.isNotEmpty = exports.isSubcomponent = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
/**
 * Check if a theme key refers to a components
 * or sub-component
 */
function isSubcomponent(themeKey) {
    return themeKey.split(".").length > 1;
}
exports.isSubcomponent = isSubcomponent;
/**
 * Check if a style object is not empty
 */
function isNotEmpty(value) {
    return value && !utils_1.isEmptyObject(value);
}
exports.isNotEmpty = isNotEmpty;
function filterUndefined(object) {
    var result = tslib_1.__assign({}, object);
    for (var item in result) {
        if (typeof result[item] === "undefined") {
            delete result[item];
        }
    }
    return result;
}
exports.filterUndefined = filterUndefined;
//# sourceMappingURL=utils.js.map