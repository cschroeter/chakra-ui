import { getColor, ink, opacity } from "@chakra-ui/color";
import { mode } from "./utils";
function getSolidStyle(props) {
    var c = props.colorScheme, t = props.theme;
    var dark = opacity(c + ".500", 0.6)(t);
    return {
        bg: mode(c + ".500", dark)(props),
        color: mode("white", "whiteAlpha.800")(props),
    };
}
function getSubtleStyle(props) {
    var c = props.colorScheme, t = props.theme;
    var darkBg = ink(c + ".200", "lowest")(t);
    return {
        bg: mode(c + ".200", darkBg)(props),
        color: mode(c + ".800", c + ".200")(props),
    };
}
function getOutlineStyle(props) {
    var c = props.colorScheme, t = props.theme;
    var dark = opacity(c + ".200", 0.8)(t);
    var light = getColor(t, c + ".500");
    var color = mode(light, dark)(props);
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
export var BadgeTokens = {
    variants: {
        solid: "solid",
        subtle: "subtle",
        outline: "outline",
    },
};
export default Badge;
//# sourceMappingURL=Badge.js.map