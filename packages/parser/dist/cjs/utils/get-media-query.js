"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMediaQuery = exports.toMediaQuery = void 0;
var utils_1 = require("@chakra-ui/utils");
/**
 * Converts a breakpoint unit to css media query string
 * @param breakpoint  - breakpoint as number or css unit
 */
exports.toMediaQuery = function (breakpoint) {
    var str = utils_1.isString(breakpoint) ? breakpoint : breakpoint + "px";
    return "@media screen and (min-width: " + str + ")";
};
/**
 * Format the breakpoints object in theme to
 * array and object css media query string
 *
 * @param breakpoints - the breakpoints in the theme
 * @param mapper - the function to convert each breakpoint to media query string
 */
function getMediaQuery(breakpoints, mapper) {
    if (mapper === void 0) { mapper = exports.toMediaQuery; }
    var _breakpoints = breakpoints !== null && breakpoints !== void 0 ? breakpoints : { sm: "40em", md: "52em", lg: "64em" };
    var asArray = utils_1.objectKeys(_breakpoints)
        .map(function (key) { return _breakpoints[key]; })
        .sort(function (a, b) { return a - b; })
        .map(mapper);
    var asObject = utils_1.objectKeys(_breakpoints).reduce(function (result, point) {
        result[point] = mapper(_breakpoints[point]);
        return result;
    }, {});
    return { asArray: asArray, asObject: asObject };
}
exports.getMediaQuery = getMediaQuery;
//# sourceMappingURL=get-media-query.js.map