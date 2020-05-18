import { __makeTemplateObject } from "tslib";
import { keyframes } from "@chakra-ui/system";
import { mode } from "./utils";
import { getColor } from "@chakra-ui/color";
export var frame = function (start, end) { return keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    border-color: ", ";\n    background: ", ";\n  }\n  to {\n    border-color: ", ";\n    background: ", ";\n  }\n"], ["\n  from {\n    border-color: ", ";\n    background: ", ";\n  }\n  to {\n    border-color: ", ";\n    background: ", ";\n  }\n"])), start, start, end, end); };
export function getBaseStyle(props) {
    var _a = props.startColor, startColor = _a === void 0 ? mode("gray.100", "gray.800")(props) : _a, _b = props.endColor, endColor = _b === void 0 ? mode("gray.400", "gray.600")(props) : _b, speed = props.speed, theme = props.theme;
    var start = getColor(theme, startColor);
    var end = getColor(theme, endColor);
    return {
        borderColor: start,
        background: end,
        animation: speed + "s linear infinite alternate " + frame(start, end),
    };
}
var Skeleton = {
    baseStyle: getBaseStyle,
};
export default Skeleton;
var templateObject_1;
//# sourceMappingURL=Skeleton.js.map