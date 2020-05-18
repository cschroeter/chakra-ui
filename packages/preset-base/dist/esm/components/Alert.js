import { __assign } from "tslib";
import { ink, getColor } from "@chakra-ui/color";
import { mode } from "./utils";
function getSubtleStyle(props) {
    var t = props.theme, c = props.colorScheme;
    var light = getColor(t, c + ".100", c);
    var dark = ink(c + ".200", "lowest")(t);
    var bg = mode(light, dark)(props);
    return {
        Root: { bg: bg },
        Icon: {
            color: mode(c + ".500", c + ".200")(props),
        },
    };
}
function getLeftAccentStyle(props) {
    var c = props.colorScheme;
    return {
        Root: __assign({ paddingLeft: 3, borderLeft: "4px solid", borderColor: mode(c + ".500", c + ".200")(props) }, getSubtleStyle(props)["Root"]),
        Icon: {
            color: mode(c + ".500", c + ".200")(props),
        },
    };
}
function getTopAccentStyle(props) {
    var c = props.colorScheme;
    return {
        Root: __assign({ paddingTop: 2, borderTop: "4px solid", borderColor: mode(c + ".500", c + ".200")(props) }, getSubtleStyle(props)["Root"]),
        Icon: {
            color: mode(c + ".500", c + ".200")(props),
        },
    };
}
function getSolidStyle(props) {
    var c = props.colorScheme;
    return {
        Root: {
            bg: mode(c + ".500", c + ".200")(props),
            color: mode("white", "gray.900")(props),
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
export var AlertTokens = {
    variants: {
        solid: "solid",
        subtle: "subtle",
        "left-accent": "left-accent",
        "top-accent": "top-accent",
    },
};
export default Alert;
//# sourceMappingURL=Alert.js.map