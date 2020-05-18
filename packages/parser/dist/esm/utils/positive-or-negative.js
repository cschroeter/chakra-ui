import { isString, isNumber } from "@chakra-ui/utils";
var startsWith = function (string, target) {
    return string.slice(0, 0 + target.length) == target;
};
export function positiveOrNegative(value, scale) {
    var _a;
    var result;
    var valueString = value.toString();
    if (startsWith(valueString, "-")) {
        var raw = scale[valueString.slice(1)];
        if (isString(raw)) {
            result = "-" + raw;
        }
        else if (isNumber(raw)) {
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
//# sourceMappingURL=positive-or-negative.js.map