"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseStyle = exports.frame = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("./utils");
var color_1 = require("@chakra-ui/color");
exports.frame = function (start, end) { return system_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  from {\n    border-color: ", ";\n    background: ", ";\n  }\n  to {\n    border-color: ", ";\n    background: ", ";\n  }\n"], ["\n  from {\n    border-color: ", ";\n    background: ", ";\n  }\n  to {\n    border-color: ", ";\n    background: ", ";\n  }\n"])), start, start, end, end); };
function getBaseStyle(props) {
    var _a = props.startColor, startColor = _a === void 0 ? utils_1.mode("gray.100", "gray.800")(props) : _a, _b = props.endColor, endColor = _b === void 0 ? utils_1.mode("gray.400", "gray.600")(props) : _b, speed = props.speed, theme = props.theme;
    var start = color_1.getColor(theme, startColor);
    var end = color_1.getColor(theme, endColor);
    return {
        borderColor: start,
        background: end,
        animation: speed + "s linear infinite alternate " + exports.frame(start, end),
    };
}
exports.getBaseStyle = getBaseStyle;
var Skeleton = {
    baseStyle: getBaseStyle,
};
exports.default = Skeleton;
var templateObject_1;
//# sourceMappingURL=Skeleton.js.map