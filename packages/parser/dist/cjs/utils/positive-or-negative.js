"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positiveOrNegative = void 0;
var utils_1 = require("@chakra-ui/utils");
var startsWith = function (string, target) {
    return string.slice(0, 0 + target.length) == target;
};
function positiveOrNegative(value, scale) {
    var _a;
    var result;
    var valueString = value.toString();
    if (startsWith(valueString, "-")) {
        var raw = scale[valueString.slice(1)];
        if (utils_1.isString(raw)) {
            result = "-" + raw;
        }
        else if (utils_1.isNumber(raw)) {
            result = raw * -1;
        }
        else {
            result = value;
        }
    }
    else {
        result = (_a = scale[value]) !== null && _a !== void 0 ? _a : value;
    }
    return result || value;
}
exports.positiveOrNegative = positiveOrNegative;
//# sourceMappingURL=positive-or-negative.js.map