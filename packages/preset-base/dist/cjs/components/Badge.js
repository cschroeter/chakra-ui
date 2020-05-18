"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeTokens = void 0;
var color_1 = require("@chakra-ui/color");
var utils_1 = require("./utils");
function getSolidStyle(props) {
    var c = props.colorScheme, t = props.theme;
    var dark = color_1.opacity(c + ".500", 0.6)(t);
    return {
        bg: utils_1.mode(c + ".500", dark)(props),
        color: utils_1.mode("white", "whiteAlpha.800")(props),
    };
}
function getSubtleStyle(props) {
    var c = props.colorScheme, t = props.theme;
    var darkBg = color_1.ink(c + ".200", "lowest")(t);
    return {
        bg: utils_1.mode(c + ".200", darkBg)(props),
        color: utils_1.mode(c + ".800", c + ".200")(props),
    };
}
function getOutlineStyle(props) {
    var c = props.colorScheme, t = props.theme;
    var dark = color_1.opacity(c + ".200", 0.8)(t);
    var light = color_1.getColor(t, c + ".500");
    var color = utils_1.mode(light, dark)(props);
    return {
        color: color,
        boxShadow: "inset 0 0 0px 1px " + color,
    };
}
var Badge = {
    defaultProps: {
        variant: "subtle",
        colorScheme: "gray",
    },
    baseStyle: {
        paddingX: 1,
        textTransform: "uppercase",
        fontSize: "xs",
        borderRadius: "sm",
        fontWeight: "bold",
    },
    variants: {
        solid: getSolidStyle,
        outline: getOutlineStyle,
        subtle: getSubtleStyle,
    },
};
exports.BadgeTokens = {
    variants: {
        solid: "solid",
        subtle: "subtle",
        outline: "outline",
    },
};
exports.default = Badge;
//# sourceMappingURL=Badge.js.map