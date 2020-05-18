"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
var utils_1 = require("@chakra-ui/utils");
function sort(obj) {
    var next = {};
    utils_1.objectKeys(obj)
        .sort(function (a, b) {
        return a.localeCompare(b, undefined, {
            numeric: true,
            sensitivity: "base",
        });
    })
        .forEach(function (key) {
        next[key] = obj[key];
    });
    return next;
}
exports.sort = sort;
//# sourceMappingURL=sort-styles.js.map