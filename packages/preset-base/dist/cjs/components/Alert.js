"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertTokens = void 0;
var tslib_1 = require("tslib");
var color_1 = require("@chakra-ui/color");
var utils_1 = require("./utils");
function getSubtleStyle(props) {
    var t = props.theme, c = props.colorScheme;
    var light = color_1.getColor(t, c + ".100", c);
    var dark = color_1.ink(c + ".200", "lowest")(t);
    var bg = utils_1.mode(light, dark)(props);
    return {
        Root: { bg: bg },
        Icon: {
            color: utils_1.mode(c + ".500", c + ".200")(props),
        },
    };
}
function getLeftAccentStyle(props) {
    var c = props.colorScheme;
    return {
        Root: tslib_1.__assign({ paddingLeft: 3, borderLeft: "4px solid", borderColor: utils_1.mode(c + ".500", c + ".200")(props) }, getSubtleStyle(props)["Root"]),
        Icon: {
            color: utils_1.mode(c + ".500", c + ".200")(props),
        },
    };
}
function getTopAccentStyle(props) {
    var c = props.colorScheme;
    return {
        Root: tslib_1.__assign({ paddingTop: 2, borderTop: "4px solid", borderColor: utils_1.mode(c + ".500", c + ".200")(props) }, getSubtleStyle(props)["Root"]),
        Icon: {
            color: utils_1.mode(c + ".500", c + ".200")(props),
        },
    };
}
function getSolidStyle(props) {
    var c = props.colorScheme;
    return {
        Root: {
            bg: utils_1.mode(c + ".500", c + ".200")(props),
            color: utils_1.mode("white", "gray.900")(props),
        },
    };
}
var Alert = {
    defaultProps: {
        variant: "subtle",
    },
    baseStyle: {
        Root: {
            paddingX: 4,
            paddingY: 3,
        },
        Icon: {
            marginRight: 3,
            boxSize: 5,
        },
    },
    variants: {
        solid: getSolidStyle,
        subtle: getSubtleStyle,
        "left-accent": getLeftAccentStyle,
        "top-accent": getTopAccentStyle,
    },
};
exports.AlertTokens = {
    variants: {
        solid: "solid",
        subtle: "subtle",
        "left-accent": "left-accent",
        "top-accent": "top-accent",
    },
};
exports.default = Alert;
//# sourceMappingURL=Alert.js.map